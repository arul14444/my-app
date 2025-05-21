import React from "react";
import { banner } from "../../services/landing";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { fetchBanner } from "../../services/landing";

// bisa masukin data, is error dan is loading
// queryKey digunakan untuk fetch data yang menggunakan parameterexport const fetchProduct = async (slug, unique) => {
//   const { data } = await axios.get(
//     `${API_URL}/product-detail/${slug}/${unique}`
//   );
//   return data;
// };

// const { data: product } = useQuery({
//   queryKey: ["product", slug, uniqueCode],
//   queryFn: () => fetchProduct(slug, uniqueCode), => memanggil method yang ada diservice
//   staleTime: 21600000, => memastikan data fresh dalam kurun waktu tersebut dengan kata lain akan mengambil data dalam waktu tersebut secara otomatis
//   cacheTime: 21600000 => digunakan untuk mengambil data baru dalam kurun waktu yang telah ditentukan ketika cache
// });

let HeroBanner = () => {
  const {
    data: banner,
    error,
    isloading,
  } = useQuery({
    queryKey: ["banner"],
    queryFn: fetchBanner,
    // cacheTime: 20000000
  });
  console.log(banner);
  // useEffect(() => {
  //   console.log(banner);
  // }, [banner]);
  if (isloading) return <h1>Loading</h1>;
  if (error) return <h1> Server not respon</h1>;
  return (
    <section>
      <nav className="navbar">
        {banner?.map((x) => {
          return (
            <img src={x.source} alt="Notion" key={x.id} className="logo" />
          );
        })}
        <ul className="navbar-nav flex-row">
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Notion
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Mail
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Calendar
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              AI
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Enterprise
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Explore
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link" href="#">
              Request a demo
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center">
          <a className="txtLogin">Login</a>
          <button className="btnBlack">Get Notion free</button>
        </div>
      </nav>

      <div className="row mb-5">
        <div className="col-5">
          <p className="p66B">The AI workspace that works for you.</p>
          <p>
            One place where teams find every answer, automate the busywork, and
            get projects done.
          </p>
          <div className="d-flex">
            <div className="btnBlueWhite">Get NotionFree</div>
            <div className="btnWhiteBlue">Request a demo</div>
          </div>
        </div>
        <div className="col-7">
          <img
            src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fnosey%2Fhero%2FnoseyHeroV2.png&w=2048&q=75"
            alt="Notion Hero"
            className="imageCol7"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
