import { useEffect, useState } from 'react'

import pizza from '../../assets/images/pizza.png'
import SecondHeader from '../../components/SecondHeader'
import hero_italiana from '../../assets/images/hero_italiana.png'
import Banner from '../../components/Banner'
import PratosList from '../../components/RestaurantesList'
import Modal from '../../components/Modal'
import { Restaurante } from '../Home'

const Perfil = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <SecondHeader />
      <Banner
        category="italiana"
        image={hero_italiana}
        title="La Dolce Vita Trattoria"
      />
      <PratosList pratos={restaurantes} />
      <Modal />
    </>
  )
}

export default Perfil
