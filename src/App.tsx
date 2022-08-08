import { Routes, Route } from 'react-router-dom'
import Navigation from './routes/navigation/index'
import { GlobalStyles } from './global.styles'
import Slider from './routes/main'
import Login from './routes/login'
import Details from 'routes/details'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'
import ErrorPage from 'routes/error'
const AppWrapper = styled.div`
  height: 100vh;
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
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </AppWrapper>
  )
}

export default App
