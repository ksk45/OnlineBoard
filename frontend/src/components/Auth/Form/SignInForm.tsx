import type { AuthMode } from "../../../types/auth"
import AuthInput from "../AuthInput"
import AuthMainButton from "../AuthMainButton"


type SignInFormProps = {
  authMode: AuthMode;
}

// サインイン画面のフォームセット
const SignInForm = (props: SignInFormProps) => {
  return (
    <>
      <AuthInput type="email" errorMessage="" />
      <AuthInput type="pass" errorMessage="" />
      <AuthMainButton authMode={props.authMode} />
    </>
  )
}

export default SignInForm