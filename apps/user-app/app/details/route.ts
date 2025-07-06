
import { NextResponse } from "next/server";
import { PrismaClient } from "../../../../packages/db/generated/prisma";

const prisma = new PrismaClient() ;

export async function GET() {
    const user = await prisma.user.create({
        data : {
            name : "John Doe",
            email : "jhon@123"
        }
    }) ;
    
    return NextResponse.json({
        message: "User created successfully",
        user : user
    }) 
}