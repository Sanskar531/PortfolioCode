import { motion } from "framer-motion";

function FindMe(props) {
  const modalAnimations = {
    enter: {
      opacity: [0, 1],
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: [1, 0],
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.div
      key="model"
      className="modal"
      variants={modalAnimations}
      animate="enter"
      exit="exit"
    >
      <div className="closeWrapper">
        <motion.button
          onClick={(e) => props.exitHandler(e)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          X
        </motion.button>
      </div>
      <div>This the model</div>{" "}
    </motion.div>
  );
}

export default FindMe;
