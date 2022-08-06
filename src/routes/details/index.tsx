import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { DetailContainer, DetailImage } from './subcomponents'

const Details: FC = () => {
  const details = useSelector((state: RootState) => state.details)

  const { name, capital, flagImageUri } = details.detailResponse

  return (
    <DetailContainer>
      <div>{name}</div>
      <div>{capital}</div>
      <DetailImage alt={name} src={flagImageUri} />
    </DetailContainer>
  )
}

export default Details
