import s from "./style.module.css";

export function Home(props) {
  return (
    <div className={`container ${s.background}`}>
      <div className="row mt-2">
        <div className={`${s.fade_in} ${s.profile_img}`}></div>

        <div className="row mt-3">
          <div className="col-lg-4 align-self-center">
            <div className="p-5">
              <h2>Skills</h2>
              <p>
                I'm always looking to build new skills and practice existing
                ones. To the right is a word cloud of the skills I've been
                developing. The size of each is related to how much I've worked
                in each.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="p5">
              <div className={` ${s.word_cloud} ${s.fade_in}`}>
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
                  <h4 id={s.sitecore} data-weight="2">
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
                  <h4 id={s.shopify} data-weight="2">
                    Shopify
                  </h4>
                  <h4 id={s.target} data-weight="3">
                    Adobe Target
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
