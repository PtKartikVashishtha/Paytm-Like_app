interface ButtonProps {
    label : String
    className? : String 
    onClick : () => void
}

export const Button = ({label , className , onClick} : ButtonProps) => {
    return (
        <button className={`font-serif mr-6 cursor-pointer text-white hover:bg-black bg-purple-700 p-1 
        rounded-lg mt-3 ${className}`} 
        //@ts-ignore
        onClick={onClick}>
            {label}
        </button>
    )
}