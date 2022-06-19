import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html {
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab', san-serif;
  text-align: center;
}
body {
    overflow-x: hidden;
  }
@media (max-width: 992px) {
  body {
    font-size: 0.7rem;
  }
}
@media (max-width: 600px) {
  body {
    font-family: san-serif;
  }
}
`
