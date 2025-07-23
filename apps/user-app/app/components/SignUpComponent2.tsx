"use client"

import { useAtom } from "jotai";
import { SignUpAtom } from "../atoms/SignUpAtom";
import { ButtonForCredential } from "./ButtonForCredentials"
import { InputBoxForCredentails } from "./InputBoxForCredentails"
import { Title } from "./Title"
import axios from "axios" ;
import { useRouter } from "next/navigation";
import { FiUser, FiLock } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { errorAtom } from "../atoms/errorAtom";
import { loadingAtom } from "../atoms/LoadingAtom";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";
import { FooterForCredential } from "./FooterForCredentiaals";
import { stepAtom } from "../atoms/StepAtom";
import { StepBar } from "./StepBar";

export const SignUpComponent2 = () => {
    const router = useRouter() ;
    const [user , setUser] = useAtom(SignUpAtom);
    const [, setError] = useAtom(errorAtom)
    const [, setLoading] = useAtom(loadingAtom) ;
    const [step] = useAtom(stepAtom) ;
    const onClick = async () => {
        try{
            setLoading(true) ;
            const newErrors: { [key: string]: string } = {} ;
            if (!user.name) newErrors["Name"] = "Name is required"
            if (!user.emailOrNumber) newErrors["Email Or Phone"] = "Email or Phone is required"
            if (!user.password) newErrors["Password"] = "Password is required"

            setError(newErrors)
            if(Object.keys(newErrors).length == 0) {
                const response = await axios.post("/api/signup" , user);
                const data = response.data ;
                if(data.message){
                    setLoading(false) ;
                    alert(data.message) ;
                    return ;
                }
                const res = await signIn("credentials" , data.user)
                if(res?.ok) router.push("/home") ;
                else {
                    return NextResponse.json({
                        message : "Failed SignUp"
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
            <Title label={"SignUp"} />
            <StepBar step={step} />
            <InputBoxForCredentails label="Email Or Phone" placeholder="Enter Email Or Number" type="text" icon={<HiOutlineMail size={19}/>}/>
            <InputBoxForCredentails label="Password" placeholder="Create Your Password" type="Password" icon={<FiLock/>}/>
            <ButtonForCredential label={"SignUp"} onClick={onClick} />
            <FooterForCredential label="Already Have An Account" button="SignIn" location="signin"/>
        </div>
    )
}
