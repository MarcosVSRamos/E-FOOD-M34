import Tag from '../Tag'
import { Card, Descricao, DivHeader, HeaderCard, Img, Infos } from './styles'
import estrela from '../../assets/images/estrela.png'
import { ButtonLink } from '../Button/styles'

type Props = {
  title: string
  category: string
  destaque?: boolean
  description: string
  image: string
  note: number
}

const Pratos = ({
  title,
  category,
  description,
  note,
  destaque,
  image
}: Props) => (
  <Card>
    <Img src={image} alt={title} />
    <Infos>
      {destaque && <Tag size="small">Destaque da Semana</Tag>}
      <Tag>{category}</Tag>
    </Infos>
    <DivHeader>
      <HeaderCard>{title}</HeaderCard>
      <div>
        <HeaderCard>{note}</HeaderCard>
        <img src={estrela} />
      </div>
    </DivHeader>
    <Descricao>{description}</Descricao>
    <ButtonLink type="button" to="/perfil">
      Saiba Mais
    </ButtonLink>
  </Card>
)

export default Pratos
