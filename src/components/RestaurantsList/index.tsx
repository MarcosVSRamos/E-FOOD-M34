import { Restaurant } from '../../types'
import Snaks from '../Cards'
import { Container, List } from './styles'

export type Props = {
  snaks: Restaurant[]
}

const RestaurantsList = ({ snaks }: Props) => (
  <Container>
    <div className="container">
      <List>
        {snaks.map((snak) => (
          <li key={snak.id}>
            <Snaks
              id={snak.id}
              restaurantOrSnak="restaurant"
              type={snak.tipo}
              description={snak.descricao}
              cover={snak.capa}
              avaliation={snak.avaliacao}
              title={snak.titulo}
              highlited={snak.destacado}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantsList
