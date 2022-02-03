import { motion, useTransform, useMotionValue } from "framer-motion";

export function Trial(props) {
  const variants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 5,
      },
    },
    exit: {
      pathLength: 0,
    },
  };
  return (
    <div>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="800.0000000000001"
        height="600"
      >
        <motion.path
          variants={variants}
          initial="hidden"
          animate="visible"
          fill="transparent"
          stroke="white"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m261.69252,250.55356l133.50002,-116.22038l133.50002,116.22038l-66.75001,0l0,116.77961l-133.50001,0l0,-116.77961l-66.75001,0z"
        />
      </motion.svg>
    </div>
  );
}
