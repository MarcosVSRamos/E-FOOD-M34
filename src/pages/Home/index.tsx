import Prato from '../../models/Prato'
import prato_japones from '../../assets/images/prato_japones.png'
import Header from '../../components/Header'
import PratosList from '../../components/PratosList'

const listaDePratos: Prato[] = [
  {
    id: 1,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 2,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 3,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 4,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 5,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 6,
    destaque: true,
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  }
]

const Home = () => (
  <>
    <Header />
    <PratosList pratos={listaDePratos} />
  </>
)

export default Home
