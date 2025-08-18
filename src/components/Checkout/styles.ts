import styled from 'styled-components'
import { cores } from '../../styles'
import { ButtonContainer } from '../Button/styles'

export const Div = styled.form`
  width: 100%;
  height: 100%;
  color: ${cores.textoSecundario};
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

  > div {
    margin-bottom: 20px;

    small {
      display: block;
      margin-bottom: 8px;
    }
  }

  ${ButtonContainer} {
    display: block;
    width: 344px;
    max-width: 100%;
    border: none;
    margin: 8px 0;
    color: ${cores.vermelho};
    background-color: ${cores.textoSecundario};
    cursor: pointer;
  }
`

export const Input = styled.input`
  display: block;
  width: 344px;
  height: 32px;
  max-width: 100%;
  border: none;
  margin: 8px 0;
  color: ${cores.vermelho};
  background-color: ${cores.textoSecundario};
  cursor: pointer;
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
