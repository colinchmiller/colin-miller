import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className={s.header}>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
            <li>
              <Link to="/about">About Me</Link>
            </li>
            <li>
              <Link to="/experience">My Experience</Link>
            </li>
          </li>
        </ul>
      </nav>
    </header>
  );
}
