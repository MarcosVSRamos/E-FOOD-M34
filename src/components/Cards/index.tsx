import Tag from '../Tag'
import {
  AddToCard,
  Card,
  Descricao,
  DivHeader,
  HeaderCard,
  Img,
  Infos
} from './styles'
import estrela from '../../assets/images/estrela.png'
import { ButtonLink } from '../Button/styles'

type Props = {
  id: number
  restauranteOuPrato: 'restaurante' | 'prato'
  titulo: string
  tipo?: string
  onClickModal?: () => void
  destacado?: boolean
  descricao: string
  capa: string
  avaliacao?: number
}

const Pratos = ({
  id,
  restauranteOuPrato,
  titulo,
  tipo,
  onClickModal,
  descricao,
  avaliacao,
  destacado,
  capa
}: Props) => {
  const getDescricao = (description: string) => {
    if (restauranteOuPrato === 'prato') {
      return description.slice(0, 172) + '...'
    }
    if (description.length > 245) {
      return description.slice(0, 242) + '...'
    }
    return description
  }

  return (
    <Card id={`${id}`} restauranteOuPrato={restauranteOuPrato}>
      <Img src={capa} alt={titulo} />
      {tipo && (
        <Infos>
          {destacado && <Tag size="small">Destaque da Semana</Tag>}
          <Tag>{tipo}</Tag>
        </Infos>
      )}
      <DivHeader>
        <HeaderCard>{titulo}</HeaderCard>
        {avaliacao && (
          <div>
            <HeaderCard>{avaliacao}</HeaderCard>
            <img src={estrela} />
          </div>
        )}
      </DivHeader>
      <Descricao>{getDescricao(descricao)}</Descricao>
      {restauranteOuPrato === 'restaurante' ? (
        <ButtonLink type="button" to={`/perfil/${id}`}>
          Saiba mais
        </ButtonLink>
      ) : (
        <AddToCard type="button" onClick={onClickModal}>
          Adicionar ao carrinho
        </AddToCard>
      )}
    </Card>
  )
}
export default Pratos
