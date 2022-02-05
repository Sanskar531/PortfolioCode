import { motion, AnimatePresence } from "framer-motion";
import BackDrop from "../Modal/BackDrop";
import { useState } from "react";

function MobileProjects(props) {
  const [showImage, setShowImage] = useState(false);
  const animation = props.projectAnimations;
  return (
    <motion.div
      className="mobileProj"
      variants={animation}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <motion.div
        whileHover={{ scale: 1.05, color: "#9575CD" }}
        whileTap={{ scale: 0.95 }}
      >
        <a href={props.currRenderedProj.link}>
          <h1>{props.currRenderedProj.name}</h1>
        </a>
      </motion.div>
      <div>
        {props.currRenderedProj.desc}
        <div>
          <motion.button
            initial={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ y: 2, scale: 0.9 }}
            onClick={(e) => setShowImage(true)}
          >
            View Example
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {showImage ? (
          <BackDrop
            children={
              <img
                id="smallProj"
                src={props.currRenderedProj.img}
                alt={props.currRenderedProj.name}
              />
            }
            exitHandler={() => setShowImage(false)}
          />
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}

export default MobileProjects;
