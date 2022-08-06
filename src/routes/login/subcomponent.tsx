import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding-top: 100px;
  width: 600px;
  height: 600px;

  @media (max-width: 600px) {
    width: 300px;
  }

  button {
    width: 200px;
  }
`
