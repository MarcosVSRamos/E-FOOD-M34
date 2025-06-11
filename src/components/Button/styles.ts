import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  background-color: ${cores.vermelho};
  color: ${cores.textoSecundario},
  font-size: 18px;
  font-weight: bold;
  padding: 4px 6px;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.vermelho};
  color: ${cores.textoSecundario},
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 4px 6px;
`
