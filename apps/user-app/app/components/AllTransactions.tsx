"use client"
import { useAtom } from "jotai";
import { Boxtitle } from "./BoxTitle"
import { Transaction } from "./Transaction";
import { allTransactionsAtom } from "../atoms/AllTransactionAtom";


export const AllTransactions = () => {
    const [transactions , setTransactions] = useAtom(allTransactionsAtom);
    return (
        <div className="mt-9 ml-6 mr-6">
            <Boxtitle label={"SELF Transactions"} text="text-xl" className={"font-semibold border-b-1 mb-3"}/>
            {transactions.length ? (
                transactions.map((transaction , index) => (
                    <div>
                        <Transaction transaction={transaction} key={index}/>
                    </div>
                ))
            ) : (
                <div className="flex justify-center text-3xl font-bold font-serif mt-11 text-shadow-xs">
                    No Transactions!!!
                </div>
            )}
        </div>
    )
}