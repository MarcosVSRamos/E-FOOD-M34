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
    color: ${cores.vermelho};
  }
`
export default GlobalCss
