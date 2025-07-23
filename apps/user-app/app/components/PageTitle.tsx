interface TitlePageProps {
    title : String
}

export const PageTitle = ({ title } : TitlePageProps) => {
    return (
        <div className="text-5xl text-purple-700 font-bold font-serif mt-7 ml-4">
            {title}
        </div>
    )
}