import Tag from '../Tag'
import { Card, Descricao, DivHeader, HeaderCard, Img, Infos } from './styles'
import estrela from '../../assets/images/estrela.png'
import { ButtonLink } from '../Button/styles'

type Props = {
  title: string
  tipo: 'addCart' | 'more'
  category?: string
  destaque?: boolean
  description: string
  button: string
  image: string
  note?: number
}

const Pratos = ({
  title,
  category,
  tipo,
  description,
  button,
  note,
  destaque,
  image
}: Props) => {
  if (tipo === 'more') {
    return (
      <Card tipo={tipo}>
        <Img tipo={tipo} src={image} alt={title} />
        <Infos>
          {destaque && <Tag size="small">Destaque da Semana</Tag>}
          <Tag>{category}</Tag>
        </Infos>
        <DivHeader>
          <HeaderCard tipo={tipo}>{title}</HeaderCard>
          {note && (
            <div>
              <HeaderCard tipo={tipo}>{note}</HeaderCard>
              <img src={estrela} />
            </div>
          )}
        </DivHeader>
        <Descricao tipo={tipo}>{description}</Descricao>
        <ButtonLink type="button" to="/perfil">
          {button}
        </ButtonLink>
      </Card>
    )
  }
  return (
    <Card tipo={tipo}>
      <Img tipo={tipo} src={image} alt={title} />
      <DivHeader>
        <HeaderCard tipo={tipo}>{title}</HeaderCard>
        {note && (
          <div>
            <HeaderCard tipo={tipo}>{note}</HeaderCard>
            <img src={estrela} />
          </div>
        )}
      </DivHeader>
      <Descricao tipo={tipo}>{description}</Descricao>
      <ButtonLink type="button" to="/perfil">
        {button}
      </ButtonLink>
    </Card>
  )
}

export default Pratos
