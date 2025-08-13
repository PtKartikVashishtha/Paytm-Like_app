"use client";

import { useSearchParams } from "next/navigation"
import { formatDate } from "./Transaction";

export const Sent = () => {
    const params = useSearchParams() ;
    const RecieverName = params.get("recieverName") || "Unknown" ;
    const amount = params.get("amount") || 0 ;
    let date = params.get("date") || new Date() ;
    const status = params.get("status") || "Failed" ;
    const right = <img src="/right.svg" alt="Right"/>
    const wrong = <img src="/wrong.svg" alt="Right"/>
    date = formatDate(date) ;
    const text = status === "Success" ? "Sent" : "Failed to send" ;
    return (
        <div>
            <div className= "rounded-full flex justify-center">
                {status === "Success" ? right : wrong}
            </div>
            <div className="mt-5 flex justify-center text-purple-700 font-semibold text-2xl font-serif">
                <div className="mt-2">
                    {text} Rs.
                </div>
                <div className="ml-2 text-green-600 font-semibold text-4xl">{amount}</div>
            </div>
            {status === "Success" && <div className="mt-5 flex justify-center text-purple-700 font-semibold font-serif">
                <div className="mt-2 text-2xl">
                    To
                </div>
                <div className="ml-2 text-purple-900 text-4xl">
                    {RecieverName}
                </div>
            </div>
            }            
            {status === "Success" && (
                <div className="mt-5 flex justify-center text-purple-700 font-semibold font-sans">
                    {date}
                </div>
            )}
        </div>
    )
}