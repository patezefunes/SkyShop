import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import Carousel from '../../components/carousel'
import { carouselData } from '../../data/carouselData'
import { RootState } from '../../store/store'
import {
  MainContainer,
  SliderContainer,
  SliderTitle,
  SliderTitleInfo,
} from './subcomponents'
const Slider: FC = () => {
  const {
    carousel: { selectedCountry },
  } = useSelector((state: RootState) => state, shallowEqual)
  return (
    <MainContainer>
      <SliderTitle>
        <span>Planes turísticos</span>
        <SliderTitleInfo>{selectedCountry}</SliderTitleInfo>
      </SliderTitle>
      <SliderContainer>
        <FontAwesomeIcon icon={faAngleDoubleLeft} size="6x" />
        <Carousel data={carouselData} />
        <FontAwesomeIcon icon={faAngleDoubleRight} size="6x" />
      </SliderContainer>
    </MainContainer>
  )
}

export default Slider
