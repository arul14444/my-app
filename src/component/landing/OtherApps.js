import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchOtherAppsData } from "../../services/landing"; // Perbaiki nama impor

const OtherApps = () => {
  const {
    data: otherAppsData, // Data hasil fetch
    error,
    isLoading, // Perbaiki typo dari 'isloading' menjadi 'isLoading'
  } = useQuery({
    queryKey: "otherApps", // Pastikan key ini unik
    queryFn: fetchOtherAppsData,
  });

  console.log(otherAppsData);

  if (isLoading) return <h1>Loading</h1>;
  if (error) return <h1>Server not respon</h1>;

  return (
    <section>
      <div className="row">
        {otherAppsData?.map((x, index) => ( // Gunakan 'otherAppsData' di sini
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