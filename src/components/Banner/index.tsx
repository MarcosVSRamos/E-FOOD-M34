import { Categoria, Div, Hero, Titulo } from './styles'
import fundo_escuro from '../../assets/images/fundo_escuro.png'

type Props = {
  title: string
  category: string
  image: string
}

const Banner = ({ title, category, image }: Props) => (
  <Hero style={{ backgroundImage: `url(${image})` }}>
    <Div style={{ backgroundImage: `url(${fundo_escuro})` }}>
      <div className="container">
        <Categoria>{category}</Categoria>
        <Titulo>{title}</Titulo>
      </div>
    </Div>
  </Hero>
)

export default Banner
