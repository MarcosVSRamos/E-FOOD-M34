import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/sytles'
import { ButtonLink } from '../Button/styles'

type CardProps = {
  tipo?: 'addCart' | 'more'
}

const shouldForwardProp = (prop: string) => prop !== 'tipo'

export const Card = styled.div.withConfig({ shouldForwardProp })<CardProps>`
  background-color: ${({ tipo }) =>
    tipo === 'more' ? cores.fundoClaro : cores.vermelho};
  color: ${({ tipo }) =>
    tipo === 'more' ? cores.vermelho : cores.textoSecundario};
  width: ${({ tipo }) => (tipo === 'more' ? '472px' : '320px')};
  height: ${({ tipo }) => (tipo === 'more' ? '398px' : '338px')};
  max-width: 100%;
  border: ${({ tipo }) =>
    tipo === 'more' ? `solid 1px ${cores.vermelho};` : 'none'};
  margin-bottom: 40px;
  position: relative;

  ${ButtonLink} {
    padding: ${({ tipo }) => (tipo === 'more' ? '2px 8px' : '2px 74px')};
    background-color: ${({ tipo }) =>
      tipo === 'more' ? cores.vermelho : cores.branco};
    color: ${({ tipo }) =>
      tipo === 'more' ? cores.textoSecundario : cores.vermelho};
  }

  ${TagContainer} {
    margin-right: 8px;
  }
`

export const Img = styled.img.withConfig({ shouldForwardProp })<CardProps>`
  width: ${({ tipo }) => (tipo === 'more' ? '100%' : '304px')};
  margin: ${({ tipo }) => (tipo === 'more' ? '0' : '8px')};
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

export const HeaderCard = styled.h3.withConfig({
  shouldForwardProp
})<CardProps>`
  font-size: ${({ tipo }) => (tipo === 'more' ? '18px' : '16px')};
  margin-top: ${({ tipo }) => (tipo === 'more' ? '8px' : '-8px')};
  font-weight: bold;
  display: block;
`

export const Descricao = styled.p.withConfig({ shouldForwardProp })<CardProps>`
  font-size: 14px;
  line-height: 22px;
  height: 88px;
  width: ${({ tipo }) => (tipo === 'more' ? '456px' : '304px')};
  display: block;
  margin: 8px;
  margin-bottom: ${({ tipo }) => (tipo === 'more' ? '16px;' : '8px')};
`
