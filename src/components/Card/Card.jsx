import s from "./style.module.css";
export function Card(props) {
  return (
    <div className="card">
      <div className={s.title}>Company Name</div>
      <div className={s.role}>Role at Company</div>
      <p className={s.description}>Introductory description of the company</p>
    </div>
  );
}
