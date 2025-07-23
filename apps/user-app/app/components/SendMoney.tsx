"use client"
import { Boxtitle } from "./BoxTitle"
import { Button } from "./Button"
import { SearchBarForSendMoney } from "./SearchBarForSendMoney"

export const SendMoney = () => {
    return (
        <div className="w-150">
            <Boxtitle label={"Payment"} className={"font-semibold border-b-1 flex justify-center text-purple-700"} text="text-3xl"/>
            <div className="mt-5"></div>
            <SearchBarForSendMoney label="Number Or Email" placeholder="Enter Number"/>
            <SearchBarForSendMoney label="Amount" placeholder="Enter Amount"/>
            <div className="flex justify-center">
                <Button label={"Add money"} className={"w-30 text-md mt-6 shadow-md p-2"} onClick={() => {}} />
            </div>
        </div>
    )
}