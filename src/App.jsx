import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import s from "./style.module.css";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
