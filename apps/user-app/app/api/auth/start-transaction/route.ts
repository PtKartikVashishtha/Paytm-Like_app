import db from "@repo/db/client"
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import axios from "axios";

export const POST = async (req : NextRequest) => {
    const body : {amount : number} = await req.json() ;
    console.log(body) ;
    //@ts-ignore
    const session = await getServerSession(authOptions) ;

    if(!session) {
        return NextResponse.json({
            messagee : "Not Logged In"
        } , {
            status : 401
        })
    }
    let transaction : any = null ;
    //@ts-ignore
    const userId = session.user.id ;
    try{
        const token = await bcrypt.hash(userId+body.amount , 10)
        transaction = await db.onRampTranstion.create({
            data : {
                userId : JSON.parse(userId),
                token : token ,
                amount : body.amount ,
                startTime : new Date(),
                status : "Processing"
            }
        }) ;
        console.log(transaction)
        const response = await axios.post('http://localhost:3003', {
            userId : JSON.parse(userId),
            amount: body.amount,
            token
        } , {withCredentials : true}) ;
        console.log(response.data) ;
        if(response.data.message != "captured"){
            await db.onRampTranstion.update({
                data : {
                    status : "Failed" 
                } , 
                where : {
                    id : transaction.id
                }
            })
        } 
        return NextResponse.json({
            message : "Transaction Completed"
        })
    }
    catch(e){
        if(transaction){
            await db.onRampTranstion.update({
                data : {
                    status : "Failed" 
                } , 
                where : {
                    token : transaction.token
                }
            })
        }
        
        return NextResponse.json({
            message : "transaction wasn't completed"
        } , {
            status : 500
        }) ;
    }
}