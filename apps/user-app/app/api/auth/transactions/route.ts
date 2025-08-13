import { getServerSession } from "next-auth"
import { authOptions } from "../../../../../lib/auth"
import { NextResponse } from "next/server";
import db from "@repo/db/client"

export const GET: () => Promise<ReturnType<typeof NextResponse.json>> = async () => {
    //@ts-ignore
    const session = await getServerSession(authOptions) ;
    if(!session){
        return NextResponse.json({
            message : "Not LoggedIn"
        })
    } 
    //@ts-ignore
    const userId = JSON.parse(session.user.id) ;
    const transactions = await db.onRampTranstion.findMany({
        where : {
            userId : userId
        } , 
        orderBy : {
            startTime : "desc"
        } 
    }) ;
    return NextResponse.json({
        transactions
    })
}