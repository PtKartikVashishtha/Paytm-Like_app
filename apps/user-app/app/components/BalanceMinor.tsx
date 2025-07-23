import { Boxtitle } from "./BoxTitle"

interface ButtomMinorProps {
    label : String ,
    amount : Number , 
}

export const BalanceMinor = ({ label , amount } : ButtomMinorProps) => {
    return (
        <div>
            <div className="flex justify-between border-b-2 border-gray-200">
                <Boxtitle label={label + " Balance"} text="text-md"></Boxtitle>
                <div className="flex">
                    <Boxtitle label={amount + ""} text="text-xl" className={"font-medium font-mono text-yellow-600"} ></Boxtitle> 
                    <div className="ml-2 text-sm mt-4 text-yellow-600"> INR</div>
                </div>
            </div>
        </div>
    )
}