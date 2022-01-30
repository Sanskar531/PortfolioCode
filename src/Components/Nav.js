import inlogo from "./assets/ln.png";
import ghlogo from "./assets/gh.png";
import me from "./assets/me.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useNavShow from "./hooks/useNavShow";
import BackDrop from "./BackDrop";

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
function NavMenu(props) {
  const miniNavAnimations = {
    initial: {
      opacity: 0,
      y: 5,
    },
    visible: (ind) => ({
      opacity: 1,
      y: 0,
      transition: { delay: ind / 10 },
    }),
    exit: (ind) => ({
      opacity: 0,
      y: 5,
      transition: { delay: ind / 15 },
    }),
  };
  function handler(e, redirect) {
    e.stopPropagation();
    props.exitHandler();
    props.navigate(redirect);
  }
  return (
    <motion.div className="navMenu">
      {props.navLinks.map((item, ind) => {
        return (
          <motion.a
            custom={ind}
            onClick={(e) => handler(e, item.redirect)}
            variants={miniNavAnimations}
            initial="initial"
            animate="visible"
            exit="exit"
            key={ind}
          >
            {item.name}
          </motion.a>
        );
      })}
    </motion.div>
  );
}

function Nav(props) {
  const navLinks = [
    {
      name: "Home",
      redirect: "/",
    },
    { name: "Projects", redirect: "/projects" },
    { name: "Blog", redirect: "/blog" },
  ];
  const navigate = useNavigate();
  const currDimension = useNavShow();
  const [navOpen, setNavOpen] = useState(false);
  console.log(currDimension);
  const socialLinks = [
    {
      name: "Linkedin",
      src: inlogo,
      href: "https://www.linkedin.com/in/sanskargauchan/",
    },
    { name: "github", src: ghlogo, href: "https://github.com/Sanskar531" },
  ];
  return (
    <>
      {!currDimension ? (
        <motion.nav className="Nav">
          <motion.div whileHover={{ y: -10 }}>
            <motion.h1>Sanskar Gauchan</motion.h1>
          </motion.div>
          <motion.div className="NavBar">
            {navLinks.map((item, ind) => {
              return (
                <AnimatedLinks
                  key={ind}
                  text={item.name}
                  handler={() => navigate(item.redirect)}
                />
              );
            })}
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
        </motion.nav>
      ) : (
        <motion.nav className="navMenuContainer">
          <motion.button
            onClick={(e) => {
              console.log("new");
              setNavOpen(!navOpen);
            }}
            initial={{ borderRadius: "50%" }}
            whileHover={{
              scale: 1.2,
              backgroundColor: "white",
            }}
            whileTap={{ scale: 0.8, backgroundColor: "#9575CD" }}
          >
            <span className="material-icons menuButton">menu</span>
          </motion.button>
          <div>
            <h1>Sanskar Gauchan</h1>
          </div>
          <AnimatePresence>
            {navOpen && (
              <BackDrop
                key={navOpen}
                children={
                  <NavMenu
                    navigate={navigate}
                    exitHandler={() => setNavOpen(!navOpen)}
                    navLinks={navLinks}
                  />
                }
                exitHandler={() => setNavOpen(!navOpen)}
              />
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </>
  );
}

export default Nav;
