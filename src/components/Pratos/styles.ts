import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/sytles'

export const Card = styled.div`
  background-color: ${cores.fundoClaro};
  width: 472px;
  height: 398px;
  max-width: 100%;
  border: solid 1px ${cores.vermelho};
  margin-bottom: 40px;
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Img = styled.img`
  width: 100%;
  margin: 0px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px;

  img {
    width: 20px;
    margin-left: 8px;
  }

  div {
    display: flex;
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
  margin: 8px;
  margin-bottom: 16px;
`
