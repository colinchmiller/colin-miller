import { Title } from "../../components/Title/Title";
import plantIcon from "../../assets/images/plant.svg";
import petIcon from "../../assets/images/pet.svg";
import bookIcon from "../../assets/images/book.svg";
import s from "./style.module.css";

export function About(props) {
  return (
    <div className="container">
      <Title>About Me</Title>

      <div className="row pt-5">
        <div className="col-lg-4 align-self-center">
          <div className={`${s.fade_in} ${s.delay_2}  sm-p-2 md-p-5`}>
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
            <ul className={` ${s.buttons} ${s.fade_in} ${s.delay_4}`}>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>Node</li>
              <li>NPM</li>
              <li>jQuery</li>
              <li>Reactjs</li>
              <li>Firebase</li>
              <li>ChakraUI</li>
              <li>AEM</li>
              <li>Adobe Target</li>
              <li>Git</li>
              <li>WordPress</li>
              <li>Vercel</li>
            </ul>
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

      <div className="row sm-ps-5 pb-3">
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
      <div className="row sm-ps-5 pb-3">
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
      <div className="row sm-ps-5 pb-3">
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
