import { useDispatch, UseDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../PratosList'
import Button from '../Button'
import { CardContainer, CartItem, Overlay, Prices, SideBar } from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispath = useDispatch()

  const closeCart = () => {
    dispath(close())
  }

  const getValorTotal = () => {
    return items.reduce((acumulator, valorAtual) => {
      return (acumulator += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispath(remove(id))
  }

  return (
    <CardContainer className={isOpen ? 'is-open' : ''}>
      <Overlay />
      <SideBar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formataPreco(item.preco)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CartItem>
          ))}
        </ul>
        <Prices>
          Valor Total <span>{formataPreco(getValorTotal())}</span>
        </Prices>
        <Button title="Continuar com a entrega" typeButton="button">
          Continuar com a entrega
        </Button>
      </SideBar>
    </CardContainer>
  )
}

export default Cart
