import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'store/store'
import { carouselActions } from '../../store/carousel/carousel.reducer'
import { CarouselImage, CarouselItemContainer } from './subcomponents'
import { CarouselItemProps } from './types'

const CarouselItem: FC<CarouselItemProps> = ({ image, name, countryId }) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleSelect = () => {
    dispatch(carouselActions.setTitle({ selectedCountry: name, countryId }))
  }

  return (
    <CarouselItemContainer onHoverStart={handleSelect}>
      <CarouselImage src={image} alt={name} />
    </CarouselItemContainer>
  )
}

export default CarouselItem
