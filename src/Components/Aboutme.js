import me from "./assets/me.jpg";
import { motion, AnimatePresence } from "framer-motion";

function AboutMe(props) {
  const exitEnterImageAnimations = {
    enter: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
      },
    },
    exit: {
      scale: 0.12,
      y: -520,
      x: 855,
      transition: {
        duration: 1.5,
      },
    },
  };
  const exitEnterTextAnimations = {
    enter: {},
  };
  return (
    <div className="aboutMe">
      <AnimatePresence exitBeforeEnter={true}>
        <motion.img
          src={me}
          alt="me"
          animate="enter"
          variants={exitEnterImageAnimations}
          exit="exit"
        />
        <motion.div
          animate={{ y: [600, 0], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
        >
          <h1>Hi! I am Sanskar Gauchan!</h1>
          <p>
            A current UTS Student who loves coding and specialized in Data
            Science and Software Development.
            <br /> <br />I dabble a little bit in UX/Interaction Design, too,
            since it is a vital part of software development.
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default AboutMe;
