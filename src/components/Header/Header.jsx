import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <ul>
          <li className={s.nav_item}>
            <Link to="/">Home</Link>
          </li>
          <li className={s.nav_item}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={s.nav_item}>
            <Link to="/experience">My Experience</Link>
          </li>
          <li className={s.nav_item}>
            <Link to="/skills">My Skills</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
