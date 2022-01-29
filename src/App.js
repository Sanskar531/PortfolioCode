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

  function findHandler(e) {
    e.preventDefault();
    setFindMe(!findMe);
  }
  console.log(location.pathname);

  return (
    <div className="App">
      <AnimatePresence>
        {findMe && (
          <BackDrop
            children={<FindMe exitHandler={findHandler} />}
            exitHandler={findHandler}
          />
        )}
      </AnimatePresence>
      <Nav findHandler={findHandler} location={location} />
      <Routes>
        <Route path="/" element={<AboutMe />} location={location} />
        <Route path="/projects" element={<Project />} location={location} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
