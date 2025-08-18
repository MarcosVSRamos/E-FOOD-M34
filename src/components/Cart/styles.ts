import styled from 'styled-components'
import { ButtonContainer, ButtonLink } from '../Button/styles'
import { cores } from '../../styles'
import fechar from '../../assets/images/lixeira-de-reciclagem 1.png'

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const CartContent = styled.div`
  display: block;

  &.visible {
    display: none;
  }
`

export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 32px 8px 0 8px;
  max-width: 360px;
  width: 100%;

  > div {
    > ${ButtonContainer} {
      max-width: 100%;
      width: 100%;
      border: none;
      margin: 0;
      color: ${cores.vermelho};
      background-color: ${cores.textoSecundario};
      cursor: pointer;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const Prices = styled.div`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 16px;
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  color: ${cores.textoSecundario};
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.textoSecundario};
  padding: 8px 0;
  margin: 8px 0;
  position: relative;

  img {
    width: 80px;
    height: 80px;
    margin: 0 8px;
    object-fit: cover;
  }

  h3 {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    font-size: 14px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const DivCheckout = styled.div`
  width: 100%;
  height: 100%;
  display: none;

  &.visible {
    display: block;
    position: absolute;
    z-index: 2;
  }
`
