import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const Hero = styled.div`
  width: 100%;
  height: 280px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Div = styled.div`
  color: ${colors.white};
  height: 280px;
  max-height: 100%;
`

export const Categoria = styled.p`
  padding-top: 18px;
  padding-bottom: 156px;
  font-weight: 100;
  font-size: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 24px;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  font-weight: bold;
  padding-bottom: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 24px;
  }
`
