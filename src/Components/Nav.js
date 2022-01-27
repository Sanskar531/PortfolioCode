import inlogo from "./assets/ln.png";
import ghlogo from "./assets/gh.png";
import me from "./assets/me.jpg";

function Nav(props) {
  return (
    <nav className="Nav">
      <div>
        <h1>S</h1>
        <h1>a</h1>
        <h1>n</h1>
        <h1>s</h1>
        <h1>k</h1>
        <h1>a</h1>
        <h1>r</h1>
        <h1>&nbsp;</h1>
        <h1>G</h1>
        <h1>a</h1>
        <h1>u</h1>
        <h1>c</h1>
        <h1>h</h1>
        <h1>a</h1>
        <h1>n</h1>
      </div>
      <a onClick={(e) => props.homeHandler(e)}>Home</a>
      <a onClick={(e) => props.projectHandler(e)}>Projects</a>
      <a>Blog</a>
      <a>FindMe</a>
      <div className="Links">
        <a href="https://www.linkedin.com/in/sanskargauchan/">
          <img src={inlogo} alt="linkedinLogo" />
        </a>
        <a href="https://github.com/Sanskar531">
          <img src={ghlogo} alt="ghlogo" />
        </a>
        {!props.home ? <img src={me} id="me" /> : null}
      </div>
    </nav>
  );
}

export default Nav;
