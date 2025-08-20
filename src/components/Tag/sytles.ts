import styled from 'styled-components'

import { Props } from '.'
import { colors } from '../../styles'

export const TagContainer = styled.div<Props>`
  background-color: ${(props) =>
    props.size === 'big' ? `${colors.secondaryText}` : `${colors.red}`};
  color: ${(props) =>
    props.size === 'big' ? `${colors.red}` : `${colors.secondaryText}`};
  padding: ${(props) => (props.size === 'big' ? '4px 84px' : '4px 6px')};
  display: inline-block;
`
