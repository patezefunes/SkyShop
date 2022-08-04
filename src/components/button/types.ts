import { ButtonHTMLAttributes } from 'react'

export type ButtonType = {
  text: string
  buttonType?: string
} & ButtonHTMLAttributes<HTMLButtonElement>
