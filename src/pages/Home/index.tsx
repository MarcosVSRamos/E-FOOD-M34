import Prato from '../../models/Prato'
import Header from '../../components/Header'
import PratosList from '../../components/PratosList'

import prato_japones from '../../assets/images/prato_japones.png'
import macarrao from '../../assets/images/macarrao.png'

const listaDePratos: Prato[] = [
  {
    id: 1,
    destaque: true,
    tipo: 'more',
    category: 'Japonesa',
    title: 'Hioki Sushi',
    note: 4.9,
    button: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: prato_japones
  },
  {
    id: 2,
    destaque: false,
    tipo: 'more',
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 3,
    destaque: false,
    tipo: 'more',
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 4,
    destaque: false,
    tipo: 'more',
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 5,
    destaque: false,
    tipo: 'more',
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 6,
    destaque: false,
    tipo: 'more',
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    button: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  }
]

const Home = () => (
  <>
    <Header />
    <PratosList typeList="more" pratos={listaDePratos} />
  </>
)

export default Home
