import s from "./style.module.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className={s.app_header}>
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/experience">My Experience</Link>
        Header section: navigate through different features?
      </header>
      <div>
        <Outlet />
      </div>
      <footer>Contact information</footer>
    </div>
  );
}

export default App;
