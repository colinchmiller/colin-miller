import s from "./style.module.css";

export function Title(props) {
  return (
    <div className={s.title}>
      <h1>{props.children}</h1>
    </div>
  );
}
