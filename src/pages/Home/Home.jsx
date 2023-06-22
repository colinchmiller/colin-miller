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

            <div className="row mt-5">
              <h2>Skills</h2>

              <div className={s.word_cloud}>
                <div className={s.cloud_content}>
                  <h4 id={s.bootstrap} data-weight="5">
                    Bootstrap
                  </h4>
                  <h4 id={s.javascript} data-weight="8">
                    JavaScript
                  </h4>
                  <h4 id={s.react} data-weight="5">
                    React
                  </h4>
                  <h4 id={s.css} data-weight="9">
                    CSS
                  </h4>
                  <h4 id={s.node} data-weight="3">
                    Node
                  </h4>
                  <h4 id={s.aem} data-weight="5">
                    AEM
                  </h4>
                  <h4 id={s.jquery} data-weight="7">
                    jQuery
                  </h4>
                  <h4 id={s.wordpress} data-weight="3">
                    WordPress
                  </h4>
                  <h4 id={s.sitecore} data-weight="1">
                    Sitecore
                  </h4>
                  <h4 id={s.git} data-weight="5">
                    Git
                  </h4>
                  <h4 id={s.firebase} data-weight="3">
                    Firebase
                  </h4>
                  <h4 id={s.html} data-weight="9">
                    HTML
                  </h4>
                  <h4 id={s.shopify} data-weight="1">
                    Shopify
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
