"use client" ;

import { useAtom } from "jotai"
import { activeAtom } from "../atoms/activeAtom"

export const TransactionBar = () => {
    const [active , setActive] = useAtom(activeAtom) ;
    const baseClasses = `flex justify-center items-center rounded-md h-10 px-8 
        cursor-pointer transition-all duration-300 ease-in-out border-2 border-purple-500 shadow-md`;

    const activeClasses = `scale-105 shadow-lg text-white bg-gradient-to-r from-purple-500 to-pink-500`;

    const inactiveClasses = `text-purple-700 hover:scale-105 hover:shadow-lg hover:text-white 
        hover:bg-gradient-to-r from-purple-500 to-pink-500`;
    return (
        <div>
            <div className="w-100 h-16  flex justify-between rounded-xl px-5 text-2xl items-center text-purple-700
                font-semibold font-serif shadow-xl bg-white/70 backdrop-blur-lg border-2 border-purple-200">
                <div className={`${baseClasses} ${active === "P2P" ? activeClasses : inactiveClasses}`}
                    onClick={() => setActive("P2P")}>
                    P2P
                </div>
                <div className={`${baseClasses} px-7 ${active === "SELF" ? activeClasses : inactiveClasses}`}
                    onClick={() => setActive("SELF")}>
                    SELF
                </div>
            </div>
        </div>
    )
}