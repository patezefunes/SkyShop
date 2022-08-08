import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import requestData from 'store/details/actions'
import Carousel from '../../components/carousel'
import { carouselData } from '../../data/carouselData'
import { AppDispatch, RootState } from '../../store/store'
import {
  MainContainer,
  SliderContainer,
  SliderTitle,
  SliderTitleInfo,
} from './subcomponents'
const Slider: FC = () => {
  const {
    carousel: { selectedCountry, countryId },
  } = useSelector((state: RootState) => state, shallowEqual)

  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const handleNavigate = () => {
    dispatch(requestData(countryId))
    navigate('/details')
  }

  return (
    <MainContainer>
      <SliderTitle>
        <span>Planes turísticos</span>
        <SliderTitleInfo onClick={handleNavigate}>
          {selectedCountry}
        </SliderTitleInfo>
      </SliderTitle>
      <SliderContainer>
        <FontAwesomeIcon icon={faAngleDoubleLeft} />
        <Carousel data={carouselData} />
        <FontAwesomeIcon icon={faAngleDoubleRight} />
      </SliderContainer>
    </MainContainer>
  )
}

export default Slider
