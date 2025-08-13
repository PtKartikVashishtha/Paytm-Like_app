import { NextResponse } from "next/server";
import db from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../../lib/auth";

enum Status {
    Success,
    Processing ,
    Failed 
}

interface TransactionType {
    id: number ;
    SenderUserId: number;
    RecieverUserId: number;
    amount: number;
    status: Status;
    startTime: Date;
}

export const GET : () => Promise<ReturnType<typeof NextResponse.json>> = async () => {
    //@ts-ignore
    const session = await getServerSession(authOptions) ;
    if(!session){
        return NextResponse.json({
            message : "Not LoggedIn"
        });
    }
    try {
        //@ts-ignore
        const userId = JSON.parse(session.user.id) ;
        let transactions = await db.p2pTransactions.findMany({
            where : {
                OR : [
                    {
                        SenderUserId : userId
                    } , 
                    {
                        RecieverUserId : userId
                    }
                ]
            } , 
            orderBy : {
                startTime : "desc"
            } , 
            include : {
                sender : {
                    select : {
                        name : true
                    }
                } , 
                receiver : {
                    select : {
                        name : true
                    }
                }
            }
        }) ;
        return NextResponse.json({
            message : "Transactions fetched successfully" ,
            //@ts-ignore
            transactions : transactions , 
            userId
        }) ;
    }
    catch(err){
        return NextResponse.json({
            message : "Error fetching transactions" ,
            error : err
        })
    }
}