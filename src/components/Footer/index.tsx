import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'

import * as S from './styles'

const Footer = () => (
  <S.Div>
    <Link to="/">
      <S.Img src={logo} />
    </Link>
    <S.DivSocial>
      <a href="#">
        <img src={instagram} />
      </a>
      <a href="#">
        <img src={facebook} />
      </a>
      <a href="#">
        <img src={twitter} />
      </a>
    </S.DivSocial>
    <S.Paragrafo>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </S.Paragrafo>
  </S.Div>
)

export default Footer
