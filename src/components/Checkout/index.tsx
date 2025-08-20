import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import Button from '../Button'
import { RootReducer } from '../../store'
import { clear, closeCheckout, toFindCheckout } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Checkout = () => {
  const [step, setStep] = useState<'address' | 'payment'>('address')
  const [purchase, { isLoading, data, isSuccess, reset }] =
    usePurchaseMutation()

  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  // Formulário de endereço
  const formAddress = useFormik({
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
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('*Obrigatório!'),
      complement: Yup.string(),
      homeNumber: Yup.number().required('*Obrigatório!'),
      cep: Yup.string().required('*Obrigatório!'),
      city: Yup.string().required('*Obrigatório!'),
      street: Yup.string().required('*Obrigatório!')
    }),
    onSubmit: () => {
      dispatch(toFindCheckout())
      setStep('payment')
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
        .required('*Obrigatório!'),
      month: Yup.number()
        .min(2, 'O campo precisa ter 2 caracteres')
        .required('*Obrigatório!'),
      cvv: Yup.number()
        .min(3, 'O campo precisa ter 3 caracteres')
        .required('*Obrigatório!'),
      cardNumber: Yup.string()
        .min(19, 'O campo precisa ter 19 caracteres')
        .required('*Obrigatório!'),
      nameCard: Yup.string().required('*Obrigatório!')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          reciever: formAddress.values.name,
          address: {
            description: formAddress.values.street,
            city: formAddress.values.city,
            number: Number(formAddress.values.homeNumber),
            complement: formAddress.values.complement,
            zipCode: formAddress.values.cep
          }
        },
        payment: {
          card: {
            name: values.nameCard,
            number: values.cardNumber,
            code: Number(values.cvv),
            expires: {
              month: Number(values.month),
              year: Number(values.year)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        }))
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touchedAddress = fieldName in formAddress.touched
    const touchedPayment = fieldName in formPayment.touched
    const invalidAddress = fieldName in formAddress.errors
    const invalidPayment = fieldName in formPayment.errors

    if (touchedAddress && invalidAddress) return message
    if (touchedPayment && invalidPayment) return message
    return ''
  }

  const resetCheckout = () => {
    dispatch(clear())
    dispatch(closeCheckout())
    formAddress.resetForm()
    formPayment.resetForm()
    setStep('address')
    reset()
  }

  return (
    <>
      {isSuccess ? (
        <S.Div>
          <S.CheckoutValidation>
            <h2>Pedido realizado - {data.orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
            </p>
            <p>
              Nossos entregadores não estão autorizados a realizar cobranças
              extras.
            </p>
            <p>Lembre-se de higienizar as mãos após o recebimento do pedido.</p>
            <p>
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>

            <Button
              typeButton="button"
              title="Concluir"
              onClick={resetCheckout}
            >
              Concluir
            </Button>
          </S.CheckoutValidation>
        </S.Div>
      ) : (
        <>
          {step === 'address' && (
            <S.Div onSubmit={formAddress.handleSubmit}>
              <h2>Entrega</h2>
              <S.InputGroup>
                <label htmlFor="name">Quem irá receber</label>
                <input
                  name="name"
                  id="name"
                  type="text"
                  value={formAddress.values.name}
                  onChange={formAddress.handleChange}
                  onBlur={formAddress.handleBlur}
                />
                <small>
                  {getErrorMessage('name', formAddress.errors.name)}
                </small>
              </S.InputGroup>
              <S.InputGroup>
                <label htmlFor="street">Endereço</label>
                <input
                  name="street"
                  id="street"
                  type="text"
                  value={formAddress.values.street}
                  onChange={formAddress.handleChange}
                  onBlur={formAddress.handleBlur}
                />
                <small>
                  {getErrorMessage('street', formAddress.errors.street)}
                </small>
              </S.InputGroup>

              <S.InputGroup>
                <label htmlFor="city">Cidade</label>
                <input
                  name="city"
                  id="city"
                  type="text"
                  value={formAddress.values.city}
                  onChange={formAddress.handleChange}
                  onBlur={formAddress.handleBlur}
                />
                <small>
                  {getErrorMessage('city', formAddress.errors.city)}
                </small>
              </S.InputGroup>
              <S.FlexInput>
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    className="input-mask"
                    name="cep"
                    id="cep"
                    type="text"
                    value={formAddress.values.cep}
                    onChange={formAddress.handleChange}
                    onBlur={formAddress.handleBlur}
                    mask="99999-999"
                  />
                  <small>
                    {getErrorMessage('cep', formAddress.errors.cep)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="homeNumber">Número</label>
                  <input
                    name="homeNumber"
                    id="homeNumber"
                    type="number"
                    value={formAddress.values.homeNumber}
                    onChange={formAddress.handleChange}
                    onBlur={formAddress.handleBlur}
                  />
                  <small>
                    {getErrorMessage(
                      'homeNumber',
                      formAddress.errors.homeNumber
                    )}
                  </small>
                </S.InputGroup>
              </S.FlexInput>

              <S.InputGroup>
                <label htmlFor="complement">{`Complemento (opcional)`}</label>
                <input
                  name="complement"
                  className="complement"
                  id="complement"
                  type="text"
                  value={formAddress.values.complement}
                  onChange={formAddress.handleChange}
                  onBlur={formAddress.handleBlur}
                />
              </S.InputGroup>

              <Button typeButton="submit" title="Continuar com o pagamento">
                Continuar com o pagamento
              </Button>
              <Button
                typeButton="button"
                title="Voltar para o carrinho"
                onClick={() => {
                  dispatch(closeCheckout())
                }}
              >
                Voltar para o carrinho
              </Button>
            </S.Div>
          )}

          {step === 'payment' && (
            <S.Div onSubmit={formPayment.handleSubmit}>
              <h2>
                Pagamento - Valor a pagar {parseToBrl(getTotalPrice(items))}
              </h2>

              <S.InputGroup>
                <label htmlFor="nameCard">Nome no cartão</label>
                <input
                  name="nameCard"
                  id="nameCard"
                  type="text"
                  value={formPayment.values.nameCard}
                  onChange={formPayment.handleChange}
                  onBlur={formPayment.handleBlur}
                />
                <small>
                  {getErrorMessage('nameCard', formPayment.errors.nameCard)}
                </small>
              </S.InputGroup>

              <S.FlexInput>
                <S.InputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    name="cardNumber"
                    id="cardNumber"
                    type="text"
                    value={formPayment.values.cardNumber}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask="9999 9999 9999 9999 9999"
                  />
                  <small>
                    {getErrorMessage(
                      'cardNumber',
                      formPayment.errors.cardNumber
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cvv">CVV</label>
                  <InputMask
                    name="cvv"
                    id="cvv"
                    type="text"
                    value={formPayment.values.cvv}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask="999"
                  />
                  <small>
                    {getErrorMessage('cvv', formPayment.errors.cvv)}
                  </small>
                </S.InputGroup>
              </S.FlexInput>

              <S.FlexInput>
                <S.InputGroup>
                  <label htmlFor="month">Mês de vencimento</label>
                  <InputMask
                    name="month"
                    id="month"
                    type="text"
                    value={formPayment.values.month}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask="99"
                  />
                  <small>
                    {getErrorMessage('month', formPayment.errors.month)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="year">Ano de vencimento</label>
                  <InputMask
                    name="year"
                    id="year"
                    type="text"
                    value={formPayment.values.year}
                    onChange={formPayment.handleChange}
                    onBlur={formPayment.handleBlur}
                    mask="99"
                  />
                  <small>
                    {getErrorMessage('year', formPayment.errors.year)}
                  </small>
                </S.InputGroup>
              </S.FlexInput>

              <Button typeButton="submit" title="Finalizar pagamento">
                {isLoading ? 'Processando...' : 'Finalizar pagamento'}
              </Button>
              <Button
                typeButton="button"
                title="Voltar para a edição de endereço"
                onClick={() => setStep('address')}
              >
                Voltar para a edição de endereço
              </Button>
            </S.Div>
          )}
        </>
      )}
    </>
  )
}

export default Checkout
