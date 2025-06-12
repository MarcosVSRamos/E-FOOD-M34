import Prato from '../../models/Prato'

import pizza from '../../assets/images/pizza.png'
import SecondHeader from '../../components/SecondHeader'
import hero_italiana from '../../assets/images/hero_italiana.png'
import Banner from '../../components/Banner'
import PratosList from '../../components/PratosList'

type PratoSemNota = Omit<Prato, 'note' | 'destaque'>

const listaDePratos: PratoSemNota[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    tipo: 'addCart',
    button: 'Adiocinar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza
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
    <PratosList typeList="addCart" pratos={listaDePratos} />
  </>
)

export default Perfil
