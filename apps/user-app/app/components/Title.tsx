
interface TitleProps {
    label : string
}

export const Title = ({ label } : TitleProps) => {
    return (
        <div className="font-serif font-bold text-5xl flex justify-center mb-10 mt-2 text-purple-700">
            {label}
        </div>
    )
}