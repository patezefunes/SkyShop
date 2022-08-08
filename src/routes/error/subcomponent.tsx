import styled from 'styled-components'
import { themes } from 'themes'

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 80px auto;
  padding: 20px 0;
  width: 600px;
  height: 400px;
  background-color: ${themes.grayRGBA};

  @media (max-width: 600px) {
    width: 300px;
  }

  button {
    width: 200px;
  }
`

export const ErrorDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themes.red};
  color: ${themes.white};
  height: 70%;
  width: 80%;
  border-radius: 8px;
  font-size: 2rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`
