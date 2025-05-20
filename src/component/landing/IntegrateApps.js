import React from "react";
import { integratedComingSoonApps, integratedApps } from "../../services/landing";

let IntegrateApps = () => {
  return (
    <section>
      <div className="integrateApps row">
        <div className="col-sm-5 h-100">
          <p className="p46B">Find anything</p>
          <p className="p46B">with one search.</p>
          <p>Search across your company knowledge and apps, right inside Notion.</p>
          <div className="d-flex">
            <div className="btnBlueWhite">Get Notion Free</div>
            <a href="#" className="ms-3 align-self-center">
              Request a demo →
            </a>
          </div>
          <div className="row mt-4">
            <div className="col-md-6">
              <h5><strong>Integrates with</strong></h5>
              <ul className="list-unstyled">
                {integratedApps?.map((x, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-2">
                    <img
                      src={x.source}
                      alt={x.apps}
                      width="20"
                      className="me-2"
                    />
                    {x.apps}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-6">
              <h5><strong>Coming soon</strong></h5>
              <ul className="list-unstyled">
                {integratedComingSoonApps?.map((x, idx) => (
                  <li key={idx} className="d-flex align-items-center mb-2">
                    <img
                      src={x.source}
                      alt={x.apps}
                      width="20"
                      className="me-2"
                    />
                    {x.apps}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-7 h-100">
          <div className="blueCard card">
            <div className="card-body">
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222"
                className="superiorityImage d-flex justify-content-center"
                alt="Notion Integration Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrateApps;
