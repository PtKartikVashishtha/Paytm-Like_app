import express from 'express';
import db from "@repo/db/client" ;

const app = express() ;

interface PayemntInformationType {
    userId: number;
    amount: number;
    token: string;
}

app.get('/' , async (req , res) => {
    const data = req.body ;
    const paymentInformation : PayemntInformationType = {
        userId : data.userId ,
        amount : data.amount ,
        token : data.token
    }
    try {
        await db.$transaction([
            await db.balance.update({
                where : {
                    userId : paymentInformation.userId
                } , 
                data : {
                    amount : {
                        increment : Number(paymentInformation.amount)
                    }
                }
            }) ,
            await db.onRampTransaction.update({
                where : {
                    token : paymentInformation.token
                } , 
                data : { 
                    status : "Success"
                }
            }) ,
            res.json({
                message : "captured"
            }).status(200) 
        ]) ;
        
    }catch(e) {
        console.log(e) ;
        res.json({
            message : "Error Occured While Processing"
        })
    }
}) ; 
app.listen(3003 , () => {
    console.log("Server Started On PORT : 3003") ;
}) ;