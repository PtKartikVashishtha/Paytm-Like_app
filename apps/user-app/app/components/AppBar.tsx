"use client"
import { signOut } from "next-auth/react"
import { Button } from "./Button"

interface AppBarProps {
    label : string
}

export const AppBar = (props : AppBarProps) => {
    return (
        <div className="border-b-3 border-gray-300 flex justify-between pb-2 bg-pink-50">
            <div className="font-bold font-serif text-4xl text-purple-700 pl-4 mt-3">
                PAytm
            </div>
            <Button label={props.label} className={"w-25 text-lg"} onClick={() => {
                signOut({
                    callbackUrl : "/signin"
                })
            }}/>
        </div>
    )
}