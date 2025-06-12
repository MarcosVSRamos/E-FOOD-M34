import { Link } from 'react-router-dom'
import fundo_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'
import { Hero, Logo } from './styles'

const Header = () => (
  <div>
    <Hero style={{ backgroundImage: `url(${fundo_hero})` }}>
      <Link to="/">
        <Logo src={logo} alt="E-FOOD" />
      </Link>
      <h2>Viva experiências gastronômicas {<br />} no conforto da sua casa</h2>
    </Hero>
  </div>
)

export default Header
