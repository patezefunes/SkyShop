import { FC } from 'react'
import Button from '../button'
import { SignUpFormContainer, SignUpTitle } from './subcomponents'

const SignUpForm: FC = () => {
  return (
    <SignUpFormContainer>
      <SignUpTitle>Create new user</SignUpTitle>
      <input type="text" placeholder="Enter name" />
      <input type="text" placeholder="Enter mail" />
      <input type="password" placeholder="Enter password" />
      <input type="password" placeholder="Repeat password" />
      <Button type="submit" text="Submit"></Button>
    </SignUpFormContainer>
  )
}

export default SignUpForm
