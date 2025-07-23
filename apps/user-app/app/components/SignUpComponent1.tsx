import { FiUser } from "react-icons/fi"
import { FooterForCredential } from "./FooterForCredentiaals"
import { InputBoxForCredentails } from "./InputBoxForCredentails"
import { Title } from "./Title"
import { ButtonForCredential } from "./ButtonForCredentials"
import { useAtom } from "jotai"
import { stepAtom } from "../atoms/StepAtom"
import { StepBar } from "./StepBar"
import { SignUpAtom } from "../atoms/SignUpAtom"
import { errorAtom } from "../atoms/errorAtom"


export const SIgnUpComponent1 = () => {
    const [, setError] = useAtom(errorAtom)
    const [user , setUser] = useAtom(SignUpAtom);
    const [step , setStep] = useAtom(stepAtom) ;
    const onClick = async () => {
        const newErrors: { [key: string]: string } = {} ;
        if (!user.name) newErrors["Name"] = "Name is required"
        setError(newErrors)
        if(Object.keys(newErrors).length == 0) {
            setStep(2) ;
        }
    }
    return (
        <div className="h-110 w-100 rounded-4xl p-6 shadow-md bg-white"> 
            <Title label={"SignUp"} />
            <StepBar step={step} />
            <InputBoxForCredentails label="Name" placeholder="Enter Your Name" type="text" icon={<FiUser/>}/>
            <ButtonForCredential label={"Next"} onClick={onClick} />
            <FooterForCredential label="Already Have An Account" button="SignIn" location="signin"/>
        </div>
    )
}