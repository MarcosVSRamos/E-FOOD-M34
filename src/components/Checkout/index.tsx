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
import { useState } from 'react'

const Checkout = () => {
  const [step, setStep] = useState<'address' | 'payment'>('address')
  const { checkout, findCheckout, items } = useSelector(
    (state: RootReducer) => state.cart
  )
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

  // validações com formik

  const formAnddress = useFormik({
    initialValues: {
      name: '',
      complement: '',
      homeNumber: '',
      cep: '',
      city: '',
      street: ''
    },
    onSubmit: () => {
      setStep('payment')
      dispath(toFindCheckout())
    }
  })

  const formPayment = useFormik({
    initialValues: {
      year: '',
      month: '',
      cvv: '',
      cardNumber: '',
      nameCard: ''
    },
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <>
      {step === 'payment' && (
        <S.Div onSubmit={formPayment.handleSubmit}>
          <div>
            <h2>Pagamento - Valor a pagar R$ 190,90</h2>
            <div>
              <label htmlFor="nameCard">Nome no cartão</label>
              <S.Input
                type="text"
                name="nameCard"
                id="nameCard"
                value={formPayment.values.nameCard}
                onChange={formPayment.handleChange}
              />

              <S.FlexInput>
                <div className="card-number">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <S.Input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    value={formPayment.values.cardNumber}
                    onChange={formPayment.handleChange}
                  />
                </div>
                <div className="cvv">
                  <label htmlFor="cvv">CVV</label>
                  <S.Input
                    value={formPayment.values.cvv}
                    onChange={formPayment.handleChange}
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
                    value={formPayment.values.month}
                    onChange={formPayment.handleChange}
                    type="number"
                    name="month"
                    id="month"
                  />
                </div>
                <div>
                  <label htmlFor="year">Ano de vencimento</label>
                  <S.Input
                    value={formPayment.values.year}
                    onChange={formPayment.handleChange}
                    type="number"
                    name="year"
                    id="year"
                  />
                </div>
              </S.FlexInput>
            </div>
          </div>

          <Button
            onClick={formPayment.handleSubmit}
            typeButton="button"
            title="Finalizar pagamento"
          >
            Finalizar pagamento
          </Button>
          <Button
            onClick={() => setStep('address')}
            typeButton="button"
            title="Voltar para a edição de endereço"
          >
            Voltar para a edição de endereço
          </Button>
        </S.Div>
      )}

      {step === 'address' && (
        <S.Div onSubmit={formAnddress.handleSubmit}>
          <div>
            <h2>Entrega</h2>
            <label htmlFor="name">Quem irá receber</label>
            <S.Input
              onChange={formAnddress.handleChange}
              value={formAnddress.values.name}
              type="text"
              name="name"
              id="name"
            />
            <label htmlFor="street">Endereço</label>
            <S.Input
              value={formAnddress.values.street}
              type="text"
              name="street"
              id="street"
              onChange={formAnddress.handleChange}
            />
            <label htmlFor="city">Cidade</label>
            <S.Input
              value={formAnddress.values.city}
              type="text"
              name="city"
              id="city"
              onChange={formAnddress.handleChange}
            />
            <S.FlexInput>
              <div>
                <label htmlFor="cep">CEP</label>
                <S.Input
                  value={formAnddress.values.cep}
                  onChange={formAnddress.handleChange}
                  type="number"
                  name="cep"
                  id="cep"
                />
              </div>
              <div>
                <label htmlFor="homeNumber">Número</label>
                <S.Input
                  value={formAnddress.values.homeNumber}
                  onChange={formAnddress.handleChange}
                  type="number"
                  name="homeNumber"
                  id="homeNumber"
                />
              </div>
            </S.FlexInput>

            <label htmlFor="complement">{'Complemento (opicional)'}</label>
            <S.Input
              value={formAnddress.values.complement}
              onChange={formAnddress.handleChange}
              type="text"
              name="complement"
              id="complement"
            />
          </div>

          <Button
            onClick={formAnddress.handleSubmit}
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
      )}
    </>
  )
}
export default Checkout
