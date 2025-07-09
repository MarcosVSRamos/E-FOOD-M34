import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;

  h3 {
    padding-right: 64px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 95%;
    padding-top: 18px;
    align-items: center;

    h3 {
      padding: 0;
      margin-left: 16px;
    }
  }
`

export const Hero = styled.div`
  width: 100%;
  height: 166px;
  display: block;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.tablet}) {
    height: 84px;
  }
`

export const Img = styled.img`
  margin: 44px auto;

  @media (max-width: ${breakpoints.tablet}) {
    width: 68px;
    margin: 8px 16px;
  }
`
