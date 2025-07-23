"use client"
import { useAtom } from "jotai";
import { Boxtitle } from "./BoxTitle"
import { Transaction } from "./Transaction";
import { transactionsAtom } from "../atoms/transactionsAtom";


export const RecentTransactions = () => {
    const [transactions , setTransactions] = useAtom(transactionsAtom)
    return (
        <div className="mt-9 ml-6 mr-6">
            <Boxtitle label={"Recent Transactions"} text="text-xl" className={"font-semibold border-b-1 mb-3"}/>
            {transactions.length ? (
                transactions.map((transaction , index) => (
                    <Transaction transaction={transaction} key={index}/>
                ))
            ) : (
                <div className="flex justify-center text-3xl font-bold font-serif mt-11 text-shadow-xs">
                    No Transactions!!!
                </div>
            )}
        </div>
    )
}