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
        <div className={s.bubble_cloud}>
          <div className={s.bubble_content}>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>HTML</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>CSS</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>JavaScript</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>HTML</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>CSS</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>JavaScript</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>jQuery</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>React.js</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Bootstrap</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Node.js</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Firebase</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>WordPress</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>AEM</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Shopify</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Sitecote</p>
            </div>
            <div className={`${s.bubble} ${s.w_1}`}>
              <p className={s.bubble_text}>Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
