import inlogo from "./assets/ln.png";
import ghlogo from "./assets/gh.png";
import me from "./assets/me.jpg";
import { AnimatePresence, motion } from "framer-motion";

function Links(props) {
  return (
    <motion.a
      whileTap={{ scale: 0.9 }}
      whileHover={{
        scale: 1.1,
        y: -10,
        color: "#9575CD",
      }}
      onClick={
        props.handler ? (e) => props.handler(e) : (e) => e.preventDefault()
      }
      href={props.href && props.href}
    >
      {props.text ? props.text : props.children}
    </motion.a>
  );
}

function Nav(props) {
  return (
    <nav className="Nav">
      <motion.div whileHover={{ y: -10 }}>
        <motion.h1>Sanskar Gauchan</motion.h1>
      </motion.div>
      <motion.div className="NavBar">
        <Links text="Home" href="/" />
        <Links text="Projects" href="/Projects" />
        <Links text="Blog" href="/Blog" />
        <Links text="FindMe" handler={props.findHandler} />
        <div className="Links">
          <AnimatePresence>
            <motion.div>
              <Links
                href="https://www.linkedin.com/in/sanskargauchan/"
                children={<img src={inlogo} alt="linkedinLogo" />}
              />
              <Links
                href="https://github.com/Sanskar531"
                children={<img src={ghlogo} alt="ghlogo" />}
              ></Links>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            {!props.home && (
              <motion.img
                src={me}
                className="me"
                animate={{ scale: [0, 1] }}
                exit={{ scale: [1, 0] }}
              ></motion.img>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </nav>
  );
}

export default Nav;
