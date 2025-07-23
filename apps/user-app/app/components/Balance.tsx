"use client"
import { useAtom } from "jotai"
import { BalanceMinor } from "./BalanceMinor"
import { Boxtitle } from "./BoxTitle"
import { balanceAtom } from "../atoms/BalanceAtom"

export const Balance  = () => {
    const [balance , setBalance] = useAtom(balanceAtom) ;
    return (
        <div className="mt-15 ml-6 mr-6">
            <Boxtitle label={"Balance"} className={"font-semibold border-b-1"}/>  
            <BalanceMinor label={"Unlocked"} amount={balance.amount / 100 - balance.locked / 100}/>
            <BalanceMinor label={"Total Locked"} amount={balance.locked /100}/>
            <BalanceMinor label={"Total"} amount={balance.amount / 100}/>
        </div>
    )
}