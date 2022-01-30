import { motion } from "framer-motion";

function BackDrop(props) {
  return (
    <motion.div
      className="backdrop"
      onClick={(e) => {
        e.preventDefault();
        props.exitHandler();
      }}
    >
      {props.children}
    </motion.div>
  );
}
export default BackDrop;
