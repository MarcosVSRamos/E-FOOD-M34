import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.fundoClaro};
  width: 472px;
  max-width: 100%;
  border: solid 1px ${cores.vermelho};
  margin-bottom: 40px;
  position: relative;
`

export const Img = styled.img`
  width: 100%;
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  img {
    width: 20px;
  }
`

export const HeaderCard = styled.h3`
  font-size: 18px;
  marign-top: 8px;
  font-weight: bold;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
`
