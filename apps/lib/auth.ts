import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import db from "@repo/db/client" ;

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: {
                    label: "Phone Number",
                    type: "text",
                    placeholder: "Enter your phone number",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter your password",
                }
            } , 
            async authorize(credentials : any){
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                console.log("Authorizing user with phone:", credentials.phone) ;
                const existingUser = await db.user.findFirst({
                    where : {
                        number : credentials.phone
                    }
                }) ;
                console.log("checking existing user") ;
                if(existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password) ;
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
};