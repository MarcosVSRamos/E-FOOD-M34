import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 40px;
  background-color: ${cores.textoSecundario};
`

export const Paragrafo = styled.p`
  width: 480px;
  max-width: 100%;
  font-size: 10px;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 12px;
    margin-top: 40px;
  }
`

export const DivSocial = styled.div`
  img {
    width: 24px;
    margin: 4px;
  }
`

export const Img = styled.img`
  width: 126px;
  margin-top: 40px;
  margin-bottom: 32px;
`
