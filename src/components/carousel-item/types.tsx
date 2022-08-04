export type CarouselItemProps = {
  name: string
  image: string
  id: number
  handleSelection: (id: number) => void
  selected: boolean
}

export type CarouselItemDescriptionProps = {
  name: string
}
