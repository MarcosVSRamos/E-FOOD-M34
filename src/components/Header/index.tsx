import fundo_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'
import { Hero, Logo } from './styles'

const Header = () => (
  <div>
    <Hero style={{ backgroundImage: `url(${fundo_hero})` }}>
      <Logo src={logo} alt="E-FOOD" />
      <h2>Viva experiências gastronômicas {<br />} no conforto da sua casa</h2>
    </Hero>
  </div>
)

export default Header
