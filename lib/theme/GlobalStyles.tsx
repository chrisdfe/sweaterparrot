import { createGlobalStyle } from 'styled-components'
// import theme from '../../../lib/theme/theme';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Anonymous Pro', monospace;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    color: ${props => props.theme.palette.links.primary.default};
    
    &:hover {
      color: ${props => props.theme.palette.links.primary.hover};
      text-decoration: none;
    }
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }
`

export default GlobalStyles;