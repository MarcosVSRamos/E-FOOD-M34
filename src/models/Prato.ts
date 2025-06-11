class Prato {
  id: number
  category: string
  description: string
  image: string
  title: string
  note: number
  destaque?: boolean

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    title: string,
    note: number,
    destaque?: boolean
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.note = note
    this.destaque = destaque
  }
}

export default Prato
