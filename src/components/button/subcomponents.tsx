import styled from 'styled-components'
import { themes } from '../../themes'

export const ButtonBody = styled.button`
  border: 0.5px solid black;
  border-radius: 8px;
  min-width: 6rem;
  height: 3rem;
  padding: 0.5rem;
  margin: 0.5rem;
  cursor: pointer;
  color: ${themes.white};
  background-color: ${themes.blue};
  &:hover {
    background-color: ${themes.lightblue};
  }
`
