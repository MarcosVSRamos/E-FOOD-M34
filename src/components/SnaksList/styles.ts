import styled from 'styled-components'

import { AddToCard, Descricao } from '../Cards/styles'
import { breakpoints, colors } from '../../styles'

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  margin-top: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const Card = styled.li`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 338px;
  max-width: 100%;
  margin-bottom: 26px;

  img {
    width: 306px;
    height: 168px;
    margin-top: 6px;
    margin-left: 6px;
  }

  ${Descricao} {
    width: 304px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;

    img {
      width: 96%;
    }

    ${Descricao} {
      width: 96%;
    }

    ${AddToCard} {
      width: 96%;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overLay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  display: flex;
  height: 344px;
  width: 1024px;
  color: ${colors.secondaryText};
  background-color: ${colors.red};
  position: relative;
  z-index: 1;

  div {
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 32px;

    h4 {
      margin-top: 32px;
      font-size: 18px;
      font-weight: bold;
    }

    p {
      margin-top: 16px;
      width: 640px;
      height: 176px;
      font-size: 14px;
    }

    img {
      position: absolute;
      cursor: pointer;
      width: 22px;
      right: -28px;
      top: 8px;
    }
  }
  span {
    margin-bottom: 16px;
  }
`
export const ImgModal = styled.img`
  display: block;
  width: 280px;
  height: 280px;
  max-width: 100%;
  margin-left: 32px;
  margin-top: 32px;
  object-fit: cover;
`

export const BuyButton = styled.button`
  width: 218px;
  text-align: center;
  height: 24px;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.red};
  background-color: ${colors.secondaryText};
  border: none;
  cursor: pointer;
`
