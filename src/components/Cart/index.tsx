import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import {
  close,
  closeCheckout,
  openCheckout,
  remove
} from '../../store/reducers/cart'
import Button from '../Button'
import Checkout from '../Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items, checkout } = useSelector(
    (state: RootReducer) => state.cart
  )

  const dispath = useDispatch()

  const openToCheckout = () => {
    dispath(openCheckout())
  }

  const closeCart = () => {
    dispath(close())
    dispath(closeCheckout())
  }

  const removeItem = (id: number) => {
    dispath(remove(id))
  }

  return (
    <S.CardContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.SideBar>
        <S.CartContent className={checkout ? 'visible' : ''}>
          {items.length ? (
            <>
              <ul>
                {items.map((item) => (
                  <S.CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </S.CartItem>
                ))}
              </ul>
              <S.Prices>
                <p>Valor Total</p>{' '}
                <span>{parseToBrl(getTotalPrice(items))}</span>
              </S.Prices>
              <Button
                onClick={openToCheckout}
                title="Continuar com a entrega"
                typeButton="button"
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <S.TextCart>
              Você ainda não adicionou nenhum item, tente adicionar seu primeiro
              prato
            </S.TextCart>
          )}
        </S.CartContent>
        <S.DivCheckout className={checkout ? 'visible' : ''}>
          <Checkout />
        </S.DivCheckout>
      </S.SideBar>
    </S.CardContainer>
  )
}

export default Cart
