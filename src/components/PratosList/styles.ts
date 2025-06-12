import styled from 'styled-components'
import { cores } from '../../styles'

type CardProps = {
  typeList?: 'addCart' | 'more'
}

const shouldForwardProp = (prop: string) => prop !== 'typeList'

export const Container = styled.section`
  background-color: ${cores.branco};
  padding: 80px 0;
`

export const List = styled.ul.withConfig({ shouldForwardProp })<CardProps>`
  display: grid;
  grid-template-columns: ${({ typeList }) =>
    typeList === 'more' ? '1fr 1fr' : '1fr 1fr 1fr'};
  column-gap: 40px;
  margin-top: 40px;
`
