import me from "./assets/me.jpg";

function AboutMe(props) {
  return (
    <div className="aboutMe">
      <img src={me} alt="me" />
      <div>
        <h1>Hi! I am Sanskar Gauchan!</h1>
        <p>
          A current UTS Student who loves coding and specialized in Data Science
          and Software Development.
          <br /> <br />I dabble a little bit in UX/Interaction Design, too,
          since it is a vital part of software development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
