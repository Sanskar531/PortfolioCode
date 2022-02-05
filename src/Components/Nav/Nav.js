import inlogo from "../assets/ln.png";
import ghlogo from "../assets/gh.png";
import me from "../assets/me.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackDrop from "../BackDrop";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import AnimatedLinks from "./AnimatedLinks";

function Nav(props) {
  const navLinks = [
    {
      name: "Home",
      redirect: "/",
    },
    { name: "Projects", redirect: "/projects" },
    { name: "Blog", redirect: "/blog" },
  ]; //make get from server instead;
  const navigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const socialLinks = [
    {
      name: "Linkedin",
      src: inlogo,
      href: "https://www.linkedin.com/in/sanskargauchan/",
    },
    { name: "github", src: ghlogo, href: "https://github.com/Sanskar531" },
  ]; //make get from server instead;
  return (
    <>
      {!props.currDimension ? (
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
            <AnimatedLinks text="Contact Me" handler={props.findHandler} />
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
              setNavOpen(!navOpen);
            }}
            whileHover={{
              scale: 1.2,
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
