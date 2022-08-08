import { FC, useEffect } from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { RootState } from 'store/store'
import { DetailContainer, DetailImage } from './subcomponents'
import { TailSpin } from 'react-loader-spinner'

const Details: FC = () => {
  const navigate = useNavigate()

  const {
    details: { detailResponse, detailError, loading },
  } = useSelector((state: RootState) => state, shallowEqual)

  useEffect(() => {
    if (detailError) navigate('/error')
  }, [detailError])

  const { name, capital, flagImageUri } = detailResponse || {}

  console.log('Esta cargando? ' + loading)

  return (
    <DetailContainer loading={loading}>
      {loading ? (
        <>
          <TailSpin />
        </>
      ) : (
        <>
          <div>{name}</div>
          <div>{capital}</div>
          <DetailImage alt={name} src={flagImageUri} />
        </>
      )}
    </DetailContainer>
  )
}

export default Details
