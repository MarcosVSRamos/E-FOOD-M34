import { useFormik } from 'formik'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as Yup from 'yup'

import Button from '../Button'
import { RootReducer } from '../../store'

import {
  closeCheckout,
  exitFindCheckout,
  toFindCheckout
} from '../../store/reducers/cart'

import * as S from './styles'
import { getTotalPrice, parseToBrl } from '../../utils'

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
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'O nome precisa te pelo menos 5 caracteres')
        .required('*Obrigatório!'),
      complement: Yup.string(),
      homeNumber: Yup.number().required('*Obrigatório!'),
      cep: Yup.number().required('*Obrigatório!'),
      city: Yup.string().required('*Obrigatório!'),
      street: Yup.string().required('*Obrigatório!')
    }),
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
    validationSchema: Yup.object({
      year: Yup.number()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('*Obrigatório!'),
      month: Yup.number()
        .min(2, 'O campo precisa ter 2 caracteres')
        .max(2, 'O campo precisa ter 2 caracteres')
        .required('*Obrigatório!'),
      cvv: Yup.number()
        .min(3, 'O campo precisa ter 3 caracteres')
        .max(3, 'O campo precisa ter 3 caracteres')
        .required('*Obrigatório!'),
      cardNumber: Yup.number()
        .min(19, 'O campo precisa ter 19 caracteres')
        .max(19, 'O campo precisa ter 19 caracteres')
        .required('*Obrigatório!'),
      nameCard: Yup.string().required('*Obrigatório!')
    }),
    onSubmit: () => {
      console.log(formPayment.values)
      console.log(formAnddress.values)
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const addressTouched = fieldName in formAnddress.touched
    const paymentTouched = fieldName in formPayment.touched

    const isInvalidAddress = fieldName in formAnddress.errors
    const isInvalidPayment = fieldName in formPayment.errors

    if (addressTouched && isInvalidAddress) return message

    if (paymentTouched && isInvalidPayment) return message
    return ''
  }

  return (
    <>
      {step === 'payment' && (
        <S.Div onSubmit={formPayment.handleSubmit}>
          <div>
            <h2>
              Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
            </h2>
            <div>
              <label htmlFor="nameCard">Nome no cartão</label>
              <S.Input
                type="text"
                name="nameCard"
                id="nameCard"
                value={formPayment.values.nameCard}
                onChange={formPayment.handleChange}
                onBlur={formPayment.handleBlur}
              />
              <small>
                {getErrorMessage('nameCard', formPayment.errors.nameCard)}
              </small>

              <S.FlexInput>
                <div className="card-number">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <S.Input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    value={formPayment.values.cardNumber}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'cardNumber',
                      formPayment.errors.cardNumber
                    )}
                  </small>
                </div>
                <div className="cvv">
                  <label htmlFor="cvv">CVV</label>
                  <S.Input
                    value={formPayment.values.cvv}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    type="number"
                    name="cvv"
                    id="cvv"
                  />
                  <small>
                    {getErrorMessage('cvv', formPayment.errors.cvv)}
                  </small>
                </div>
              </S.FlexInput>

              <S.FlexInput>
                <div>
                  <label htmlFor="month">Mês de vencimento</label>
                  <S.Input
                    value={formPayment.values.month}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    type="number"
                    name="month"
                    id="month"
                  />
                  <small>
                    {getErrorMessage('month', formPayment.errors.month)}
                  </small>
                </div>
                <div>
                  <label htmlFor="year">Ano de vencimento</label>
                  <S.Input
                    value={formPayment.values.year}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    type="number"
                    name="year"
                    id="year"
                  />
                  <small>
                    {getErrorMessage('year', formPayment.errors.year)}
                  </small>
                </div>
              </S.FlexInput>
            </div>
          </div>

          <Button typeButton="submit" title="Finalizar pagamento">
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
              onBlur={formAnddress.handleBlur}
              value={formAnddress.values.name}
              type="text"
              name="name"
              id="name"
            />
            <small>{getErrorMessage('name', formAnddress.errors.name)}</small>
            <label htmlFor="street">Endereço</label>
            <S.Input
              value={formAnddress.values.street}
              type="text"
              name="street"
              id="street"
              onChange={formAnddress.handleChange}
              onBlur={formAnddress.handleBlur}
            />
            <small>
              {getErrorMessage('street', formAnddress.errors.street)}
            </small>
            <label htmlFor="city">Cidade</label>
            <S.Input
              value={formAnddress.values.city}
              type="text"
              name="city"
              id="city"
              onChange={formAnddress.handleChange}
              onBlur={formAnddress.handleBlur}
            />
            <small>{getErrorMessage('city', formAnddress.errors.city)}</small>
            <S.FlexInput>
              <div>
                <label htmlFor="cep">CEP</label>
                <S.Input
                  value={formAnddress.values.cep}
                  onChange={formAnddress.handleChange}
                  onBlur={formAnddress.handleBlur}
                  type="number"
                  name="cep"
                  id="cep"
                />
                <small>{getErrorMessage('cep', formAnddress.errors.cep)}</small>
              </div>
              <div>
                <label htmlFor="homeNumber">Número</label>
                <S.Input
                  value={formAnddress.values.homeNumber}
                  onChange={formAnddress.handleChange}
                  onBlur={formAnddress.handleBlur}
                  type="number"
                  name="homeNumber"
                  id="homeNumber"
                />
                <small>
                  {getErrorMessage(
                    'homeNumber',
                    formAnddress.errors.homeNumber
                  )}
                </small>
              </div>
            </S.FlexInput>

            <label htmlFor="complement">{'Complemento (opicional)'}</label>
            <S.Input
              value={formAnddress.values.complement}
              onChange={formAnddress.handleChange}
              onBlur={formAnddress.handleBlur}
              type="text"
              name="complement"
              id="complement"
            />
          </div>

          <Button typeButton="submit" title="Continuar com o pagamento">
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
