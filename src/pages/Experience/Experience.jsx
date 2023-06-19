import { Button } from "../../components/Button/Button";
export function Experience(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1>Experience</h1>
        <div>
          Could do cards of different jobs that, when selected, either expand or
          flip to reveal more information
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5">
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Datasite</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Datasite</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Hearth and Home</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Hearth and Home</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Gem Salon and Spa</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Gem</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Eleven Design Co</h3>
            <h4>Web Developer Contractor</h4>
            <p>A description of the work at Eleven</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Braun Intertec</h3>
            <h4>IT Help Desk Contractor</h4>
            <p>A description of the work at Braun Intertec</p>
          </div>
        </div>
        <div className="col">
          <div className="card p-2 mb-2">
            <h3>Geek Squad</h3>
            <h4>Customer Support Specialist</h4>
            <p>A description of the work at Geek Squad</p>
          </div>
        </div>
      </div>
    </div>
  );
}
