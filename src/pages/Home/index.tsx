import Header from '../../components/Header'
import PratosList from '../../components/RestaurantesList'
import { useGetRestaurantesQuery } from '../../services/api'

export interface RestauranteItens {
  url: string
}

export type Prato = {
  id: number
  nome: string
  descricao: string
  foto: string
  preco: number
  porcao: string
}

export type Restaurante = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Prato[]
}

const Home = () => {
  // const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  // useEffect(() => {
  //   fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
  //     .then((res) => res.json())
  //     .then((res) => setRestaurantes(res))
  // }, [])

  const { data: listaRestaurantes } = useGetRestaurantesQuery()

  if (!listaRestaurantes) {
    return <h4>Carregando...</h4>
  }
  return (
    <>
      <Header />
      <PratosList pratos={listaRestaurantes} />
    </>
  )
}

export default Home
