import s from "./style.module.css";

export function Experience(props) {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1>Experience in Tech</h1>
        <div>
          <p>
            When it comes to technology, I like to learn by doing and follow the
            opportunities that present themselves.
          </p>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-5">
        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#datasite"
          >
            <h3>Datasite</h3>
            <h4>Web Developer</h4>
            <p>April 2019 - March 2023</p>
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
                <div className={s.summary}>
                  <p>
                    Datasite is a secure virtual data room for dealmaking. I
                    worked on the digital marketing team along with another web
                    developer. Together, we built and maintained the marketing
                    website. The primary purpose of the site was to capture
                    leads to form fills and feed the sales funnel for new
                    business.
                  </p>
                </div>
                <div className={s.duties}>
                  <ul>
                    <li>
                      Crafted custom components for use on the marketing
                      website, including rebuilding and migrating content for
                      two website redesign and relaunches
                    </li>
                    <li>
                      Integrated third party applications into the website
                      structure
                    </li>
                    <li>
                      Wrote documentation for marketers to use with the website
                      content management system
                    </li>
                    <li>
                      Led training sessions for employees after major technology
                      changes and for onboarding
                    </li>
                    <li>
                      Troubleshot website issues and assisted with user support
                    </li>
                    <li>Facilitated webpage authoring and publishing</li>
                    <li>Ensured website ADA and cookie privacy standards</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#hearthAndHome"
          >
            <h3>Hearth and Home</h3>
            <h4>Web Developer</h4>
            <p>March 2018 - December 2018</p>
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
                <div className={s.summary}>
                  <p>
                    Hearth and Home sells fireplaces. As a member of the digital
                    marketing team, another developer and I were in charge of
                    managing the marketing website. This covered 7 different
                    fireplace brands and involved designing and editing each for
                    new model releases, as well as making sure pricing was up to
                    date and capturing sales leads with form fills.
                  </p>
                </div>
                <div className={s.duties}>
                  <ul>
                    <li>
                      Redesigned and restructured websites for seven fireplace
                      brands
                    </li>
                    <li>Built custom landing pages for marketing campaigns</li>
                    <li>
                      Planned structured email campaigns, charting user action
                      and company response
                    </li>
                    <li>
                      Constructed structure and style templates for promotional
                      emails
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#gem"
          >
            <h3>Gem Salon and Spa</h3>
            <h4>Content Management Specialist</h4>
            <p>December 2017 - June 2018</p>
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
              <div class="modal-body">
                <div className={s.summary}>
                  <p>
                    Gem Salon and Spa is a salon in the Twin cities. I acted
                    primarily as a consultant to make sure that the website that
                    they had was appropriately designed and constructed to
                    target their clientele.
                  </p>
                </div>
                <div className={s.duties}>
                  <ul>
                    <li>Analyzed and edited content for SEO optimization</li>
                    <li>
                      Collaborated with designers to spec a new website layout
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#eleven"
          >
            <h3>Eleven Design Co</h3>
            <h4>Web Developer Contractor</h4>
            <p>April 2016 - July 2016</p>
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
              <div className="modal-body">
                <div className={s.summary}>
                  <p>
                    My first developer role, I helped support existing WordPress
                    sites while the regular web developer was on maternity
                    leave.
                  </p>
                </div>
                <div className={s.duties}>
                  <ul>
                    <li>
                      Designed and prototyped sample websites for potential
                      clients as sales leads
                    </li>
                    <li>Updated and troubleshot issues for existing clients</li>
                    <li>
                      Customized WordPress themes for clients with a focus on
                      mobile responsivity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#braun"
          >
            <h3>Braun Intertec</h3>
            <h4>IT Help Desk Contractor</h4>
            <p>November 2014 - May 2015</p>
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
              <div class="modal-body">
                <div className={s.summary}>
                  <p>IT help desk duties</p>
                </div>
                <div className={s.duties}>
                  <ul>
                    <li>stuff</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`card p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#geekSquad"
          >
            <h3>Geek Squad</h3>
            <h4>Consultation Agent</h4>
            <p>February 2014 - August 2014</p>
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
              <div className="modal-body">
                <div className={s.summary}>
                  <p>
                    Gem Salon and Spa is a salon in the Twin cities. I acted
                    primarily as a consultant to make sure that the website that
                    they had was appropriately designed and constructed to
                    target their clientele.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>stuff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
