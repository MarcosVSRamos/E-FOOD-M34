import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Hero = styled.div`
  width: 100%;
  height: 360px;
  display: block;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;

    h2 {
      max-width: 80%;
      margin: 0 auto;
    }
  }

  h2 {
    weight: bold;
    font-size: 36px;
  }
`

export const Logo = styled.img`
  width: 125px;
  margin-top: 40px;
  margin-bottom: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-bottom: 58px;
  }
`
