import axios from "axios";
import { atom } from "jotai";

export const p2pTranscactionsAtom = atom(async () => {
    const response = await axios.get("/api/auth/p2ptransactions" , { withCredentials : true}) ;
    const data = response.data.transactions ;
    const userId = response.data.userId ;
    const transactions = data.map((tx : any)  => ({
        ...tx,
        startTime : new Date(tx.startTime)
    })) ;
    return {
        transactions , 
        userId
    } ;
})