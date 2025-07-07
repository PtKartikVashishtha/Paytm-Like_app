import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try{
        const session = await getServerSession(authOptions) ;
        if(session != null && session.user) {
            return NextResponse.json({
                user : session.user
            })
        }
    }catch(e){
        console.log("Error fetching the data" , e) ;
        return NextResponse.json({
            message : "Error fetching the data" , 
            error : e
            }  , {
                status : 500
            }
        );
    }
    
    return NextResponse.json({
        message : "You're Not logged In" 
    } , {
            status : 403
    })
    
}