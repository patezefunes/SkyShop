import { ButtonBody } from './subcomponents'
import { ButtonType } from './types'

const Button: React.FC<ButtonType> = ({ text, buttonType, ...otherProps }) => {
  return <ButtonBody {...otherProps}>{text}</ButtonBody>
}

export default Button
