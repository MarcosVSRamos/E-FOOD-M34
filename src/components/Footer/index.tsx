import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import { Link } from 'react-router-dom'
import { Div, DivSocial, Img, Paragrafo } from './styles'

const Footer = () => (
  <Div>
    <Link to="/">
      <Img src={logo} />
    </Link>
    <DivSocial>
      <a href="#">
        <img src={instagram} />
      </a>
      <a href="#">
        <img src={facebook} />
      </a>
      <a href="#">
        <img src={twitter} />
      </a>
    </DivSocial>
    <Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Paragrafo>
  </Div>
)

export default Footer
