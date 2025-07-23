import { useAtom } from "jotai"
import { stepAtom } from "../atoms/StepAtom"

interface StepBarProps {
    step : number
}

export const StepBar = ({ step } : StepBarProps) => {
    return (
        <div className="mb-6 px-1">
            <div className="flex justify-between mb-1 px-1 text-sm text-purple-700 font-medium">
                <span className="font-serif text-md font-medium">Step {step} of 2</span>
                <span>{step === 1 ? "0%" : "50%"}</span>
            </div>
            <div className="w-full bg-purple-100 h-2 rounded-full overflow-hidden">
                <div
                className={`h-full bg-purple-600 transition-all duration-500`}
                style={{ width: step === 1 ? "1%" : "50%" }}
                />
            </div>
        </div>
    )
}