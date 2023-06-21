import profilePic from "../../assets/images/Colin Divya Watson.jpg";
import s from "./style.module.css";

export function Home(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <img
            className={`img-fluid ${s.profile_img}`}
            src={profilePic}
            alt="Colin Miller"
          ></img>
        </div>

        <div className="col-md-6">
          <div className="card p-3">
            <h2>Hello!</h2>
            <p>My name is Colin Miller and I'm a web developer.</p>
            <p>More content? Something interactive?</p>
          </div>
        </div>

        <div className="row mt-5">
          <h2>Skills</h2>
        </div>
        <div className={s.word_cloud}>
          <ul>
            <li>
              <a href="#">HTML</a>
            </li>
            <li>
              <a href="#">CSS</a>
            </li>
            <li>
              <a href="#">JavaScript</a>
            </li>
            <li>
              <a href="#">jQuery</a>
            </li>
            <li>
              <a href="#">React.js</a>
            </li>
            <li>
              <a href="#">Bootstrap</a>
            </li>
            <li>
              <a href="#">Node.js</a>
            </li>
            <li>
              <a href="#">AEM</a>
            </li>
            <li>
              <a href="#">WordPress</a>
            </li>
            <li>
              <a href="#">Sitecore</a>
            </li>
            <li>
              <a href="#">Git</a>
            </li>
            <li>
              <a href="#">Firebase</a>
            </li>
            <li>
              <a href="#">Shopify</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
