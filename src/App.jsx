import s from "./style.module.css";

function App() {
  return (
    <div className="App">
      <header className={s.app_header}>
        Header section: navigate through different features?
      </header>
      <div>Main area that changes with the pages</div>
      <footer>Contact information</footer>
    </div>
  );
}

export default App;
