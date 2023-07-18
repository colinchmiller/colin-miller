import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import s from "./style.module.css";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
