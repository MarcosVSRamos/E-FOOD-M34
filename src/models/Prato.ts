class Prato {
  id: number
  description: string
  tipo: 'addCart' | 'more'
  image: string
  title: string
  button: string
  note?: number
  category?: string
  destaque?: boolean

  constructor(
    id: number,
    description: string,
    tipo: 'addCart' | 'more',
    image: string,
    title: string,
    button: string,
    note?: number,
    category?: string,
    destaque?: boolean
  ) {
    this.id = id
    this.description = description
    this.tipo = tipo
    this.image = image
    this.title = title
    this.note = note
    this.button = button
    this.category = category
    this.destaque = destaque
  }
}

export default Prato
