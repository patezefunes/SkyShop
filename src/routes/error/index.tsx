import Button from 'components/button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ErrorContainer, ErrorDetail } from './subcomponent'
import { RootState } from 'store/store'

const ErrorPage = () => {
  const navigate = useNavigate()
  const { detailError } = useSelector((state: RootState) => state.details)

  return (
    <ErrorContainer>
      <ErrorDetail>There was an error</ErrorDetail>
      <p>{detailError.message}</p>
      <Button text={'Go back'} onClick={() => navigate('/')} />
    </ErrorContainer>
  )
}

export default ErrorPage
