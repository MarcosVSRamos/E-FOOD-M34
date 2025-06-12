import { createGlobalStyle } from 'styled-components'

export const cores = {
  vermelho: '#E66767',
  branco: '#FFF8F2',
  fundoClaro: '#FFFFFF',
  textoSecundario: '#FFEBD9'
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
      background-color: ${cores.fundoClaro};
      color: ${cores.vermelho};
    }

  }

  .container{
    width: 1024px;
    max-width: 100%;
    margin: 0 auto;
  }
`
export default GlobalCss
