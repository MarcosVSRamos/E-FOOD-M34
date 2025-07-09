import { Link, useParams } from 'react-router-dom'

import fundo_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'
import { Div, Hero, Img } from './styles'
import { useGetBannerQuery } from '../../services/api'
import { RootReducer } from '../../store'
import { useSelector } from 'react-redux'

const SecondHeader = () => {
  const { id } = useParams()

  const { items } = useSelector((state: RootReducer) => state.cart)

  const { data: cardapio } = useGetBannerQuery(id!)

  return (
    <Hero style={{ backgroundImage: `url(${fundo_hero})` }}>
      <Div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <Img src={logo} />
        </Link>
        <p>
          <span>{items.length}</span> produto(s) no carrinho
        </p>
      </Div>
    </Hero>
  )
}

export default SecondHeader
