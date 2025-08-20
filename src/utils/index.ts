import { Snak } from '../types'

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Snak[]) => {
  return items.reduce((acumulator, currentItem) => {
    if (currentItem.preco) {
      return (acumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
