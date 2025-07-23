"use client"
import { useAtom } from "jotai";
import { useRouter } from "next/navigation"
import { loadingAtom } from "../atoms/LoadingAtom";

interface FooterForCredentialProps {
    label : string ,
    button : string ,
    location : string 
}

export const FooterForCredential = ({ label , button , location } : FooterForCredentialProps) => {
    const [,setLoading] = useAtom(loadingAtom) ;
    const router = useRouter() ;
    const onClick = async () => {
        setLoading(false) ;
        router.push(`/${location}`)
    }
    return (
        <div className="text-purple-700 text-md flex justify-center items-center mt-6">
            <div>{label} ?</div>
            <button className="underline ml-1 mr-1 transition duration-300 cursor-pointer hover:text-purple-900" 
            onClick={onClick}>{button}</button>
        </div>
    )
}