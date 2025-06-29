import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/sytles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  background-color: ${cores.fundoClaro};
  color: ${cores.vermelho};
  width: 472px;
  height: 398px;
  max-width: 100%;
  border: solid 1px ${cores.vermelho};
  margin-bottom: 40px;
  position: relative;

  ${ButtonLink} {
    padding: 2px 8px;
    background-color: ${cores.vermelho};
    color: ${cores.textoSecundario};
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 218px;
  margin: 0;
  object-fit: cover;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const BotaoModal = styled.button`
  background-color: ${cores.textoSecundario};
  color: ${cores.vermelho};
  font-size: 16px;
  font-weight: bold;
  padding: 2px 74px;
  margin: 8px;
  border: none;
  cursor: pointer;
  width: 304px;
`

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 8px;
  margin-right: 8px;

  img {
    margin-top: 4px;
    width: 24px;
    height: 24px;
    margin-left: 8px;
  }

  div {
    display: flex;
  }
`

export const HeaderCard = styled.h3`
  font-size: 18px;
  margin-top: 8px;
  font-weight: bold;
  display: block;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  height: 88px;
  width: 456px;
  display: block;
  margin: 8px;
  margin-bottom: 16px;
`
