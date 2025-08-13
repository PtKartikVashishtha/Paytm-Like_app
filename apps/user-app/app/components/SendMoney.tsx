"use client"
import { useAtom } from "jotai"
import { Boxtitle } from "./BoxTitle"
import { Button } from "./Button"
import { SearchBarForSendMoney } from "./SearchBarForSendMoney"
import { p2pDetailsAtom } from "../atoms/p2pdetailsatom"
import { sendMoney } from "../actions/sendMoney"
import { useRouter } from "next/navigation"
import { loadingAtom } from "../atoms/LoadingAtom"

export const SendMoney = () => {
    const router = useRouter() ;
    const [loading , setLoading] = useAtom(loadingAtom) ;
    const [p2p , setP2p] = useAtom(p2pDetailsAtom) ;
    const onChangeNumberOrEmail = (e : React.ChangeEvent<HTMLInputElement>) => {
        setP2p({
            ...p2p , 
            numberOrEmail : e.target.value
        }) ;
    } 
    const onChangeAmount = (e : React.ChangeEvent<HTMLInputElement>) => {
        setP2p({
            ...p2p , 
            amount : JSON.parse(e.target.value) * 100
        }) ;
    }
    const onClick = async () => {
        if(loading){
            alert("Please wait, processing...") ;
            return ;
        }
        if(!p2p.numberOrEmail){
            alert("Please enter number or email") ;
            return ;
        }
        if(p2p.amount < 100){
            alert("Please enter amount greater than 1") ;
            return ;
        }
        setLoading(true) ;
        const message = await sendMoney(p2p) ;
        console.log(message) ;
        if(message.date){
            router.push(`/sent?recieverName=${message.recieverName}&amount=${p2p.amount/100}&date=${message.date}&status=${message.status}`) ;
            setLoading(false) ;
            setP2p({
                numberOrEmail : "" ,
                amount : 0
            }) ;
            return ;
        }
        //@ts-ignore
        alert(message.message) ;
        setLoading(false) ;
    }
    return (
        <div>
            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-50">
                        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-4 text-white text-lg font-semibold animate-pulse">Processing...</p>
                    </div>
                )}

            <div className="w-150">
                <Boxtitle label={"Payment"} className={"font-semibold border-b-1 flex justify-center text-purple-700"} text="text-3xl"/>
                <div className="mt-5"></div>
                <SearchBarForSendMoney label="Number Or Email" placeholder="Enter Number" onChange={onChangeNumberOrEmail}/>
                <SearchBarForSendMoney label="Amount" placeholder="Enter Amount" type="number" onChange={onChangeAmount}/>
                <div className="flex justify-center">
                    <Button label={loading ? "processing" : "Send Money"} className={"w-30 text-md mt-6 shadow-md p-2"} onClick={onClick} />
                </div>
            </div>
        </div>
    )
}