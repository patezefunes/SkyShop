import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import requestData from 'store/details/actions'
import { AppDispatch } from 'store/store'
import { carouselActions } from '../../store/carousel/carousel.reducer'
import { CarouselImage, CarouselItemContainer } from './subcomponents'
import { CarouselItemProps } from './types'

const CarouselItem: FC<CarouselItemProps> = ({ image, name, id }) => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleSelect = () => {
    dispatch(carouselActions.setTitle(name))
  }
  const handleNavigate = async () => {
    await dispatch(requestData())
    navigate('/details')
  }

  return (
    <CarouselItemContainer onClick={handleNavigate} onHoverStart={handleSelect}>
      <CarouselImage src={image} alt={name} />
    </CarouselItemContainer>
  )
}

export default CarouselItem
