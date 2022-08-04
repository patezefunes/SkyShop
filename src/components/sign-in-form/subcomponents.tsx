import styled from 'styled-components'
import { themes } from '../../themes'

export const SignInFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  padding: 2rem 1rem;
  outline: none;
  box-shadow: 2px 2px 2px 1px rgba(66, 74, 67, 0.2);
  background-color: ${themes.white};
  color: ${themes.lightgreen};
  button {
    width: 80%;
  }
`

export const SignInTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 2rem;
  color: black;
`
