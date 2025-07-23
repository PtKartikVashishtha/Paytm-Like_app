import axios from "axios";
import { atom } from "jotai";

export const balanceAtom = atom(async () => {
    const response = await axios.get("http://localhost:3000/api/auth/user-details" , { withCredentials: true }) ;
    console.log(response.data) ;
    const data = response.data.balance ;
    return data as {amount  : number , locked : number} 
})