import axios from "axios";
import { atom } from "jotai";

enum Status {
    Success ,
    Processing ,
    Failed
}

interface atomType {
    dateTime : Date ,
    amount : number ,
    status : Status ,
    token? : string
}

export const transactionsAtom = atom(async () => {
    const response = await axios.get("http://localhost:3000/api/auth/user-details" , { withCredentials: true });
    const data = response.data.transaction ;
    const formatted = data.map((tx: any) => ({
        dateTime: new Date(tx.startTime), 
        amount: tx.amount,
        status: tx.status,
        token: tx.token
    }));
    return formatted as atomType[]
})