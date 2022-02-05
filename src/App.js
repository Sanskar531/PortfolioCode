import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/Home/Aboutme";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav/Nav";
import Project from "./Components/Projects/Projects";
import FindMe from "./Components/Modal/FindMe";
import BackDrop from "./Components/Modal/BackDrop";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import useNavShow from "./Components/hooks/useNavShow";
import { Blog } from "./Components/Blog";

function App() {
  const [findMe, setFindMe] = useState(false);
  const location = useLocation();
  const currDimension = useNavShow();

  function findHandler() {
    setFindMe(!findMe);
  }

  return (
    <motion.div className="App">
      <AnimatePresence>
        {findMe && (
          <BackDrop
            children={<FindMe exitHandler={findHandler} />}
            exitHandler={findHandler}
            key={findMe}
          />
        )}
      </AnimatePresence>
      <Nav
        currDimension={currDimension}
        findHandler={findHandler}
        location={location}
      />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutMe />} />
          <Route
            path="/projects"
            element={<Project currDimension={currDimension} />}
          />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default App;
