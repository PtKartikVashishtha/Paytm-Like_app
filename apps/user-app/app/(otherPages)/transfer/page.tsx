import { AddMoney } from "../../components/AddMoney";
import { Balance } from "../../components/Balance";
import { PageTitle } from "../../components/PageTitle";
import { RecentTransactions } from "../../components/RecentTransactions";
import { SideBar } from "../../components/SideBar";

export default function () {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
           <div className="flex">
                <SideBar/>
                <div className="w-full">
                    <PageTitle title={"Transfer"}/>
                    <div className="grid grid-cols-2">
                        <div className="col-span-1">
                            <AddMoney/>
                        </div>
                        <div className="col-span-1">
                            <Balance />
                            <RecentTransactions/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}