import { createGlobalStyle } from 'styled-components'

export const colors = {
  red: '#E66767',
  white: '#FFF8F2',
  coverWhite: '#FFFFFF',
  secondaryText: '#FFEBD9'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;

    body {
      background-color: ${colors.coverWhite};
      color: ${colors.red};
    }

  }

  .container{
    width: 1024px;
    max-width: 100%;
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
`
export default GlobalCss
