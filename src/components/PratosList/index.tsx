import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { Prato } from '../../pages/Home'
import Pratos from '../Cards'
import fechar from '../../assets/images/fechar.png'
import { BuyButton, Card, ImgModal, List, Modal, ModalContent } from './styles'
import { add, open } from '../../store/reducers/cart'
import { parseToBrl } from '../../utils'

type Props = {
  name: string
  pratos: Prato[]
}

interface ModalState {
  isVisible: boolean
  prato?: Prato
}

const PratosList = ({ pratos, name }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const addToCard = () => {
    if (modal.prato) {
      dispatch(add(modal.prato))
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
        <List>
          {pratos.map((prato) => (
            <Card key={prato.id}>
              <Pratos
                id={prato.id}
                restauranteOuPrato="prato"
                descricao={prato.descricao}
                capa={prato.foto}
                titulo={prato.nome}
                key={prato.id}
                onClickModal={() =>
                  setModal({
                    isVisible: true,
                    prato: prato
                  })
                }
              />
            </Card>
          ))}
        </List>
        <Modal className={modal.isVisible ? 'visivel' : ''}>
          <ModalContent>
            {modal.prato ? (
              <ImgModal src={modal.prato.foto} alt={modal.prato.nome} />
            ) : (
              <p>Carregando...</p>
            )}
            <div>
              <img
                src={fechar}
                alt="incone de fechar"
                onClick={() => {
                  closeModal()
                }}
              />
              <h4>{name}</h4>
              <p>{modal.prato?.descricao}</p>
              <span>{`porção para ${modal.prato?.porcao}`}</span>
              <BuyButton
                onClick={addToCard}
              >{`Adicionar ao carrinho - ${parseToBrl(
                modal.prato?.preco
              )}`}</BuyButton>
            </div>
          </ModalContent>
          <div
            className="overLay"
            onClick={() => {
              closeModal()
            }}
          ></div>
        </Modal>
      </div>
    </div>
  )
}

export default PratosList
