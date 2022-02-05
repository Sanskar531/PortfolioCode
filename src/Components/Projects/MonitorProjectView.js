import { motion } from "framer-motion";
function MonitorProjectView(props) {
  const currRenderedProj = props.currRenderedProj;
  return (
    <motion.div
      key={props.ind}
      variants={props.projectAnimations}
      initial="hidden"
      animate="animate"
      exit="exit"
      className="MonitorView"
    >
      <img src={currRenderedProj.img} alt={currRenderedProj.name} />
      <div>
        <motion.div whileHover={{ color: "#9575CD", y: -10 }}>
          <h1>
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={currRenderedProj.link}
            >
              {currRenderedProj.name}
            </a>
          </h1>
        </motion.div>
        <p>{currRenderedProj.desc}</p>
      </div>
    </motion.div>
  );
}

export default MonitorProjectView;
