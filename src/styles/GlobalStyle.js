import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html {
  padding: 0;
  margin: 0;
  font-family: 'Zilla Slab', san-serif;
  text-align: center;
}
body {
    overflow: hidden;
  }
@media (max-width: 992px) {
  body {
    font-size: 0.7rem;
  }
}
`
