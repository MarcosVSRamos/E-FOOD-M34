import Prato from '../../models/Prato'
import Pratos from '../Pratos'
import { Container, List } from './styles'

export type Props = {
  pratos: Prato[]
  typeList: 'addCart' | 'more'
}

const PratosList = ({ pratos, typeList }: Props) => (
  <Container>
    <div className="container">
      <List typeList={typeList}>
        {pratos.map((prato) => (
          <Pratos
            key={prato.id}
            category={prato.category}
            tipo={prato.tipo}
            description={prato.description}
            image={prato.image}
            note={prato.note}
            button={prato.button}
            title={prato.title}
            destaque={prato.destaque}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default PratosList
