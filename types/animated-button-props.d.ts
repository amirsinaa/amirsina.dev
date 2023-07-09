import { ReactComponentElement } from 'react'

export default interface AnimatedButtonProps {
  link: string
  icon: ReactComponentElement
  bg?: string
  buttonColorSchema?: string
  width?: string
  hoverBackground?: string
  text: string
  color?: string
}