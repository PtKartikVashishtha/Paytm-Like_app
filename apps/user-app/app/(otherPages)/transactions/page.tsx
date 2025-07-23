import { PageTitle } from "../../components/PageTitle";
import { SideBar } from "../../components/SideBar";


export default function () {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
           
           <div className="flex">
                <SideBar/>
                <PageTitle title={"Transactions"}/>
            </div>
        </div>
    )
}