"use client"

import { useRouter } from "next/navigation"

interface SideBarProps {
    label : string,
    icon? : React.ReactNode
    colour : String 
    navigateTo : string
}

export const SideBarComp = (props : SideBarProps) => {
    const router = useRouter() ;
    return <div className="ml-8 mb-5">
        <div className={`flex items-center group`} onClick={() => {
            router.push(props.navigateTo) ;
        }}>
            {props.icon ? <div className= {`text-${props.colour} group-hover:text-purple-700`} >{props.icon}</div> : <div></div>}
            <div className={`text-lg text-${props.colour} font-bold cursor-pointer ml-2 group-hover:text-purple-700`}>{props.label}</div>
        </div>
    </div>
}