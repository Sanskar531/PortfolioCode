import { motion } from "framer-motion";

function BackDrop(props) {
  return (
    <motion.div
      className="backdrop"
      animate={{ scale: [0, 1] }}
      transition={{ duration: 1 }}
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
