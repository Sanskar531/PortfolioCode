import { motion } from "framer-motion";

function FindMe(props) {
  const modalAnimations = {
    initial: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
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
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <h4>You can find me on:</h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.exitHandler();
          }}
        >
          X
        </button>
      </div>
      <form>
        <h4>Name</h4>
        <input type="text" name="Name"></input>
        <h4>Email</h4>
        <input type="email" name="E-mail"></input>
        <h4>Please mention the intent for contacting.</h4>
        <textarea name="Description"></textarea>
      </form>
    </motion.div>
  );
}

export default FindMe;
