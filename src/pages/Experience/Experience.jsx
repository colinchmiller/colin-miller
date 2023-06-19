import s from "./style.module.css";

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
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#datasite"
          >
            <h3>Datasite</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Datasite</p>
          </div>
        </div>
        <div
          className="modal fade"
          id="datasite"
          tabIndex="-1"
          aria-labelledby="datasiteLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="datasiteLabel">
                  Datasite
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Details of what I did at Datasite
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#hearthAndHome"
          >
            <h3>Hearth and Home</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Hearth and Home</p>
          </div>
        </div>

        <div
          className="modal fade"
          id="hearthAndHome"
          tabIndex="-1"
          aria-labelledby="hearthAndHomeLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="hearthAndHomeLabel">
                  Hearth and Home
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                Details of work at Hearth and home
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#gem"
          >
            <h3>Gem Salon and Spa</h3>
            <h4>Web Developer</h4>
            <p>A description of the work at Gem</p>
          </div>
        </div>

        <div
          className="modal fade"
          id="gem"
          tabIndex="-1"
          aria-labelledby="gemLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="gemLabel">
                  Gem Salon and Spa
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Details of the work at Gem</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#eleven"
          >
            <h3>Eleven Design Co</h3>
            <h4>Web Developer Contractor</h4>
            <p>A description of the work at Eleven</p>
          </div>
        </div>

        <div
          className="modal fade"
          id="eleven"
          tabIndex="-1"
          aria-labelledby="elevenLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="elevenLabel">
                  Eleven Design Co
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Details of Eleven</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#braun"
          >
            <h3>Braun Intertec</h3>
            <h4>IT Help Desk Contractor</h4>
            <p>A description of the work at Braun Intertec</p>
          </div>
        </div>
        <div
          className="modal fade"
          id="braun"
          tabIndex="-1"
          aria-labelledby="braunLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="braunLabel">
                  Braun Intertec
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">Info on Braun Intertec</div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`card p-2 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#geekSquad"
          >
            <h3>Geek Squad</h3>
            <h4>Customer Support Specialist</h4>
            <p>A description of the work at Geek Squad</p>
          </div>
        </div>
        <div
          className="modal fade"
          id="geekSquad"
          tabIndex="-1"
          aria-labelledby="geekSquadLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title fs-5" id="geekSquadLabel">
                  Geek Squad
                </h2>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">Stuff about Geek Squad</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
