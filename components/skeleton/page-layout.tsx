
import { PageLayoutFramerMotionAnimateObjectVariants } from '@/components/user-interface-utilities/transitions'
import type PageLayoutProps from '@/types/page-layout'
import { motion } from 'framer-motion'
import Meta from '@/components/skeleton/meta'

const PageLayout = ({
  children,
  title,
  description,
  keywords,
  image
}: PageLayoutProps): JSX.Element => (
  <>
    <Meta
      title={title}
      description={description}
      keywords={keywords}
      image={image}
    />
    <motion.main
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={PageLayoutFramerMotionAnimateObjectVariants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  </>
)

export default PageLayout
