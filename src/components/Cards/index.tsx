import Tag from '../Tag'
import star from '../../assets/images/estrela.png'
import { ButtonLink } from '../Button/styles'

import * as S from './styles'

type Props = {
  id: number
  restaurantOrSnak: 'restaurant' | 'snak'
  title: string
  type?: string
  onClickModal?: () => void
  highlited?: boolean
  description: string
  cover: string
  avaliation?: number
}

const Snaks = ({
  id,
  restaurantOrSnak,
  title,
  onClickModal,
  description,
  cover,
  type,
  highlited,
  avaliation
}: Props) => {
  const getDescription = (description?: string) => {
    if (restaurantOrSnak === 'snak') {
      return (
        description?.slice(0, 152) +
        (description && description.length > 152 ? '...' : '')
      )
    }
    return description && description.length > 195
      ? description.slice(0, 192) + '...'
      : description || 'Erro ao renderizar descrição'
  }

  return (
    <S.Card id={`${id}`} restaurantOrSnak={restaurantOrSnak}>
      <S.Img src={cover} alt={title} />
      {type && (
        <S.Infos>
          {highlited && <Tag size="small">Destaque da Semana</Tag>}
          <Tag>{type}</Tag>
        </S.Infos>
      )}
      <S.DivHeader>
        <S.HeaderCard>{title}</S.HeaderCard>
        {avaliation !== undefined && (
          <div>
            <S.HeaderCard>{avaliation}</S.HeaderCard>
            <img src={star} />
          </div>
        )}
      </S.DivHeader>
      <S.Descricao>{getDescription(description)}</S.Descricao>
      {restaurantOrSnak === 'restaurant' ? (
        <ButtonLink to={`/perfil/${id}`}>Saiba mais</ButtonLink>
      ) : (
        <S.AddToCard type="button" onClick={onClickModal}>
          Adicionar ao carrinho
        </S.AddToCard>
      )}
    </S.Card>
  )
}
export default Snaks
