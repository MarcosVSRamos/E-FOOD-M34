import { useParams } from 'react-router-dom'

import SecondHeader from '../../components/SecondHeader'
import Banner from '../../components/Banner'
import SnaksList from '../../components/SnaksList'
import { useGetMenuQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: menu, isLoading } = useGetMenuQuery(id ?? '', {
    skip: !id
  })

  if (isLoading || !menu) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <SecondHeader />
      <Banner category={menu.tipo} image={menu.capa} title={menu.titulo} />
      <SnaksList snaks={menu.cardapio} name={menu.titulo} />
    </>
  )
}

export default Perfil
