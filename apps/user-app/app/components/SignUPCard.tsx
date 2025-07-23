import { ReactNode } from "react"

interface SignUPCardProps {
    children : ReactNode
} 

export const SignUpCard = ({ children } : SignUPCardProps) => {
    
    return <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 h-screen ">
        <div className="font-bold font-serif text-4xl text-purple-700 pl-4 pt-3 border-b-3 border-gray-300 pb-2">
                PAytm
        </div>
        
        <div className="flex justify-center items-center mt-12">
            <div className="">
                { children }
            </div>
        </div>
    </div>
}