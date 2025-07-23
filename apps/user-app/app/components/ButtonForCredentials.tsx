"use client"

import { useAtom } from "jotai"
import { loadingAtom } from "../atoms/LoadingAtom"
import { errorAtom } from "../atoms/errorAtom"

interface ButtonForCredentialprops {
    label : string 
    onClick : () => void
}

export const ButtonForCredential = ({ label , onClick } : ButtonForCredentialprops) => {
    const [loading] = useAtom(loadingAtom) ;
    const [error] = useAtom(errorAtom) ;
    const isErrorEmpty = Object.values(error).every((val) => val === "");
    const isName = error["Name"] === "" ;
    return (
        <div className="mt-2">
            <button onClick={onClick} className="p-3 text-lg flex-justify-center items-center w-full bg-purple-700 rounded-full text-white 
                font-serif font-semibold hover:bg-purple-900 cursor-pointer ">
                {loading && (isErrorEmpty || isName)  ? (
                <div className="flex items-center">
                    <svg
                        className="animate-spin w-4 h-4 mr-2 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    <div className="ml-22">Submitting...</div>
                </div>
                ) : (label)
            }
            </button>
        </div>
    )
}