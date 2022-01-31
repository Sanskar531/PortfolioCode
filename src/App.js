import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav/Nav";
import Project from "./Components/Projects";
import FindMe from "./Components/FindMe";
import BackDrop from "./Components/BackDrop";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";
import useNavShow from "./Components/hooks/useNavShow";

function App() {
  const [findMe, setFindMe] = useState(false);
  const location = useLocation();
  const currDimension = useNavShow();

  function findHandler() {
    setFindMe(!findMe);
  }
  console.log(location.pathname);

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
        </Routes>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default App;
