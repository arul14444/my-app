import React from "react";
import { features } from "../../services/landing";
let FiturSection1 = () => {
  return (
    <section>
       <div className="row mb-3">
       {features?.map((x) => {
       if (x.id === 3) {
        return (
          <div className="col-sm-12 mb-3">
            <div className="redCard card">
              <div className="card-body">
                <p>{x.title}</p>
                <h5 className="card-title">{x.subtitle}</h5>
                <img
                  src={x.source}
                  className="superiorityImage"
                />
              </div>
            </div>
          </div>
        );}
        else{
          return(
         
            <div className="col-sm-6 mb-3">
              <div className="redCard card">
                <div className="card-body">
                  <p>{x.title}</p>
                  <h5 className="card-title">{x.subtitle}</h5>
                  <img
                    src={x.source}
                    className="superiorityImage"
                  />
                </div>
              </div>
            </div>
      )}
         })}
       </div>
    </section>
  );
};


export default FiturSection1;
