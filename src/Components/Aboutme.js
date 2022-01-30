import me from "./assets/me.jpg";
import { motion } from "framer-motion";

function AboutMe(props) {
  function transitionLength(i) {
    return {
      transition: {
        duration: i,
      },
    };
  }
  const exitEnterImageAnimations = {
    initial: {
      scale: 0,
      opacity: 0,
    },
    enter: {
      scale: 1,
      opacity: 1,
      ...transitionLength(1),
    },
    exit: {
      scale: 0,
      opacity: 0,
      ...transitionLength(1),
    },
  };
  const exitEnterTextAnimations = {
    initial: {
      y: 600,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      ...transitionLength(1.5),
    },
    exit: {
      y: 600,
      opacity: 0,
      ...transitionLength(1.5),
    },
  };
  return (
    <motion.div className="aboutMe">
      <motion.img
        initial="initial"
        key="me"
        src={me}
        alt="me"
        animate="enter"
        variants={exitEnterImageAnimations}
        exit="exit"
      />
      <motion.div
        initial="initial"
        key="aboutme"
        animate="enter"
        variants={exitEnterTextAnimations}
        exit="exit"
      >
        <h1>Hi! I am Sanskar Gauchan!</h1>
        <p>
          A current UTS Student who loves coding and am specializing in Data
          Science and Software Development.
          <br /> <br />I dabble a little bit in UX/Interaction Design, too,
          since it is a vital part of software development.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
