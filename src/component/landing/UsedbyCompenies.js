import React from "react";
import { UsedbyCompenies } from "../../services/landing";

const UsedbyCompaniesComponent = () => {
  
  return (
    <section>
      <div className="container my-5">
        <div className="grayCard p-4">
          {console.log(UsedbyCompenies)}
          <div className="row">
            {UsedbyCompenies?.map((x) => {
              if (x.id === 1) {
                return (
                  <div className="row align-items-start text-start ps-md-4 mb-4" key={x.id}>
                    <div className="col-md-8">
                      <h2>
                        <strong>{x.companies}</strong>
                      </h2>
                      <p className="fs-4">{x.story}</p>
                      <a href="#">Read the full story →</a>
                    </div>
                    <div className="col-md-4 text-end">
                      <img
                        src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F28Oz1efdtQCyLG1ocTdmHK%2F0b574e8bdb1c0d5d8b41e80fdb221595%2FHomepage_25_Thumbnail.jpg&w=640&q=75"
                        className="play-img img-fluid rounded"
                        alt="Video Testimonial"
                      />
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="col-md-4 mb-3" key={x.id}>
                    <img
                      src={x.source}
                      className="logo mb-2"
                      alt={x.companies}
                    />
                    <p>{x.story}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedbyCompaniesComponent;
