import { AllTransactions } from "../../components/AllTransactions";
import { PageTitle } from "../../components/PageTitle";
import { RecentTransactions } from "../../components/RecentTransactions";
import { SideBar } from "../../components/SideBar";


export default function () {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
           
           <div className="flex">
                <SideBar/>
                <div className="w-full">
                    <PageTitle title={"Transactions"}/>
                    <div>
                        <AllTransactions/>
                    </div>
                </div>
            </div>
        </div>
    )
}