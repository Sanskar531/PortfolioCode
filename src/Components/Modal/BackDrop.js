import { motion } from "framer-motion";

function BackDrop(props) {
  return (
    <motion.div
      className="backdrop"
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
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
