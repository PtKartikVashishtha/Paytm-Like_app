import db from "@repo/db/client" ;
import z from "zod" ;
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

const userschema = z.object({
    name : z.string() ,
    emailOrNumber : z.string().refine((val) => {
        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        const isNumber = /^[0-9]{10,}$/.test(val);
        return isEmail || isNumber;
    }, {
        message: "ep must be a valid email or a Number with at least 10 digits"
    }) ,
    password : z.string() 
});

export type body = z.infer<typeof userschema>

export async function POST (req : NextRequest) {
    const User = await req.json() ;
    const success = userschema.safeParse(User)
    if(success.success){
        const Password = await bcrypt.hash(User.password, 10);
        var dataToBeSent : {name : string , password : string , email? : string , number? : string , redirect? : boolean}= {
            name : User.name ,
            password : Password
        }
        if(User.emailOrNumber.includes("@")){
            dataToBeSent.email = User.emailOrNumber ;
        }
        else{
            dataToBeSent.number = User.emailOrNumber ;
        }
        console.log(dataToBeSent) ;
        const creatingUser = await db.user.create({
            //@ts-ignore
            data : dataToBeSent
        })
        await db.balance.create({
            data : {
                userId : creatingUser.id ,
                amount : 0 , 
                locked : 0
            }
        }) ;
        const credentials = {
            phoneOrEmail : User.emailOrNumber , 
            password : User.password , 
            redirect : false
        }
        return NextResponse.json({
            message : "SingedUp Succesfully" , 
            user : credentials
        })
    }     
    else {
        console.log(success.error) ;
        return NextResponse.json({
            message : "Invalid Format"
        })
    }
}
    