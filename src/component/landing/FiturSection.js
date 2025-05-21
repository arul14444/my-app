import React from "react";
import { features } from "../../services/landing";
import { fetchFeatures } from "../../services/landing";
import { useQuery } from "@tanstack/react-query";

let FiturSection1 = () => {
  const {
    data: fetchedFeatures, // Ubah nama variabel di sini
    error,
    isLoading,
  } = useQuery({
    queryKey: ["features"], // Tambahkan queryKey untuk caching
    queryFn: fetchFeatures,
  });

  console.log(fetchedFeatures);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Server not respon</h1>;

  return (
    <section>
      <div className="row mb-3">
        {features?.map((x) => {
          if (x.id === 3) {
            return (
              <div className="col-sm-12 mb-3" key={x.id}>
                <div className="redCard card">
                  <div className="card-body">
                    <p>{x.title}</p>
                    <h5 className="card-title">{x.subtitle}</h5>
                    <img src={x.source} className="superiorityImage" alt={x.title} />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div className="col-sm-6 mb-3" key={x.id}>
                <div className="redCard card">
                  <div className="card-body">
                    <p>{x.title}</p>
                    <h5 className="card-title">{x.subtitle}</h5>
                    <img src={x.source} className="superiorityImage" alt={x.title} />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default FiturSection1;