import s from "./style.module.css";

import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div>
        <Outlet />
      </div>
      <footer>Contact information</footer>
    </div>
  );
}

export default App;
