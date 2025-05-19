import React from "react";
let Utility = () => {
  return (
    <section>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-sm-12">
            <p className="p46">"Your AI everything app."</p>
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/3FH43ruDfwZILGSgjnJ2sn/82bb2e9bfd3521c58e53a395bd72c6f6/forbes.png"
              className="forbesLogo img-fluid my-3"
              alt="Forbes Logo"
            />
            <p className="p66B">One space for every team.</p>
          </div>
        </div>
        <nav className="navbar justify-content-center my-3">
          <ul className="navbar-nav flex-row">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Product
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Engineering
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Design
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                IT
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Marketing
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#">
                Startups
              </a>
            </li>
          </ul>
        </nav>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="blueCard card my-4">
              <div className="card-body">
                <img
                  src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5FOEEkHXxB4F3hQrZLWZ8G%2F3b595746774c084f827f7f3585d048ff%2Fproduct.en-US.png&w=3840&q=90"
                  className="img-fluid mt-3"
                  alt="Project Preview"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-4">
          <div className="col-md-8 mt-4">
            <p className="p16B">More productivity. Fewer tools.</p>
            <img
              src="https://images.ctfassets.net/spoqsaf9291f/1VJq4eDjZKJfNP8ertYCn7/15adb9934fa5b1c74b5b050baa0bade9/CrossOut-L.png"
              className="img-fluid"
              alt="CrossOut"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Utility;
