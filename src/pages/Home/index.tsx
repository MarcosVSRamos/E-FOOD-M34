import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurantsList } = useGetRestaurantsQuery()

  if (!restaurantsList) {
    return <h4>Carregando...</h4>
  }
  return (
    <>
      <Header />
      <RestaurantsList snaks={restaurantsList} />
    </>
  )
}

export default Home
