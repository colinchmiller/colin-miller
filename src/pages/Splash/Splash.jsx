import s from "./style.module.css";

export function Splash() {
  return (
    <div className={s.splash}>
      <h1>Colin Miller</h1>
      <h2>Web Developer</h2>
      <h3>Minneapolis, Minnesota</h3>
      <button className="btn btn-primary" href="/about">
        Learn more about me
      </button>
    </div>
  );
}
