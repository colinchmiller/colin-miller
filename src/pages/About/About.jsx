import s from "./style.module.css";
import dogPic from "../../assets/images/watson.jpg";
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
        <div className="card ps-0 flex-row" style={{ width: 500 }}>
          <img
            src={plantsPic}
            className={`card-img-left example-card-img-responsive ${s.img_left}`}
            alt="Colin with plants"
          />
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Plants</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card pe-0 flex-row" style={{ width: 500 }}>
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Dogs</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <img
            src={dogPic}
            className={`card-img-right example-card-img-responsive ${s.img_right}`}
            alt="Colin with plants"
          />
        </div>
      </div>
      <div className="row">
        <div className="card ps-0 flex-row" style={{ width: 500 }}>
          <img
            src={writingPic}
            className={`card-img-left example-card-img-responsive ${s.img_left}`}
            alt="Colin with plants"
          />
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Writing</h4>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
