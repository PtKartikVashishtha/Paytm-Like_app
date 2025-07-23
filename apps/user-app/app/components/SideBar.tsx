"use client"

import { usePathname } from "next/navigation"
import { SideBarComp } from "./SIdeBarComp"

export const SideBar = () => {
    const pathname = usePathname() ;
    const segments = pathname.split('/').filter(Boolean) ;
    console.log(segments) ;
    return (
        <div className="border-r-3 border-gray-300 w-60 pt-13 min-h-screen">
            <SideBarComp label={"Home"} icon={<svg xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 
                .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5
                 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z"/>
                </svg>} colour={segments[0] == "home" ? "purple-700" : "gray-500"} navigateTo={"home"}>
            </SideBarComp>
            <SideBarComp label={"Transfer"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
                className="bi bi-arrow-left-right" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a
                .5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 
                0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"/>
                </svg>} colour={segments[0] == "transfer" ? "purple-700" : "gray-500"} navigateTo={"transfer"}>
            </SideBarComp>
            <SideBarComp label={"Transactions"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" 
                className="bi bi-bank2" viewBox="0 0 16 16">
                <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 
                .277-.916zM12.375 6v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zm-2.5 0v7h-1.25V6zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2M.5 15a.5.5 0 
                0 0 0 1h15a.5.5 0 1 0 0-1z"/>
                </svg>} colour={segments[0] == "transactions" ? "purple-700" : "gray-500"} navigateTo={"transactions"}>
            </SideBarComp>
            <SideBarComp label={"P2P Transfer"} icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 
                20.875L5.999 12Zm0 0h7.5" />
                </svg>} colour={segments[0] == "p2p" ? "purple-700" : "gray-500"} navigateTo={"p2p"}>
            </SideBarComp>
        </div>
    )
}