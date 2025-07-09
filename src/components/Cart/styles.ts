import styled from 'styled-components'
import { ButtonContainer, ButtonLink } from '../Button/styles'
import { cores } from '../../styles'
import fechar from '../../assets/images/fechar.png'

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

export const SideBar = styled.aside`
  background-color: ${cores.vermelho};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
  }

  ${ButtonLink} {
    margin: none;
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

export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 24px;
  display: flex;
  justify-content: space-betten;
`

export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.fundoClaro};
  padding: 8px 0;
  position: relative;

  img {
    widht: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    font-weight: bold;
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
    top: 8px;
    right: 0;
  }
`
