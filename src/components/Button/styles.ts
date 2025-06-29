import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  text-decoration: none;
  text-align: center;
  list-style: none;
  background-color: ${cores.vermelho};
  color: ${cores.textoSecundario};
  font-size: 16px;
  font-weight: bold;
  padding: 4px 6px;
  margin: 8px;
`

export const ButtonLink = styled(Link)`
  text-decoration: none;
  list-style: none;
  background-color: ${cores.vermelho};
  color: ${cores.textoSecundario};
  font-size: 16px;
  padding: 4px 6px;
  font-weight: bold;
  margin: 8px;
`
