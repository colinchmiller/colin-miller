import profilePic from "../../assets/images/Colin Divya Watson.jpg";
import s from "./style.module.css";

export function Home(props) {
  return (
    <div className="container">
      <div class="row mt-5">
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
          <div className="row">
            <h2>Skills</h2>
          </div>
          <div className={s.bubble_cloud}>
            <div className={s.cloud_content}>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Node.js</li>
                <li>Firebase</li>
                <li>WordPress</li>
                <li>AEM</li>
                <li>Shopify</li>
                <li>Sitecore</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
