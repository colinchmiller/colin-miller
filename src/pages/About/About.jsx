import s from "./style.module.css";
import dogPic from "../../assets/images/cute-watson.jpg";
import plantsPic from "../../assets/images/colin-plants.jpg";
import writingPic from "../../assets/images/typewriter.jpg";

export function About(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1>My Interests</h1>
        <p>
          I'm not just a web developer. I've got other interests as well. Some
          of these include:
        </p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img className={s.img} src={plantsPic} alt="Colin with plants"></img>
        </div>
        <div className="col-md-8 card p-5 mb-5">
          <h3>Plants</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8 card p-5 mb-5">
          <h3>Dogs</h3>
        </div>
        <div className="col-md-4">
          <img className={s.img} src={dogPic} alt="watson the dog"></img>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <img className={s.img} src={writingPic} alt="typewriter"></img>
        </div>
        <div className="col-md-8 card p-5 mb-5">
          <h3>Writing</h3>
        </div>
      </div>
    </div>
  );
}
