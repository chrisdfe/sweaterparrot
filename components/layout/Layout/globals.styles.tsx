import { createGlobalStyle } from 'styled-components'
// import theme from '../../../lib/theme/theme';

const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Space Mono', monospace;
  }
  
  a {
    color: inherit;
    text-decoration: underline;
    color: ${props => props.theme.linkColor};
    
    &:hover {
      text-decoration: none;
    }
  }
  
  * {
    box-sizing: border-box;
  }
`

export default GlobalStyles;