import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Container = styled.section`
  background-color: ${colors.white};
  padding: 80px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 40px;
  margin-top: 40px;
  justify-content: center;
  justify-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    margin: 0 auto;
  }
`
