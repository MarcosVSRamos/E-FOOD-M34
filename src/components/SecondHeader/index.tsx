import { Link } from 'react-router-dom'

import fundo_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'
import { Div, Hero, Img } from './styles'

const SecondHeader = () => (
  <Hero style={{ backgroundImage: `url(${fundo_hero})` }}>
    <Div className="container">
      <h3>Restaurantes</h3>
      <Link to="/">
        <Img src={logo} />
      </Link>
      <p>
        <span>0</span> produto(s) no carrinho
      </p>
    </Div>
  </Hero>
)

export default SecondHeader
