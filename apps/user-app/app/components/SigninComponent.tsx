
"use client"

import { useAtom } from "jotai";
import { SignUpAtom } from "../atoms/SignUpAtom";
import { ButtonForCredential } from "./ButtonForCredentials"
import { InputBoxForCredentails } from "./InputBoxForCredentails"
import { Title } from "./Title"
import axios from "axios" ;
import { useRouter } from "next/navigation";
import { FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { errorAtom } from "../atoms/errorAtom";
import { loadingAtom } from "../atoms/LoadingAtom";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";
import { FooterForCredential } from "./FooterForCredentiaals";

export const SignInComponent = () => {

    const router = useRouter() ;
    const [user] = useAtom(SignUpAtom);
    const [, setError] = useAtom(errorAtom)
    const [, setLoading] = useAtom(loadingAtom) ;
    
    const onClick = async () => {
        try{
            setLoading(true) ;
            const newErrors: { [key: string]: string } = {} ;
            if (!user.emailOrNumber) newErrors["Email Or Phone"] = "Email or Phone is required"
            if (!user.password) newErrors["Password"] = "Password is required"

            setError(newErrors)
            if(Object.keys(newErrors).length == 0) {
                try {
                    const response = await signIn("credentials" , {
                        phoneOrEmail : user.emailOrNumber ,
                        password : user.password ,
                        redirect : false
                    });
                    if(response?.ok) router.push("/home") ;
                    else{
                        setLoading(false) ;
                        if (response?.error === "CredentialsSignin") {
                            alert("Invalid phone/email or password.");
                        } else {
                            alert("An unknown error occurred.");
                        }
                    }
                    console.log(response) ;
                }
                catch(e) {
                    console.log(e) ;
                    return NextResponse.json({
                        message : "Failed SignIn"
                    });
                }
            }
        }
        catch(e){
            console.log(e) ;
        }
    }
    return (
        <div className="h-135 w-100 rounded-4xl p-6 shadow-md bg-white">
            <Title label={"SignIn"} />
            <InputBoxForCredentails label="Email Or Phone" placeholder="Enter Email Or Number" type="text" icon={<HiOutlineMail size={19}/>}/>
            <InputBoxForCredentails label="Password" placeholder="Create Your Password" type="Password" icon={<FiLock/>}/>
            <ButtonForCredential label={"SignIn"} onClick={onClick} />
            <FooterForCredential label="Don't Have An Account" button="SignUp" location="signup"/>
        </div>
    )
}
