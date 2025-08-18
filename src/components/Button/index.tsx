import { ReactNode } from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  typeButton: 'button' | 'link' | 'submit'
  title: string
  to?: string
  onClick?: () => void
  children: ReactNode
}

const Button = ({ typeButton, title, to, onClick, children }: Props) => {
  if (typeButton === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  if (typeButton === 'submit') {
    return (
      <ButtonContainer type="submit" title={title}>
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}

export default Button
