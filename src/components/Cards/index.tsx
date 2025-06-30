import Tag from '../Tag'
import {
  BotaoModal,
  Card,
  Descricao,
  DivHeader,
  HeaderCard,
  Img,
  Infos
} from './styles'
import estrela from '../../assets/images/estrela.png'
import { ButtonLink } from '../Button/styles'
import { useState } from 'react'

type Props = {
  id: number
  titulo: string
  tipo?: string
  destacado?: boolean
  descricao: string
  capa: string
  avaliacao?: number
}

const Pratos = ({
  id,
  titulo,
  tipo,
  descricao,
  avaliacao,
  destacado,
  capa
}: Props) => {
  const getDescricao = (description: string) => {
    if (description.length > 245) {
      return description.slice(0, 242) + '...'
    }
    return description
  }

  return (
    <Card id={`${id}`}>
      <Img src={capa} alt={titulo} />
      <Infos>
        {destacado && <Tag size="small">Destaque da Semana</Tag>}
        <Tag>{tipo}</Tag>
      </Infos>
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
      <ButtonLink type="button" to={`/perfil/${id}`}>
        Saiba mais
      </ButtonLink>
    </Card>
  )
}
export default Pratos
