import inlogo from "./assets/ln.png";
import ghlogo from "./assets/gh.png";
import me from "./assets/me.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNavShow from "./hooks/useNavShow";

function AnimatedLinks(props) {
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
      href={props.href && props.href}
    >
      {props.text ? props.text : props.children}
    </motion.a>
  );
}

function SocialLinks(props) {
  return (
    <motion.div>
      {props.socialLinks.map((item, ind) => (
        <AnimatedLinks
          key={ind}
          href={item.href}
          children={<img src={item.src} alt={item.name} />}
        />
      ))}
    </motion.div>
  );
}

function Nav(props) {
  const navigate = useNavigate();
  const currDimension = useNavShow();
  const [navOpen, setNavOpen] = useState(false);
  const socialLinks = [
    {
      name: "Linkedin",
      src: inlogo,
      href: "https://www.linkedin.com/in/sanskargauchan/",
    },
    { name: "github", src: ghlogo, href: "https://github.com/Sanskar531" },
  ];
  return (
    <motion.nav>
      {!currDimension ? (
        <div className="Nav">
          <motion.div whileHover={{ y: -10 }}>
            <motion.h1>Sanskar Gauchan</motion.h1>
          </motion.div>
          <motion.div className="NavBar">
            <AnimatedLinks text="Home" href="/" handler={() => navigate("/")} />
            <AnimatedLinks
              text="Projects"
              href="/Projects"
              handler={() => navigate("/projects")}
            />
            <AnimatedLinks text="Blog" href="/Blog" />
            <AnimatedLinks text="FindMe" handler={props.findHandler} />
            <div className="Links">
              <AnimatePresence>
                {props.location.pathname !== "/" && (
                  <motion.img
                    src={me}
                    className="me"
                    animate={{ scale: [0, 1] }}
                    exit={{ scale: [1, 0] }}
                  ></motion.img>
                )}
              </AnimatePresence>
              <SocialLinks socialLinks={socialLinks} />
            </div>
          </motion.div>
        </div>
      ) : (
        <span class="material-icons">menu</span>
      )}
    </motion.nav>
  );
}

export default Nav;
