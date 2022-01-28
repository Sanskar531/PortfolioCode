import me from "./assets/me.jpg";
import { motion } from "framer-motion";

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
      scale: [1, 0],
      opacity: [1, 0],
      transition: {
        duration: 1,
      },
    },
  };
  const exitEnterTextAnimations = {
    enter: {
      y: [600, 0],
      opacity: [0, 1],
      transition: {
        duration: 1.5,
      },
    },
    exit: {
      y: [0, 600],
      opacity: [1, 0],
      transition: {
        duration: 1.5,
      },
    },
  };
  return (
    <motion.div className="aboutMe">
      <motion.img
        key="me"
        src={me}
        alt="me"
        animate="enter"
        variants={exitEnterImageAnimations}
        exit="exit"
      />
      <motion.div
        key="aboutme"
        animate="enter"
        variants={exitEnterTextAnimations}
        exit="exit"
      >
        <h1>Hi! I am Sanskar Gauchan!</h1>
        <p>
          A current UTS Student who loves coding and specialized in Data Science
          and Software Development.
          <br /> <br />I dabble a little bit in UX/Interaction Design, too,
          since it is a vital part of software development.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutMe;
