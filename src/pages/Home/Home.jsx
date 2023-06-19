import profilePic from "../../assets/images/Colin Divya Watson.jpg";
import s from "./style.module.css";

export function Home(props) {
  return (
    <div className="container">
      <div class="row">
        <div className="col-md-6">
          <img className={`img-fluid ${s.profile_img}`} src={profilePic}></img>
        </div>

        <div className="col-md-6">
          <div className="card">
            <h2>Hello!</h2>
            <p>My name is Colin Miller and I'm a web developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
