import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Header(props) {
  return (
    <header className={s.header}>
      <nav className={`navbar navbar-expand-sm bg-primary-subtle`}>
        <div className="container-fluid">
          <Link className={`navbar-brand`} to="/intro">
            Colin Miller
          </Link>
          <ul className={`navbar-nav me-auto`}>
            <li className={`nav-item`}>
              <Link className={`nav-link`} to="/experience">
                Experience
              </Link>
            </li>
            <li className={`nav-item`}>
              <Link className={`nav-link`} to="/about">
                About me
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
