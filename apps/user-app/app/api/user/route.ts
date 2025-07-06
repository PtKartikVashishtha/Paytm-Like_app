import { PrismaClient } from "@repo/db/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient() ;

export async function GET() {
    await prisma.$connect() ;
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