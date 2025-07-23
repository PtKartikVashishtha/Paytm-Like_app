"use client"

import { useAtom } from "jotai"
import { SignUpAtom } from "../atoms/SignUpAtom"
import { ReactNode } from "react"
import { errorAtom } from "../atoms/errorAtom"
import { usePathname } from "next/navigation"

interface InputBoxForCredentailsProps {
    label : string ,
    type : string ,
    placeholder : string , 
    icon? : ReactNode 
}

export const InputBoxForCredentails = ({ label , type , placeholder , icon } : InputBoxForCredentailsProps) => {
    const [error , setError] = useAtom(errorAtom) ;
    const [, setUser] = useAtom(SignUpAtom) ;
    const pathname = usePathname() ;
    const segments = pathname.split('/').filter(Boolean) ;
    const handler = (value : string) => {
        if(label == "Name" && segments[0] == "signup") {
            setUser(prev => ({
                ...prev ,
                name : value
            }))
        }
        else if(label == "Email Or Phone"){
            setUser(prev => ({
                ...prev ,
                emailOrNumber : value
            }))
        }
        else{
            setUser(prev => ({
                ...prev ,
                password : value
            }))
        }
    }
    
    return (
        <div className="">
            <div className="font-bold font-serif text-md mb-4 text-purple-700 ml-2">{label}</div>
            <div className="relative w-full">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">{icon}</div>
                <input className={`pl-10 w-full p-3 text-lg font-serif rounded-xl cursor-pointer text-gray-700 border
                        ${error[label] ? "border-red-500 focus:ring focus:ring-red-500" : "border-gray-200 focus:ring-2 focus:ring-purple-400"}
                        bg-white focus:outline-none transition`}
                type={type} placeholder={placeholder} onChange={e => {handler(e.target.value)}}></input>
            </div>
                <p className={`text-xs ml-2 transition-all duration-200 ${
                    error[label] ? "text-red-500" : "invisible h-5"
                    }`}>
                    {error[label] || "placeholder"}
                </p>
        </div>
    )
}