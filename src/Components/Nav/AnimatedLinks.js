import { motion } from "framer-motion";

export default function AnimatedLinks(props) {
  return (
    <motion.a
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
        y: -10,
        color: "#9575CD",
      }}
      onClick={
        props.handler &&
        ((e) => {
          e.preventDefault();
          props.handler();
        })
      }
      target="_blank"
      rel="noreferrer noopener"
      href={props.href && props.href}
    >
      {props.text ? props.text : props.children}
    </motion.a>
  );
}
