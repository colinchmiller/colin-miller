import s from "./style.module.css";
import plantIcon from "../../assets/images/plant.svg";
import petIcon from "../../assets/images/pet.svg";
import bookIcon from "../../assets/images/book.svg";

export function About(props) {
  return (
    <div className="container">
      <div className={`${s.fade_in} ${s.about_title} `}>
        <h1>About Me</h1>
      </div>
      <div className="row pt-5">
        <div className="col-lg-4 align-self-center">
          <div className={`${s.fade_in} ${s.delay_2}  p-5`}>
            {/* <h2>Skills</h2> */}
            <p>
              I'm always looking to build new skills and practice existing ones.
              To the right is a word cloud of the skills I've been developing.
              The size of each is related to how much I've worked in it.
            </p>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="p5">
            <div className={`${s.fade_in} ${s.word_cloud} ${s.delay_4}`}>
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

      <div className={`${s.fade_in} ${s.interests_title} ${s.delay_6}`}>
        <h2>My Interests</h2>
        <p>
          I'm not just a web developer. I've got other interests as well. Some
          of these include:
        </p>
      </div>

      <div className="row ps-5 pb-3">
        <div className={` ${s.interest_box} ${s.fade_in} ${s.delay_8}`}>
          <div className={s.interest_icon}>
            <img src={plantIcon} alt="plant icon" />
          </div>
          <div className={s.interest_text}>
            <h4>Plants</h4>
            <p>
              I love to grow plants, both indoors and outdoors. Sometimes they
              even combine. Every year I grow at least hot peppers, cilantro,
              and basil. Indoors I like to have at least one plant in every
              room. I had to start scaling the number back once I got to over 40
              plants.
            </p>
          </div>
        </div>
      </div>
      <div className="row ps-5 pb-3">
        <div className={` ${s.interest_box} ${s.fade_in} ${s.delay_10}`}>
          <div className={s.interest_icon}>
            <img src={petIcon} alt="plant icon" />
          </div>
          <div className={s.interest_text}>
            <h4>Dogs</h4>
            <p>
              I love dogs. I have a young dog named Watson. He's a rescue from
              Kentucky. He's a dog of comfort, that enjoys sleeping in and
              finding the softest spots to get comfortable. He's very social
              with dogs but not so much with people. I like the fact that dogs
              have as many different personalities as people.
            </p>
          </div>
        </div>
      </div>
      <div className="row ps-5 pb-3">
        <div className={` ${s.interest_box} ${s.fade_in} ${s.delay_12}`}>
          <div className={s.interest_icon}>
            <img src={bookIcon} alt="plant icon" />
          </div>
          <div className={s.interest_text}>
            <h4>Writing</h4>
            <p>
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
