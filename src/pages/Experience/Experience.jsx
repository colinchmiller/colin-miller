import s from "./style.module.css";

export function Experience(props) {
  return (
    <div className="container">
      <div className={`${s.experience_title}`}>
        <h1>Technical Experience</h1>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-3">
        <div className="col">
          <div
            className={`${s.fade_in} p-5 mb-5 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#datasite"
          >
            <h3>Datasite</h3>
            <h4>Web Developer</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className={` ${s.modal_title} fs-5`} id="datasiteLabel">
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
                  <p>April 2019 - March 2023</p>
                  <p>
                    Datasite is a secure virtual data room for dealmaking. I
                    worked on the digital marketing team.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilities:</p>
                  <ul>
                    <li>
                      Crafted custom components for use on the website,
                      including rebuilding and migrating content for website
                      redesign and relaunches
                    </li>
                    <li>Integrated third party applications</li>
                    <li>Wrote documentation for application use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`${s.fade_in} ${s.delay_1} p-5 mb-5 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#hearthAndHome"
          >
            <h3>Hearth and Home</h3>
            <h4>Web Developer</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2
                  className={` ${s.modal_title} fs-5`}
                  id="hearthAndHomeLabel"
                >
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
                  <p>March 2018 - December 2018</p>
                  <p>
                    Hearth and Home sells fireplaces. As a member of the digital
                    marketing team, I worked on the marketing website covering 7
                    different fieplace brands.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilites:</p>
                  <ul>
                    <li>
                      Redesigned and restructured websites for seven fireplace
                      brands
                    </li>
                    <li>Built custom landing pages for marketing campaigns</li>
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
            className={`${s.fade_in} ${s.delay_2} p-5 mb-5 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#gem"
          >
            <h3>Gem Salon</h3>
            <h4>Content Specialist</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className={` ${s.modal_title} fs-5`} id="gemLabel">
                  Gem Salon and Spa
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
                  <p>December 2017 - June 2018</p>
                  <p>
                    Gem Salon and Spa is a salon in the Twin Cities. I acted as
                    a consultant to make sure that the website was appropriately
                    designed and constructed to target their clientele.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilities:</p>
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
            className={`${s.fade_in} ${s.delay_3} p-5 mb-5 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#eleven"
          >
            <h3>Eleven Design Co</h3>
            <h4>Web Developer Contractor</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className={` ${s.modal_title} fs-5`} id="elevenLabel">
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
                  <p>April 2016 - July 2016</p>
                  <p>
                    Eleven is a marketing and design agency. I helped support
                    existing WordPress sites and add new styling and
                    functionality.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilities:</p>
                  <ul>
                    <li>
                      Designed and prototyped sample websites for potential
                      clients as sales leads
                    </li>
                    <li>Corrected website issues for existing clients</li>
                    <li>
                      Customized WordPress themes with a focus on mobile
                      responsivity
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div
            className={`${s.fade_in} ${s.delay_4} p-5 mb-5 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#braun"
          >
            <h3>Braun Intertec</h3>
            <h4>IT Help Desk Contractor</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className={` ${s.modal_title} fs-5`} id="braunLabel">
                  Braun Intertec
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
                  <p>November 2014 - May 2015</p>
                  <p>
                    Braun Intertec does materials, soil, and other technical
                    testing and engineering to support building and drilling
                    projects. I worked the helpdesk, troubleshooting phone and
                    computer issues.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilities:</p>
                  <ul>
                    <li>Computer and phone troubleshooting</li>
                    <li>Researched new technology to add to our company</li>
                    <li>
                      Transitioned all desk phones to VoIP, upgraded cell phones
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div
            className={`${s.fade_in} ${s.delay_5} p-5 mb-2 ${s.experience_card}`}
            data-bs-toggle="modal"
            data-bs-target="#geekSquad"
          >
            <h3>Geek Squad</h3>
            <h4>Consultation Agent</h4>
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
            <div className="modal-content p-3">
              <div className="modal-header">
                <h2 className={` ${s.modal_title} fs-5`} id="geekSquadLabel">
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
                  <p>February 2014 - August 2014</p>
                  <p>
                    Geek Squad is the technology support wing of Best Buy
                    stores. I was the first person customers interacted with
                    when they came to us with technical issues.
                  </p>
                </div>
                <div className={s.duties}>
                  <p>Responsibilities::</p>
                  <ul>
                    <li>
                      Diagnose and recommend repair services for computers,
                      phones, and other technology
                    </li>
                    <li>
                      Helped customer service with returns and exhanges to
                      ensure products were functioning/not functioning
                    </li>
                    <li>
                      Assisted sales team with additional technical information
                      on computers and phones
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
