import { useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import * as S from './styles'
import { RootReducer } from '../../store'
import {
  closeCheckout,
  exitFindCheckout,
  toFindCheckout
} from '../../store/reducers/cart'
import { useFormik } from 'formik'

const Checkout = () => {
  const { checkout, findCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )

  // validações com formik

  const form = useFormik({
    initialValues: {
      name: '',
      year: '',
      month: '',
      cvv: '',
      cardNumber: '',
      nameCard: '',
      complement: '',
      homeNumber: '',
      cep: '',
      city: '',
      street: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  // fuções com o dispath

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
            <label htmlFor="nameCard">Nome no cartão</label>
            <S.Input
              type="text"
              name="nameCard"
              id="nameCard"
              value={form.values.nameCard}
            />

            <S.FlexInput>
              <div className="card-number">
                <label htmlFor="cardNumber">Número do cartão</label>
                <S.Input
                  type="number"
                  name="cardNumber"
                  id="cardNumber"
                  value={form.values.cardNumber}
                />
              </div>
              <div className="cvv">
                <label htmlFor="cvv">CVV</label>
                <S.Input
                  value={form.values.cvv}
                  type="number"
                  name="cvv"
                  id="cvv"
                />
              </div>
            </S.FlexInput>

            <S.FlexInput>
              <div>
                <label htmlFor="month">Mês de vencimento</label>
                <S.Input
                  value={form.values.month}
                  type="number"
                  name="month"
                  id="month"
                />
              </div>
              <div>
                <label htmlFor="year">Ano de vencimento</label>
                <S.Input
                  value={form.values.year}
                  type="number"
                  name="year"
                  id="year"
                />
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
          <S.Input value={form.values.name} type="text" name="name" id="name" />
          <label htmlFor="street">Endereço</label>
          <S.Input
            value={form.values.street}
            type="text"
            name="street"
            id="street"
          />
          <label htmlFor="city">Cidade</label>
          <S.Input value={form.values.city} type="text" name="city" id="city" />
          <S.FlexInput>
            <div>
              <label htmlFor="cep">CEP</label>
              <S.Input
                value={form.values.cep}
                type="number"
                name="cep"
                id="cep"
              />
            </div>
            <div>
              <label htmlFor="homeNumber">Número</label>
              <S.Input
                value={form.values.homeNumber}
                type="number"
                name="homeNumber"
                id="homeNumber"
              />
            </div>
          </S.FlexInput>

          <label htmlFor="complement">{'Complemento (opicional)'}</label>
          <S.Input
            value={form.values.complement}
            type="text"
            name="complement"
            id="complement"
          />
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
