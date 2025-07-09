import { useParams } from 'react-router-dom'

import SecondHeader from '../../components/SecondHeader'
import Banner from '../../components/Banner'
import PratosList from '../../components/PratosList'
import { useGetCardapioQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetCardapioQuery(id!)

  // const [cardapio, setCardapio] = useState<Restaurante>()

  // useEffect(() => {
  //   fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
  //     .then((res) => res.json())
  //     .then((res) => setCardapio(res))
  // }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <SecondHeader />
      <Banner
        category={cardapio.tipo}
        image={cardapio.capa}
        title={cardapio.titulo}
      />
      <PratosList pratos={cardapio.cardapio} name={cardapio.titulo} />
    </>
  )
}

export default Perfil
