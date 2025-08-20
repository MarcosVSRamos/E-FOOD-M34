import styled from 'styled-components'

import { colors } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Div = styled.form`
  width: 100%;
  height: 100%;
  color: ${colors.secondaryText};
  display: block;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    font-size: 14px;
  }

  small {
    display: block;
    margin-bottom: 8px;
  }

  .complement {
    margin-bottom: 24px;
  }

  ${ButtonContainer} {
    display: block;
    width: 344px;
    max-width: 100%;
    border: none;
    margin: 8px 0;
    color: ${colors.red};
    background-color: ${colors.secondaryText};
    cursor: pointer;
  }
`

export const InputGroup = styled.div`
  input {
    display: block;
    width: 344px;
    height: 32px;
    max-width: 100%;
    border: none;
    margin: 8px 0;
    color: ${colors.red};
    background-color: ${colors.secondaryText};
    cursor: pointer;
  }
`

export const FlexInput = styled.div`
  display: flex;
  gap: 34px;

  .card-number {
    width: 228px;
  }

  .cvv {
    width: 82px;
  }

  div {
    width: 155px;

    input {
      -moz-appearance: textfield;

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }
  }
`

export const CheckoutValidation = styled.div`
  display: block;

  h2 {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-bottom: 24px;
    width: 344px;
  }
`
