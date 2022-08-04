import { FC } from 'react'
import Button from '../button'
import { SignInFormContainer, SignInTitle } from './subcomponents'

const SignInForm: FC = () => {
  return (
    <SignInFormContainer>
      <SignInTitle>Login User</SignInTitle>
      <input type="text" placeholder="Enter mail" />
      <input type="password" placeholder="Enter password" />
      <Button type="submit" text="Submit"></Button>
    </SignInFormContainer>
  )
}

export default SignInForm
