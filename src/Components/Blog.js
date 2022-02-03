import { motion } from "framer-motion";
export function Blog(props) {
  const variants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [0, 1, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
      },
    },
    exit: {
      opacity: 0,
    },
  };
  return (
    <motion.div
      className="blog"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1>Coming Soon...</h1>
    </motion.div>
  );
}
