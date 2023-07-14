import s from "./style.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [isActive, setIsActive] = useState(true);

  function toggleHeader() {
    setIsActive(!isActive);
  }
  return (
    <header
      onClick={toggleHeader}
      className={`${s.header} ${isActive ? s.active : ""}`}
    >
      <ul>
        <li>
          <Link to="/intro">Intro</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </header>
    // <header className={s.header}>
    //   <nav className={`navbar navbar-expand-sm bg-primary-subtle`}>
    //     <div className="container-fluid">
    //       <Link className={`navbar-brand`} to="/intro">
    //         Colin Miller
    //       </Link>
    //       <ul className={`navbar-nav me-auto`}>
    //         <li className={`nav-item`}>
    //           <Link className={`nav-link`} to="/experience">
    //             Experience
    //           </Link>
    //         </li>
    //         <li className={`nav-item`}>
    //           <Link className={`nav-link`} to="/about">
    //             About me
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </header>
  );
}
