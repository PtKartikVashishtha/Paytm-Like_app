import { FCard } from "../components/Frame"
import { SignInComponent } from "../components/SigninComponent"
import { SignUpCard } from "../components/SignUPCard"

export default () => {
    return (
        <div>
            <SignUpCard>
                <FCard>
                    <SignInComponent/>
                </FCard>
            </SignUpCard>
        </div>
    )
}