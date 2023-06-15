import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className={s.header}>
      <nav className={`navbar navbar-expand-lg`}>
        <ul className={`navbar-nav me-auto mb-2 mb-lg-0`}>
          <li className={`nav-item`}>
            <Link className={`nav-link`} to="/">
              Home
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link className={`nav-link`} to="/about">
              About
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link className={`nav-link`} to="/experience">
              Experience
            </Link>
          </li>
          <li className={`nav-item`}>
            <Link className={`nav-link`} to="/skills">
              Skills
            </Link>
          </li>
        </ul>
      </nav>
      {/* <nav className={`navbar navbar-expand-lg ${s.nav}`}>
        <ul className={`navbar-nav`}>
          <li className={`nav-item ${s.nav_item}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`nav-item ${s.nav_item}`}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={`nav-item ${s.nav_item}`}>
            <Link to="/experience">My Experience</Link>
          </li>
          <li className={`nav-item ${s.nav_item}`}>
            <Link to="/skills">My Skills</Link>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}
