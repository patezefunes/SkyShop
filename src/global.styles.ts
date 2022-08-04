import { createGlobalStyle } from 'styled-components'
import { backgroundImage } from './assets/assets'

export const GlobalStyles = createGlobalStyle`
body {
  margin:0;
  background-image: url(${backgroundImage});
  @media screen and (max-width: 800px){
    padding: 10px;
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
