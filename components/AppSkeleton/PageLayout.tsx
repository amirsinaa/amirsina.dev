
import { PageLayoutFramerMotionAnimateObjectVariants } from "@/components/UserInterfaceUtilities/Transitions"
import PageLayoutProps from "@/types/PageLayoutProps"
import { motion } from "framer-motion";
import Meta from "./Meta";

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
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={PageLayoutFramerMotionAnimateObjectVariants}
      transition={{ type: "linear" }}
    >
      {children}
    </motion.main>
  </>
);

export default PageLayout;
