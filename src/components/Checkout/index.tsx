import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import {
  closeCheckout,
  exitFindCheckout,
  toFindCheckout
} from '../../store/reducers/cart'

const Checkout = () => {
  const { checkout, findCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
  const dispath = useDispatch()

  const closeToCheckout = () => {
    dispath(closeCheckout())
  }

  const closeFindCheckout = () => {
    dispath(exitFindCheckout())
  }

  const nextCheckout = () => {
    dispath(toFindCheckout())
  }

  const buyConfirmation = () => {
    console.log('comprado')
  }

  if (findCheckout) {
    return (
      <S.Div>
        <div>
          <h2>Pagamento - Valor a pagar R$ 190,90</h2>
          <form>
            <label htmlFor="name">Nome no cartão</label>
            <S.Input type="text" name="name" id="name" />

            <S.FlexInput>
              <div className="card-number">
                <label htmlFor="cardNumber">Número do cartão</label>
                <S.Input type="number" name="cardNumber" id="cardNumber" />
              </div>
              <div className="card-code">
                <label htmlFor="cvv">CVV</label>
                <S.Input type="number" name="cvv" id="cvv" />
              </div>
            </S.FlexInput>

            <S.FlexInput>
              <div>
                <label htmlFor="month">Mês de vencimento</label>
                <S.Input type="number" name="month" id="month" />
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <S.Input type="number" name="year" id="year" />
              </div>
            </S.FlexInput>
          </form>
        </div>

        <Button typeButton="button" title="Finalizar pagamento">
          Finalizar pagamento
        </Button>
        <Button
          onClick={closeFindCheckout}
          typeButton="button"
          title="Voltar para a edição de endereço"
        >
          Voltar para a edição de endereço
        </Button>
      </S.Div>
    )
  }
  return (
    <S.Div>
      <div>
        <h2>Entrega</h2>
        <form>
          <label htmlFor="name">Quem irá receber</label>
          <S.Input type="text" name="name" id="name" />
          <label htmlFor="name">Quem irá receber</label>
          <S.Input type="text" name="name" id="name" />
          <label htmlFor="name">Quem irá receber</label>
          <S.Input type="text" name="name" id="name" />
          <S.FlexInput>
            <div>
              <label htmlFor="cep">CEP</label>
              <S.Input type="number" name="cep" id="cep" />
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <S.Input type="number" name="number" id="number" />
            </div>
          </S.FlexInput>

          <label htmlFor="name">Quem irá receber</label>
          <S.Input type="text" name="name" id="name" />
        </form>
      </div>

      <Button
        onClick={nextCheckout}
        typeButton="button"
        title="Continuar com o pagamento"
      >
        Continuar com o pagamento
      </Button>
      <Button
        onClick={closeToCheckout}
        typeButton="button"
        title="Voltar para o carrinho"
      >
        Voltar para o carrinho
      </Button>
    </S.Div>
  )
}
export default Checkout
