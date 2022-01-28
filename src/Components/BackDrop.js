import { AnimatePresence, motion } from "framer-motion";

function BackDrop(props) {
  return (
    <motion.div
      className="backdrop"
      animate={{ scale: [0, 1] }}
      transition={{ duration: 1 }}
      onClick={(e) => props.exitHandler(e)}
    >
      {props.children}
    </motion.div>
  );
}
export default BackDrop;
