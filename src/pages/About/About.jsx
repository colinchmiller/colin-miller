import s from "./style.module.css";
import dogPic from "../../assets/images/watson.jpg";
import plantsPic from "../../assets/images/colin-plants.jpg";
import writingPic from "../../assets/images/typewriter.jpg";

export function About(props) {
  return (
    <div className="container">
      <div className="row">
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
      <div className="row mb-3">
        <h1>My Interests</h1>
        <p>
          I'm not just a web developer. I've got other interests as well. Some
          of these include:
        </p>
      </div>

      <div className="row">
        <img
          src={plantsPic}
          className={`.img-fluid max-width: 100% ${s.img_top}`}
          alt="Colin with plants"
        />
        <div className="card ps-0 flex-row mb-3">
          <img
            src={plantsPic}
            className={`card-img-left example-card-img-responsive ${s.img_left}`}
            alt="Colin with plants"
          />
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Plants</h4>
            <p className="card-text">
              I love to grow plants, both indoors and outdoors. Sometimes they
              even combine. Every year I grow at least hot peppers, cilantro,
              and basil. Indoors I like to have at least one plant in every
              room. I had to start scaling the number back once I got to over 40
              plants.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <img
          src={dogPic}
          className={`.img-fluid max-width: 100% ${s.img_top}`}
          alt="Watson the dog"
        />
        <div className="card pe-0 flex-row mb-3">
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Dogs</h4>
            <p className="card-text">
              I love dogs. I have a young dog named Watson. He's a rescue from
              Kentucky. He's a dog of comfort, that enjoys sleeping in and
              finding the softest spots to get comfortable. He's very social
              with dogs but not so much with people. I like the fact that dogs
              have as many different personalities as people.
            </p>
          </div>
          <img
            src={dogPic}
            className={`card-img-right example-card-img-responsive ${s.img_right}`}
            alt="Watson the dog"
          />
        </div>
      </div>
      <div className="row">
        <img
          src={writingPic}
          className={`.img-fluid max-width: 100% ${s.img_top}`}
          alt="Typewriter"
        />
        <div className="card ps-0 flex-row mb-3">
          <img
            src={writingPic}
            className={`card-img-left example-card-img-responsive ${s.img_left}`}
            alt="Typewriter"
          />
          <div className="card-body">
            <h4 className="card-title h5 h4-sm">Writing</h4>
            <p className="card-text">
              I've liked writing since I was a kid coming up with my own short
              stories based on dreams that I've had. Though I had a lull through
              my college years, I've gotten back into it since then. I'm
              currently working on a collection of short stories and a
              children's book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
