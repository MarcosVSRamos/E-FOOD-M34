import styled from 'styled-components'

export const ModalDiv = styled.div`
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
  max-width: 960px;
  position: relative;
  z-index: 1;

  header {
    display: flex;
    margin-bottom: 12px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }

    img {
      cursor: pointer;
      width: 22px;
    }
  }

  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
`
