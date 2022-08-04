import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/index'
import { Fragment } from 'react'
import { GlobalStyles } from './global.styles'
import Slider from './routes/main'
import Login from './routes/login'
import Details from 'routes/details'
import styled from 'styled-components'

const AppWrapper = styled.div`
  height: 1000px;
`
function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Slider />} />
          <Route path="login" element={<Login />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </AppWrapper>
  )
}

export default App
