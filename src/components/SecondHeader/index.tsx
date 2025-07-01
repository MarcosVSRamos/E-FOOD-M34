import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import fundo_hero from '../../assets/images/fundo_hero.png'
import logo from '../../assets/images/logo.png'
import { Div, Hero, Img } from './styles'
import { Restaurante } from '../../pages/Home'

const SecondHeader = () => {
  const { id } = useParams<{ id: string }>()

  const [cardapio, setCardapio] = useState<Restaurante>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  }, [id])

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }
  return (
    <Hero style={{ backgroundImage: `url(${fundo_hero})` }}>
      <Div className="container">
        <h3>Restaurantes</h3>
        <Link to="/">
          <Img src={logo} />
        </Link>
        <p>
          <span>0</span> produto(s) no carrinho
        </p>
      </Div>
    </Hero>
  )
}

export default SecondHeader
