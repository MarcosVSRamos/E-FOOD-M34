import { useDispatch } from 'react-redux'
import { useState } from 'react'

import close from '../../assets/images/fechar.png'

import { Snak } from '../../types'
import Snaks from '../Cards'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

import * as S from './styles'
import Loader from '../Loader'

type Props = {
  name: string
  snaks: Snak[]
}

interface ModalState {
  isVisible: boolean
  snak?: Snak
}

const SnaksList = ({ snaks, name }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const addToCard = () => {
    if (modal.snak) {
      dispatch(add(modal.snak))
      dispatch(open())
    }
  }

  const closeModal = () => {
    setModal({
      isVisible: false
    })
  }

  return (
    <div>
      <div className="container">
        <S.List>
          {snaks.map((snak) => (
            <S.Card key={snak.id}>
              <Snaks
                id={snak.id}
                restaurantOrSnak="snak"
                description={snak.descricao}
                cover={snak.foto}
                title={snak.nome}
                key={snak.id}
                onClickModal={() =>
                  setModal({
                    isVisible: true,
                    snak: snak
                  })
                }
              />
            </S.Card>
          ))}
        </S.List>
        <S.Modal className={modal.isVisible ? 'visivel' : ''}>
          <S.ModalContent>
            {modal.snak ? (
              <S.ImgModal src={modal.snak.foto} alt={modal.snak.nome} />
            ) : (
              <Loader />
            )}
            <div>
              <img
                src={close}
                alt="incone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
              <h4>{name}</h4>
              <p>{modal.snak?.descricao}</p>
              <span>{`porção para ${modal.snak?.porcao}`}</span>
              <S.BuyButton
                onClick={addToCard}
              >{`Adicionar ao carrinho - ${parseToBrl(
                modal.snak?.preco
              )}`}</S.BuyButton>
            </div>
          </S.ModalContent>
          <div
            className="overLay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </S.Modal>
      </div>
    </div>
  )
}

export default SnaksList
