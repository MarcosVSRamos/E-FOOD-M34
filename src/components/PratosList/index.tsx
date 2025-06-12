import Prato from '../../models/Prato'
import Pratos from '../Pratos'
import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
}

const PratosList = ({ pratos }: Props) => (
  <Container>
    <div className="container">
      <List>
        {pratos.map((prato) => (
          <Pratos
            key={prato.id}
            category={prato.category}
            description={prato.description}
            image={prato.image}
            note={prato.note}
            title={prato.title}
            destaque={prato.destaque}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PratosList
