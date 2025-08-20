import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'
import { TagContainer } from '../Tag/sytles'
import { ButtonLink } from '../Button/styles'

type CardProps = {
  restaurantOrSnak: 'restaurant' | 'snak'
}

export const Card = styled('div').withConfig({
  shouldForwardProp: (prop) => prop !== 'restaurantOrSnak'
})<CardProps>`
  background-color: ${({ restaurantOrSnak }) =>
    restaurantOrSnak === 'restaurant' ? colors.coverWhite : colors.red};
  width: 472px;
  height: 398px;
  max-width: 100%;
  border: ${({ restaurantOrSnak }) =>
    restaurantOrSnak === 'restaurant' ? `solid 1px ${colors.red}` : 'none'};
  color: ${({ restaurantOrSnak }) =>
    restaurantOrSnak === 'restaurant' ? colors.red : colors.secondaryText};
  margin-bottom: 40px;
  position: relative;

  ${ButtonLink} {
    padding: 2px 8px;
    background-color: ${colors.red};
    color: ${colors.secondaryText};
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
    margin-left: 5%;
  }
`

export const AddToCard = styled.button`
  border: none;
  background-color: ${colors.secondaryText};
  color: ${colors.red};
  width: 304px;
  height: 24px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  margin: 8px;
  cursor: pointer;
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

  @media (max-width: ${breakpoints.tablet}) {
    width: 95%;
  }
`
