export type CarouselItemProps = {
  name: string
  image: string
  countryId: string
  handleSelection: (id: string) => void
  selected: boolean
}

export type CarouselItemDescriptionProps = {
  name: string
}
