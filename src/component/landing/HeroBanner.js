import React from "react";
import {banner} from "../../services/landing";

let HeroBanner = () => {
  return (
    <section>
      <nav className="navbar">
        {banner?.map(x=>{
          return (
            <img
          src={x.source}
          alt="Notion"
          key={x.id}
          className="logo"
        />
          )
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
