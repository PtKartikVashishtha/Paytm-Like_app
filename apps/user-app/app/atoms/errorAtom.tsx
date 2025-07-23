import { atom } from "jotai"

export const errorAtom = atom<{ [key: string]: string }>({
    "Name": "" ,
    "Email Or Phone" : "" ,
    "Password" : ""
}) ;