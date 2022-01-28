import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Project from "./Components/Projects";
import FindMe from "./Components/FindMe";
import BackDrop from "./Components/BackDrop";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [project, setProject] = useState(false);
  const [home, setHome] = useState(true);
  const [findMe, setFindMe] = useState(false);
  function projectHandler(e) {
    e.preventDefault();
    setHome(false);
    setProject(true);
  }
  function findHandler(e) {
    e.preventDefault();
    setFindMe(!findMe);
  }
  function homeHandler(e) {
    e.preventDefault();
    setProject(false);
    setHome(true);
  }

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
      <Nav
        home={home}
        projectHandler={projectHandler}
        homeHandler={homeHandler}
        findHandler={findHandler}
      />
      <main>
        <AnimatePresence>
          {home ? <AboutMe home={home} /> : <Project />}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default App;
