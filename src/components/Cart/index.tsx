import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import {
  close,
  closeCheckout,
  openCheckout,
  remove
} from '../../store/reducers/cart'
import Button from '../Button'
import {
  CardContainer,
  CartContent,
  CartItem,
  DivCheckout,
  Overlay,
  Prices,
  SideBar,
  TextCart
} from './styles'
import Checkout from '../Checkout'
import { getTotalPrice, parseToBrl } from '../../utils'

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
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <SideBar>
        <CartContent className={checkout ? 'visible' : ''}>
          {items.length ? (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} alt={item.nome} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{parseToBrl(item.preco)}</span>
                    </div>
                    <button onClick={() => removeItem(item.id)} type="button" />
                  </CartItem>
                ))}
              </ul>
              <Prices>
                <p>Valor Total</p>{' '}
                <span>{parseToBrl(getTotalPrice(items))}</span>
              </Prices>
              <Button
                onClick={openToCheckout}
                title="Continuar com a entrega"
                typeButton="button"
              >
                Continuar com a entrega
              </Button>
            </>
          ) : (
            <TextCart>
              Você ainda não adicionou nenhum item, tente adicionar seu primeiro
              prato
            </TextCart>
          )}
        </CartContent>
        <DivCheckout className={checkout ? 'visible' : ''}>
          <Checkout />
        </DivCheckout>
      </SideBar>
    </CardContainer>
  )
}

export default Cart
