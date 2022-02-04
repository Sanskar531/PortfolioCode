import { motion } from "framer-motion";
import constants from "../constants.js";

function FindMe(props) {
  function handler(e) {
    e.preventDefault();
    const body = {
      name: e.target.Name.value,
      message: e.target.Description.value,
      email: e.target.Email.value,
    };
    const data = {
      service_id: constants.service_id,
      template_id: constants.template_id,
      user_id: constants.user_id,
      template_params: body,
    };
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        props.exitHandler();
        alert("Message has been sent!");
      })
      .catch((err) => console.log(err));
  }
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
        <h4>Send me a Message</h4>
        <button
          onClick={(e) => {
            e.preventDefault();
            props.exitHandler();
          }}
        >
          <motion.span
            initial={false}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="material-icons closeButton"
          >
            close
          </motion.span>
        </button>
      </div>
      <form onSubmit={(e) => handler(e)}>
        <h4>Name</h4>
        <input type="text" name="Name"></input>
        <h4>Email</h4>
        <input type="email" name="Email"></input>
        <h4>Please mention the intent for contacting.</h4>
        <textarea name="Description"></textarea>
        <div>
          <motion.button
            initial={false}
            className="submitButton"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            type="submit"
          >
            Send
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
}

export default FindMe;
