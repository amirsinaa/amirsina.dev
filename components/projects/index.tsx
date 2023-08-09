import {
  useColorMode,
  HStack,
  Tag
} from '@chakra-ui/react'
import Card from '@/components/user-interface-utilities/card'
import { VStack, SimpleGrid } from '@chakra-ui/react'
import { LayoutGroup } from 'framer-motion'
import ProjectsProps from '@/types/project'
import Link from 'next/link'

const Projects = ({ projects }: ProjectsProps) => {
  const { colorMode } = useColorMode()
  return (
    <VStack mx={2} align='start' spacing={8}>
      <LayoutGroup>
        <SimpleGrid columns={1} spacing={4} mt={5} w='100%'>
          {projects.map((project) => (
            <Link href={project.link} key={project.id}>
              <Card
                title={project.title}
                description={project.description}
                logo={project.logo}
                logoSize={['36', '36']}
                bg='deepBlueSea.100'
              >
                <HStack pt={2} display={{ sm: 'none', md: 'flex' }}>
                  {project.technologies.map((tech) => (
                    <Tag
                      key={tech.id}
                      color='white'
                      size='sm'
                      fontWeight='bold'
                      m={['0px', '0px', '5px']}
                      colorScheme={tech.colorMode}
                    >
                      {tech.name}
                    </Tag>
                  ))}
                </HStack>
              </Card>
            </Link>
          ))}
        </SimpleGrid>
      </LayoutGroup>
    </VStack>
  )
}

export default Projects
