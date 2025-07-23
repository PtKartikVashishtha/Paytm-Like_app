"use client"
import { useAtom } from "jotai"
import { FCard } from "../components/Frame"
import { SignUpCard } from "../components/SignUPCard"
import { SignUpComponent2 } from "../components/SignUpComponent2"
import { stepAtom } from "../atoms/StepAtom"
import { SIgnUpComponent1 } from "../components/SignUpComponent1"

export default () => {
    const [step , setStep] = useAtom(stepAtom)
    return (
        <div>
            <SignUpCard>
                <FCard>
                    {
                        step == 1 ? <SIgnUpComponent1/>  : <SignUpComponent2/> 
                    }
                </FCard>
            </SignUpCard>
        </div>
    )
}