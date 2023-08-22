import s from "./style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isActive, setIsActive] = useState(false);

  function toggleHeader() {
    setIsActive(!isActive);
  }
  return (
    <header
      onClick={toggleHeader}
      className={`${s.header} ${isActive ? s.active : ""}`}
    >
      <div className={s.button}>
        <div className={s.one}></div>
        <div className={s.two}></div>
        <div className={s.three}></div>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
      </ul>
    </header>
  );
}
