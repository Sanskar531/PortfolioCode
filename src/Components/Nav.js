import inlogo from "./assets/ln.png";
import ghlogo from "./assets/gh.png";
import me from "./assets/me.jpg";
import { motion } from "framer-motion";

function Links(props) {
  return (
    <motion.a
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1, y: -10, color: "#9575CD" }}
      onClick={(e) => props.handler(e)}
    >
      {props.text}
    </motion.a>
  );
}

function Nav(props) {
  return (
    <nav className="Nav">
      <motion.div whileHover={{ y: -10 }}>
        <motion.h1>Sanskar Gauchan</motion.h1>
      </motion.div>
      <Links text="Home" handler={props.homeHandler} />
      <Links text="Projects" handler={props.projectsHandler} />
      <Links text="Blog" handler={props.blogHandler} />
      <Links text="FindMe" handler={props.findHandler} />
      <div className="Links">
        <a href="https://www.linkedin.com/in/sanskargauchan/">
          <img src={inlogo} alt="linkedinLogo" />
        </a>
        <a href="https://github.com/Sanskar531">
          <img src={ghlogo} alt="ghlogo" />
        </a>
        {!props.home ? <img src={me} id="me" /> : null}
      </div>
    </nav>
  );
}

export default Nav;
