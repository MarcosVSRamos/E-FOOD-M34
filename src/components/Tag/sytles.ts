import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.size === 'big' ? `${cores.vermelho}` : `${cores.textoSecundario}`};
  color: ${(props) =>
    props.size === 'big' ? `${cores.textoSecundario}` : `${cores.vermelho}`};
  padding: ${(props) => (props.size === 'big' ? '4px 84px' : '4px 6px')};
  display: inline-block;
  font-weight: bold;
`
