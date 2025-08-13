"use client"
import { useAtom } from "jotai";
import { Boxtitle } from "./BoxTitle"
import { p2pTranscactionsAtom } from "../atoms/p2pTransactionsAtom";
import { P2pTransaction } from "./p2pTransactions";


export const AllP2PTransactions = () => {
    const [data ] = useAtom(p2pTranscactionsAtom);
    return (
        <div className="mt-9 ml-6 mr-6">
            <Boxtitle label={"P2P Transactions"} text="text-xl" className={"font-semibold border-b-1 mb-3"}/>
            {data.transactions.length ? (
                data.transactions.map((transaction : any , index : any) => (
                    <P2pTransaction transaction={transaction} userId={data.userId} key={index}/>
                ))
            ) : (
                <div className="flex justify-center text-3xl font-bold font-serif mt-11 text-shadow-xs">
                    No Transactions!!!
                </div>
            )}
        </div>
    )
}