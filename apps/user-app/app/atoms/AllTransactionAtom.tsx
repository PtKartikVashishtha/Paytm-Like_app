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
    token? : string ,
    transactionId? : number
}

export const allTransactionsAtom = atom(async () => {
    const response = await axios.get("http://localhost:3000/api/auth/transactions" , { withCredentials: true });
    const data = response.data.transactions ;
    const formatted = data.map((tx: any) => ({
        dateTime: new Date(tx.startTime), 
        amount: tx.amount,
        status: tx.status,
        token: tx.token ,
        transactionId:tx.id
    }));
    return formatted as atomType[]
})