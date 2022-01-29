import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Project from "./Components/Projects";
import FindMe from "./Components/FindMe";
import BackDrop from "./Components/BackDrop";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [findMe, setFindMe] = useState(false);
  const location = useLocation();

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
      <Nav findHandler={findHandler} location={location} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route path="/" element={<AboutMe />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </motion.div>
  );
}

export default App;
