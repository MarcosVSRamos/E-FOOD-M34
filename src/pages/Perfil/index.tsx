import Prato from '../../models/Prato'

import prato_japones from '../../assets/images/prato_japones.png'
import macarrao from '../../assets/images/macarrao.png'
import SecondHeader from '../../components/SecondHeader'
import hero_italiana from '../../assets/images/hero_italiana.png'
import Banner from '../../components/Banner'

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
    destaque: false,
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 3,
    destaque: false,
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 4,
    destaque: false,
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 5,
    destaque: false,
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  },
  {
    id: 6,
    destaque: false,
    category: 'italiana',
    title: 'Hioki Sushi',
    note: 4.6,
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: macarrao
  }
]

const Perfil = () => (
  <>
    <SecondHeader />
    <Banner
      category="italiana"
      image={hero_italiana}
      title="La Dolce Vita Trattoria"
    />
  </>
)

export default Perfil
