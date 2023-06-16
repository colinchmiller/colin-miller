import { Card } from "../../components/Card/Card";

export function Experience(props) {
  return (
    <div className="container">
      <h1>Experience</h1>

      <div>
        Could do cards of different jobs that, when selected, either expand or
        flip to reveal more information
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div className="col">Datasite</div>
        <div className="col">Hearth and Home</div>
        <div className="col">Gem Salon and Spa</div>
        <div className="col">Eleven Design Co</div>
        <div className="col">Braun Intertec</div>
        <div className="col">Geek Squad</div>
        <Card />
      </div>
    </div>
  );
}
