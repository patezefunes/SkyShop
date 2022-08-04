import Button from '../../components/button'
import styled from 'styled-components'
import { themes } from '../../themes'
import { Outlet } from 'react-router-dom'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'

export const NavigationBar = styled.div`
  position: sticky;
  top: 0;
  height: 100px;
  width: 100%;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  background-color: ${themes.grayRGBA};
  align-items: center;
`

const Navigation: React.FC = () => {
  const navigate = useNavigate()
  const loginButtonHandler = () => {
    navigate('/login')
  }

  const shopButtonHandler = () => {
    navigate('/')
  }

  return (
    <Fragment>
      <NavigationBar>
        <div>Welcome</div>
        <div>
          <Button text="Login" onClick={loginButtonHandler} />
          <Button text="Shop" onClick={shopButtonHandler} />
        </div>
      </NavigationBar>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
