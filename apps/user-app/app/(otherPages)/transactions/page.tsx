"use client";

import { useEffect, useState } from "react";
import { AllP2PTransactions } from "../../components/allP2pTransactions";
import { AllTransactions } from "../../components/AllTransactions";
import { PageTitle } from "../../components/PageTitle";
import { RecentTransactions } from "../../components/RecentTransactions";
import { SideBar } from "../../components/SideBar";
import { TransactionBar } from "../../components/TransactionBar";
import { useAtom } from "jotai";
import { activeAtom } from "../../atoms/activeAtom";


export default function () {
    const [trans , setTrans] = useState(<div></div>);
    const [active] = useAtom(activeAtom) ;
    useEffect(() => {
        if(active === "SELF") setTrans(<AllTransactions/>) ;
        if(active === "P2P") setTrans(<AllP2PTransactions/>);
    } , [active]) ;
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
           <div className="flex">
                <SideBar/>
                <div className="w-full">
                    <PageTitle title={"Transactions"}/>
                    <div className="flex justify-center mt-5">
                        <TransactionBar/>
                    </div>
                    {trans}
                </div>
            </div>
        </div>
    )
}