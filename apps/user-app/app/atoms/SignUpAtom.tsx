import { atom } from "jotai";
import { body } from "../api/signup/route";

export const SignUpAtom = atom<body>({
    name : "" ,
    emailOrNumber : "" , 
    password : "" ,
})