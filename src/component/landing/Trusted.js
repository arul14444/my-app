import React from "react";
import { trustedBy } from "../../services/landing";
let Trusted = () => {
    return(
        <div className="row mb-3">
        <div className="col-4">trusted by top teams</div>
        <div className="col-8 d-flex justify-content-start align-items-center">
          {trustedBy?.map(x =>{
            return(
                <img
                    src={x.source}
                    alt={x.name}
                    key={x.id}
                    className="trustTeamLogo"

                />
            )
          })}
        </div>
      </div>
    )
}

export default Trusted;