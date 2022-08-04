import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { DetailContainer } from './subcomponents'

const Details: FC = () => {
  const details = useSelector((state: RootState) => state.details)

  const { name, climate, population } = details.detailResponse

  return (
    <DetailContainer>
      <div>{name}</div>
      <div>{climate}</div>
      <div>{population}</div>
    </DetailContainer>
  )
}

export default Details
