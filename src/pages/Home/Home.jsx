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
          <div className="row">
            <h2>Skills</h2>
          </div>
          <div className={s.bubble_cloud}>
            <ul className={s.cloud_content}>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>HTML</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>CSS</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>JavaScript</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>jQuery</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>React.js</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>Bootstrap</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>Node.js</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>Firebase</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>WordPress</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>AEM</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>Shopify</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>Sitecote</p>
              </li>
              <li className={`${s.bubble} ${s.w_1}`}>
                <p className={s.bubble_text}>git</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
