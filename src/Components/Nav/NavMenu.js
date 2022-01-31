import { motion } from "framer-motion";

export default function NavMenu(props) {
  const miniNavAnimations = {
    initial: {
      opacity: 0,
      y: 5,
    },
    visible: (ind) => ({
      opacity: 1,
      y: 0,
      transition: { delay: ind / 10 },
    }),
    exit: (ind) => ({
      opacity: 0,
      y: 5,
      transition: { delay: ind / 15 },
    }),
  };
  function handler(e, redirect) {
    e.stopPropagation();
    props.exitHandler();
    props.navigate(redirect);
  }
  return (
    <motion.div className="navMenu">
      {props.navLinks.map((item, ind) => {
        return (
          <motion.a
            custom={ind}
            onClick={(e) => handler(e, item.redirect)}
            variants={miniNavAnimations}
            initial="initial"
            animate="visible"
            exit="exit"
            key={ind}
          >
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
}
