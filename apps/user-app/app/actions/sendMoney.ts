"use server" 

import db from "@repo/db/client"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../lib/auth";

export const sendMoney = async (data : {
    numberOrEmail : string ,
    amount : number
}) => {

    //@ts-ignore
    const session = await getServerSession(authOptions) ;
    if(!session){
        return ({
            message : "You are not logged in"
        })
    }

    //@ts-ignore
    const SenderId = JSON.parse(session.user.id) ;
    
    const sender = await db.user.findFirst({
        where : {
            id : SenderId
        } , 
        select : {
            id : true ,
            name : true ,
            Balance : {
                select : {
                    amount : true , 
                    locked : true
                }
            }
        }
    }) ;
    console.log(sender) ;
    
    //@ts-ignore
    if((sender.Balance[0].amount - sender.Balance[0].locked) < data.amount){
        return ({
            message : "Insufficient Balance"
        }) ;
    }
    
    const reciever = await db.user.findFirst({
        where : {
            OR : [
                {
                    email : data.numberOrEmail
                } ,
                {
                    number : data.numberOrEmail
                }
            ]
        } , 
        select : {
            id : true ,
            name : true ,
            Balance : {
                select : {
                    amount : true , 
                    locked : true
                }
            }
        } , 
    }) ;

    console.log(reciever) ;

    if(!reciever) {
        return ({
            message : "Reciever Not found"
        }) ;
    }

    if(reciever.id === SenderId){
        return ({
            message : "You cannot send money to yourself"
        }) ;
    }

    const transaction = await db.p2pTransactions.create({
        data : {
            SenderUserId : SenderId ,
            RecieverUserId : reciever.id ,
            amount : data.amount ,
            status : "Processing" ,
            startTime : new Date() ,
        }
    }) ;
    try {
        await db.$transaction([
            db.balance.update({
                data : {
                    amount : {
                        decrement: data.amount
                    }
                } ,
                where : {
                    userId : SenderId
                }
            }) ,
            db.balance.update({
                data : {
                    amount : {
                        increment : data.amount
                    }
                } , 
                where : {
                    userId : reciever.id
                }
            }), 
            db.p2pTransactions.update({
                data : {
                    status : "Success"
                } ,
                where : {
                    id : transaction.id
                }
            })
        ]) ;
        console.log("Transaction completed successfully") ;
    } catch(err){
        console.log(err) ;
        await db.p2pTransactions.update({
            data : {
                status : "Failed"
            } ,
            where : {
                id : transaction.id
            }
        })
    }
    return ({
        message : "Money Sent Succesfully" ,
        recieverName : reciever.name ,
        amount : data.amount / 100,
        date : new Date(),
        status : "Success"
    })
}