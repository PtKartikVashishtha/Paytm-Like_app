"use client"
import { useAtom } from "jotai"
import { Boxtitle } from "./BoxTitle"
import { Button } from "./Button"
import { InputBox } from "./InputBox"
import { urlAtom } from "../atoms/urlAtom"
import axios from "axios"
import { amountAtom } from "../atoms/amountAtom"
import { TOken } from "../api/auth/start-transaction/route"

export const AddMoney = () => {
    const [amount , setAmount ] = useAtom(amountAtom) ;
    const [url , setUrl] = useAtom(urlAtom) ;
    return (
        <div className="p-2 mt-10 ml-6 mr-3 ">
            <Boxtitle label={"Add Money"} className={"font-semibold border-b-1"}/>
            <InputBox label={"Amount"} placeHolder="Enter Amount"/>
            <InputBox label={"Bank"} placeHolder="Select Bank Name" select={true}/>
            <div className="flex justify-center">
                <Button label={"Add money"} className={"w-28 text-md mt-6 shadow-md p-2"} onClick={async () => {
                    if(amount < 1 || amount === undefined || amount === null || isNaN(amount)){
                        alert("Please Fill Amount Greater than 1") ;
                        return ;
                    }
                    if(url == "") {
                        alert("Please Select Bank") ;
                        return ;
                    }
                    axios.post("api/auth/start-transaction" , {
                        amount : amount
                    })
                    location.href = url+`?token=${TOken}`
                }}/>
            </div>
        </div>
    )
}