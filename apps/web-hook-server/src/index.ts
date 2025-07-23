import express from 'express';
import db from "@repo/db/client"
import cors from "cors" ;

const app = express() ;
app.use(cors()) ;
app.use(express.json())

interface PayemntInformationType {
    userId: number;
    amount: number;
    token: string;
}

app.post('/' , async (req , res) => {
    const data = req.body ;
    const paymentInformation : PayemntInformationType = {
        userId : data.userId ,
        amount : data.amount*100 ,
        token : data.token
    }
    try {
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInformation.userId
                },
                data: {
                    amount: {
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTranstion.update({
                where: {
                    token: paymentInformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);

        res.status(200).json({
            message: "captured"
        });

    } catch (e) {
        res.status(500).json({
            message: "Error Occurred While Processing"
        });
    }
});

app.listen(3003 , () => {
    console.log("Server Started On PORT : 3003") ;
}) ;