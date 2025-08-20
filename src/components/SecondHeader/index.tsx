import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import cover_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'

import { RootReducer } from '../../store'
import { open } from '../../store/reducers/cart'

import * as S from './styles'

const SecondHeader = () => {
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(open())
  }

  const { items } = useSelector((state: RootReducer) => state.cart)

  return (
    <S.Hero style={{ backgroundImage: `url(${cover_hero})` }}>
      <S.Div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <S.Img src={logo} />
        </Link>
        <p onClick={openCart}>
          <span>{items.length}</span> produto(s) no carrinho
        </p>
      </S.Div>
    </S.Hero>
  )
}

export default SecondHeader
