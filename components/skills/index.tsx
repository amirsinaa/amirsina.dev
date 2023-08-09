import {
  useColorModeValue,
  VStack,
  Center,
  Box,
  SimpleGrid,
  useColorMode
} from '@chakra-ui/react'
import { MotionBox } from '@/components/user-interface-utilities/chakra-factory'
import { container } from '@/components/user-interface-utilities/transitions'
import Card from '@/components/user-interface-utilities/card'
import SkillsProps from '@/types/skill'
import Link from 'next/link'

const Skills = ({ skills }: SkillsProps) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      textAlign='center'
      mx={0}
    >
      <VStack mx={0} spacing={0}>
        <Center as='section' width='100%' mx={0}>
          <Box
            textAlign='center'
            fontSize='xl'
            m={['auto', 'initial']}
            w={['100%']}
            px={['0', '0', '0.5rem']}

          >
            <MotionBox
              variants={container}
              initial='hidden'
              mx={0}
              spacing={0}
              animate='visible'
            >
              <SimpleGrid columns={[2, 2, 3, 3, 4]} spacing={4} mt={8}>
                {skills.map((tool) => (
                  <Link href={tool.link} key={tool.id}>
                    <Card
                      title={tool.name}
                      bg={useColorModeValue('gray.50', 'deepBlueSea.100')}
                      color={useColorModeValue('gray.700', 'white')}
                      logo={tool.image}
                      colorMode={colorMode}
                    />
                  </Link>
                ))}
              </SimpleGrid>
            </MotionBox>
          </Box>
        </Center>
      </VStack>
    </Box>
  )
}

export default Skills
