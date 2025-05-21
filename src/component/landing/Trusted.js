import React from "react";
import { trustedBy } from "../../services/landing";
import { useQuery } from "@tanstack/react-query";
import { fetchTrustedBy } from "../../services/landing";


let Trusted = () => {
    const {
      data: trustedBy, 
      error,
      isLoading, 
    } = useQuery({
      queryKey: ["otherApps"],
      queryFn: fetchTrustedBy, // Gunakan fungsi fetch yang benar
    });
  
    console.log(trustedBy);
  
    if (isLoading) return <h1>Loading</h1>;
    if (error) return <h1>Server not respon</h1>;
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