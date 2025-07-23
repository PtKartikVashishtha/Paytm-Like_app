import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../../../../lib/auth";
import db from "@repo/db/client" ;

export const GET: (req: NextRequest) => Promise<NextResponse> = async (req: NextRequest) => {

    const session = await getServerSession(authOptions) ;

    if(!session){
        return NextResponse.json({
            message : "You Aren't Logged in"
        } , {
            status : 401
        })
    }
    //@ts-ignore
    const userId = JSON.parse(session.user.id)

    const userDetails = await db.user.findUnique({
        where : {
            //@ts-ignore
            id : userId
        } , 
        select : {
            name : true ,
            email : true , 
            number : true , 
            id : true
        }
    }) ;
    const balanceDetails = await db.balance.findUnique({
        where : {
            //@ts-ignore
            userId : userId
        } , 
        select : {
            locked : true , 
            amount : true ,
        }
    })
    const transactionsDetails = await db.onRampTranstion.findMany({
        where : {
            userId : userId
        } , 
        select : {
            amount : true ,
            token : true ,
            startTime : true ,
            status : true
        } , 
        orderBy : {
            startTime : "desc"
        } , 
        take : 4
    })

    return NextResponse.json({
        user : userDetails ,
        transaction : transactionsDetails ,
        balance : balanceDetails
    }) ;
} 