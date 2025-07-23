import { PageTitle } from "../../components/PageTitle";
import { SendMoney } from "../../components/SendMoney";
import { SideBar } from "../../components/SideBar";


export default function () {
    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200">
           
           <div className="flex">
                <SideBar/>
                <div className="w-full">
                    <PageTitle title={"Send Money"}/>
                    <div className="flex justify-center items-center mt-20 border-2 border-gray-300 rounded-3xl mx-75 py-10 shadow-lg 
                    bg-gradient-to-br from-[#ffeef5] to-[#ecd6e7]">
                        <SendMoney></SendMoney>
                    </div>
                </div>
            </div>
        </div>
    )
}