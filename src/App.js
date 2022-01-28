import { useState } from "react";
import "./App.css";
import AboutMe from "./Components/Aboutme";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Project from "./Components/Projects";

function App() {
  const [project, setProject] = useState(false);
  const [home, setHome] = useState(true);
  function projectHandler(e) {
    e.preventDefault();
    setHome(false);
    setProject(true);
  }

  function homeHandler(e) {
    e.preventDefault();
    setProject(false);
    setHome(true);
  }

  return (
    <div className="App">
      <Nav
        home={home}
        projectHandler={projectHandler}
        homeHandler={homeHandler}
      />
      {project ? <Project /> : <AboutMe home={home} />}
      <Footer />
    </div>
  );
}

export default App;
