
import {
  Button
} from '@chakra-ui/react'
import { BsArrowLeft } from 'react-icons/bs'

export const GoBackButton = ({ routerInstance }) => {
  return (
    <Button
      onClick={() => routerInstance.back()}
      display='flex'
      justifyContent='flex-start'
      mb='1.5em'
      fontSize='1.5em'
      p='1.3em 1em'
    >
      <BsArrowLeft className="mt-5" width={45} height={45} />
    </Button>
  )
}