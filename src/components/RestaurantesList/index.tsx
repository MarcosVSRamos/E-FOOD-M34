import { Restaurante } from '../../pages/Home'
import Pratos from '../Cards'
import { Container, List } from './styles'

export type Props = {
  pratos: Restaurante[]
}

const RestaurantesList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <li key={prato.id}>
            <Pratos
              id={prato.id}
              tipo={prato.tipo}
              descricao={prato.descricao}
              capa={prato.capa}
              avaliacao={prato.avaliacao}
              titulo={prato.titulo}
              destacado={prato.destacado}
            />
          </li>
        ))}
      </List>
    </div>
  </Container>
)

export default RestaurantesList
