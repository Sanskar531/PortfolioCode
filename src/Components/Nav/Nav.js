import inlogo from "../assets/ln.png";
import ghlogo from "../assets/gh.png";
import me from "../assets/me.jpg";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackDrop from "../Modal/BackDrop";
import NavMenu from "./NavMenu";
import SocialLinks from "./SocialLinks";
import AnimatedLinks from "./AnimatedLinks";

function MonitorNav(props) {
  return (
    <motion.nav className="Nav">
      <motion.div whileHover={{ y: -10 }}>
        <motion.h1>Sanskar Gauchan</motion.h1>
      </motion.div>
      <motion.div className="NavBar">
        {props.navLinks.map((item, ind) => {
          return (
            <AnimatedLinks
              key={ind}
              text={item.name}
              handler={() => props.navigate(item.redirect)}
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
          <SocialLinks socialLinks={props.socialLinks} />
        </div>
      </motion.div>
    </motion.nav>
  );
}

function MobileNav(props) {
  return (
    <motion.nav className="navMenuContainer">
      <motion.button
        onClick={(e) => {
          props.setNavOpen(!props.navOpen);
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
        {props.navOpen && (
          <BackDrop
            key={props.navOpen}
            children={
              <NavMenu
                navigate={props.navigate}
                exitHandler={() => props.setNavOpen(!props.navOpen)}
                navLinks={props.navLinks}
                findHandler={props.findHandler}
              />
            }
            exitHandler={() => props.setNavOpen(!props.navOpen)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
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
        <MonitorNav
          navLinks={navLinks}
          location={props.location}
          navigate={navigate}
          findHandler={props.findHandler}
          socialLinks={socialLinks}
        />
      ) : (
        <MobileNav
          navOpen={navOpen}
          setNavOpen={setNavOpen}
          navigate={navigate}
          findHandler={props.findHandler}
          navLinks={navLinks}
        />
      )}
    </>
  );
}

export default Nav;
