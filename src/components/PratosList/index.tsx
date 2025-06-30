import { Prato } from '../../pages/Home'
import Pratos from '../Cards'

type Props = {
  pratos: Prato[]
}

const PratosList = ({ pratos }: Props) => {
  return (
    <div>
      <div className="container">
        <ul>
          {pratos.map((prato) => (
            <li key={prato.id}>
              <Pratos
                id={prato.id}
                descricao={prato.descricao}
                capa={prato.foto}
                titulo={prato.nome}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PratosList
