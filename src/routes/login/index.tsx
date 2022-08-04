import { FC, useState } from 'react'
import Button from '../../components/button'
import SignInForm from '../../components/sign-in-form'
import SignUpForm from '../../components/sign-up-form'
import { LoginContainer } from './subcomponent'

const Login: FC = () => {
  const [formMode, setFormMode] = useState(1)

  const formModeHandler = () => {
    setFormMode(formMode === 1 ? 0 : 1)
  }
  return (
    <LoginContainer>
      {formMode === 1 ? <SignInForm /> : <SignUpForm />}
      <div>
        <Button
          text={
            formMode === 1
              ? 'Haven\'t you an account?'
              : 'Do you have an account?'
          }
          onClick={formModeHandler}
        />
      </div>
    </LoginContainer>
  )
}

export default Login
