interface SearchBarForSendMoneyProps {
    label : string ,
    placeholder : string , 
    onChange ? : (e : React.ChangeEvent<HTMLInputElement>) => void 
    type? : string
}

export const SearchBarForSendMoney = ({ label , placeholder , onChange , type } : SearchBarForSendMoneyProps) => {
    var step = 1 ;
    type ? step = 0.1 : step = 0 ;
    return ( 
    <div>
        <div className="font-medium text-md mb-3 mt-3 font-serif">{label}</div>
        <div>
            <input className="w-full p-2 font-normal text-md font-serif mb-3 bg-white 
            rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
            placeholder={placeholder} onChange={onChange} type={type} step={step}></input>
        </div>
    </div>
    )
}