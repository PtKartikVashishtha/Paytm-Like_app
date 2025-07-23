import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@repo/db/client" ;
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phoneOrEmail: {
                    label: "Phone Or Email",
                    type: "text",
                    placeholder: "Enter your phone number Or Email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                }
            } , 
            async authorize(credentials : any){
                var existingUser : any = {} ;
                if(credentials.phoneOrEmail.includes("@")) {
                    console.log("checking existing user with email") ;
                    const user = await db.user.findFirst({
                        where : {
                            email : credentials.phoneOrEmail
                        }
                    }) ;
                    if(user){
                        existingUser = user ;
                    }
                    else{
                        return null ;
                    }
                }
                else{
                    console.log("checking existing user with number") ;
                    const user = await db.user.findFirst({
                        where : {
                            number : credentials.phoneOrEmail
                        }
                    }) ;
                    if(user){
                        existingUser = user ;
                    }
                    else{
                        return null ;
                    }
                }
                if(existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password , existingUser.password) ;
                    if(passwordValidation){
                        console.log("User found and password matches") ;
                        return {
                            id : existingUser.id.toString(),
                            name : existingUser.name ,
                            email : existingUser.email
                        }
                    }
                    return null ;
                }
                
                return null ;
            }
            
        })
    ] , 
    secret: process.env.JWT_SECRET || "secret",
    callbacks : {
        async session({ session , token} : {
            token : JWT , 
            session : Session
        }){
            if(token){
                //@ts-ignore
                session.user.id = token.sub ;
            }
            return session ;
        }
    } , 
    pages : {
        signin : "signin"
    }
};