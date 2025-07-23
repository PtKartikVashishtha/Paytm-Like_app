"use client"
import { useAtom } from "jotai"
import { urlAtom } from "../atoms/urlAtom"
import { amountAtom } from "../atoms/amountAtom"

interface InputBoxProps {
    label : String ,
    placeHolder : string ,
    type? : String , 
    select? : boolean ,
}

export const InputBox = (props : InputBoxProps) => {
    const [amount , setAmount] = useAtom(amountAtom) ;
    const [url , setUrl] = useAtom(urlAtom) ;
    const options = [{
        name : "HDFC" ,
        redirectUrl: "https://netbanking.hdfcbank.com"
    },{
        name : "AXIS" ,
        redirectUrl: "https://www.axisbank.com/"
    }, {
        name : "BOB" ,
        redirectUrl : "https://www.bankofbaroda.in/"
    }, {
        name : "PNB" ,
        redirectUrl : "https://www.pnbindia.in/"
    }]
    return (
        <div>
            <div className="font-medium text-md mb-3 mt-3 font-serif">{props.label}</div>
            {props.select ? <select className="w-full p-2 font-normal text-md font-serif mb-3 bg-white rounded-lg border 
            border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500" defaultValue={""} onChange={
                (e : React.ChangeEvent<HTMLSelectElement>) => {
                let name : String = e.target.value;
                //@ts-ignore
                name = name.split(" ")[0] ;
                const value = options.find(x => x.name == name) ;
                //@ts-ignore
                setUrl(value?.redirectUrl) ;
            }}>
                <option value="" disabled hidden>{props.placeHolder}</option>
                {options.map((option , i) => (
                    <option key={i} value={option.name}>{option.name} Bank</option>
                ))}
            </select> : <input className="w-full p-2 font-normal text-md font-serif mb-3 bg-white 
            rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder={props.placeHolder} type="number" step={"0.1"} onChange={(e) => {
                setAmount(parseFloat(e.target.value)) ;
                console.log(amount) ;
            }}></input>}
        </div>
    )
}