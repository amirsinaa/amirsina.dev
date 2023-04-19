import { ReactComponentElement } from 'react'

export default interface AnimatedButtonProps {
  link: string,
  icon: ReactComponentElement,
  background?: string,
  width?: string,
  hoverBackground: string,
  text: string
}