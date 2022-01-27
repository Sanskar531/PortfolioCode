import me from "./assets/me.jpg";
import { motion } from "framer-motion";

function AboutMe(props) {
  return (
    <div className="aboutMe">
      <motion.img
        src={me}
        alt="me"
        animate={{ scale: [0, 1] }}
        transition={{ duration: 1 }}
      />
      <div>
        <h1>Hi! I am Sanskar Gauchan!</h1>
        <p>
          A current UTS Student who loves coding and specialized in Data Science
          and Software Development.
          <br /> <br />I dabble a little bit in UX/Interaction Design, too,
          since it is a vital part of software development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
