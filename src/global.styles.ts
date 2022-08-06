import { createGlobalStyle } from 'styled-components'
import { backgroundImage } from './assets/assets'

export const GlobalStyles = createGlobalStyle`
body {
  margin:0;
  background-image: url(${backgroundImage});

  @media (max-width: 600px) {
    background-repeat: no-repeat;
  }
}

a {
  text-decoration: none;
  color: black;
}

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
`
