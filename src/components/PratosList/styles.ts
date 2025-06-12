import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  background-color: ${cores.branco};
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  margin-top: 40px;
`
