import React from "react";
import { OtherAppsData } from "../../services/landing";

const OtherApps = () => {
  return (
    <section>
      <div className="row">
        {OtherAppsData?.map((x, index) => (
          <div className="col-sm-6" key={index}>
            <div className="grayCard card">
              <div className="card-body">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                  className="logox2 mb-3"
                  alt="App Logo"
                />
                <p className="p26B">{x.apps}</p>
                <p>{x.story}</p>
                <button className="btnBlack mt-2">Download</button>
                <img
                  src={x.source}
                  alt={`${x.apps} screenshot`}
                  className="img-fluid mt-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherApps;
