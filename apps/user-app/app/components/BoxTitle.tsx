
interface BoxtitleProps {
    label : String
    className? : String
    text? : string
}

export const Boxtitle = ({ label , className , text } : BoxtitleProps) => {
    var fontType = "serif" ;
    if(className?.includes("font-mono")){
        fontType = "mono"
    }
    return (
        <div className={`mt-3 pb-1 border-gray-300 font-${fontType} ${className}`}>
            <div className={text ? text : "text-xl"}>
                {label}
            </div>
        </div>
    )
}