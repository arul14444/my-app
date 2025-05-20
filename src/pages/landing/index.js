import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import HeroBanner from "../../component/landing/HeroBanner";
import Trusted from "../../component/landing/Trusted";
import FiturSection from "../../component/landing/FiturSection";
import Utility from "../../component/landing/Utility";
import UsedbyCompenies from "../../component/landing/UsedbyCompenies";
import IntegrateApps from "../../component/landing/IntegrateApps";
import OtherApps from "../../component/landing/OtherApps";
import Footer from "../../component/landing/Footer";
let Landing = () => {
  return Body();
};

let Body = () => {
  return (
    <div className="container">
        <HeroBanner></HeroBanner>
      {/* <section>
        <nav className="navbar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
            alt="Notion"
            className="logo"
          />

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
              One place where teams find every answer, automate the busywork,
              and get projects done.
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
      </section> */}
        <Trusted></Trusted>
        <FiturSection></FiturSection>
    {/* <section>
    <div className="row mb-3">
        <div className="col-4">trusted by top teams</div>
        <div className="col-8 d-flex justify-content-start align-items-center">
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4xtSoCGKxiZcTwsYPlBB5h%2F0fb7d4155e89ef5a852936099e014313%2Fvolvo.png&w=1920&q=75"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1920&q=75"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/5264c929774566fc6f02fbb47e7aea97/Headspace-logo-color.svg"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
          <img
            src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg"
            alt="OpenAI Logo"
            className="trustTeamLogo"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="redCard card">
            <div className="card-body">
              <p>AI Meeting Notes</p>
              <h5 className="card-title">Perfect notes every time.</h5>
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png"
                className="superiorityImage"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="blueCard card">
            <div className="card-body">
              <p>Enterprise Search</p>
              <h5 className="card-title">One search for everything</h5>
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222"
                className="superiorityImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section> */}
     {/* <section>
     <div className="row">
        <div className="col-sm-12">
          <div className="yellowCard card">
            <div className="card-body">
              <p>projects</p>
              <h5 className="card-title">Keep every plan on track</h5>
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/sBvJS45PQCJBRR1hfIZH6/89c2b8066e8e52ef45c433294d6d0af9/bento_3.en-US.png"
                className="superiorityImage2"
              />
            </div>
          </div>
        </div>
      </div>
     </section> */}
      {/* <section>
      <div className="row">
        <div className="col-sm-6">
          <div className="grayCard card">
            <div className="card-body">
              <p>Notion Mail</p>
              <h5 className="card-title">The inbox that thinks like you.</h5>
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/3WUVrdpc8WmnGJooDLXPR7/58a35d526f463c4a492a8119c1b652b8/bento_4.en-US.png"
                className="superiorityImage"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="toscaCard card">
            <div className="card-body">
              <p>Enterprise Search</p>
              <h5 className="card-title">One search for everything</h5>
              <img
                src="https://images.ctfassets.net/spoqsaf9291f/4m5lpqe7uGKqVeCbxJTzs8/e55e27db18bf03aa6b431f6797219894/bento_5.en-US.png"
                className="superiorityImage"
              />
            </div>
          </div>
        </div>
        </div>
      </section> */}
    <Utility></Utility>
      {/* <section>
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
      </section> */}
    <UsedbyCompenies></UsedbyCompenies>
        {/* <section>
        <div className="container my-5">
            <div className="grayCard p-4">
              <div className="row align-items-start text-start ps-md-4">
                <div className="col-md-8">
                  <h2>
                    <strong>OpenAI</strong>
                  </h2>
                  <p className="fs-4">
                    “There’s power in a single platform where you can do all
                    your work. Notion is that single place.”
                  </p>
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

              <div className="row testimonial-box mt-4 text-start ps-md-4">
                <div className="col-md-4 mb-3">
                  <img
                    src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1fJCIIjK31CRPMPj7Bp9Mu%2Fa48f183d399e7483799401f44053e306%2Ftoyota.png&w=3840&q=75"
                    className="logo mb-2"
                    alt="Toyota"
                  />
                  <p>Streamlined workflows to reduce timelines by 3×. →</p>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75"
                    className="logo mb-2"
                    alt="Ramp"
                  />
                  <p>
                    “With Notion, every person at Ramp has an AI assistant.” →
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg"
                    className="logo mb-2"
                    alt="Vercel"
                  />
                  <p>
                    “Notion understands that you can solve a lot of problems
                    with one tool.” →
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Z03v7BH2brwtBG2qdA5dp%2Fd6cd228d2f7b6048edcec9f4d5bcce3c%2Fmatch.png&w=1080&q=75"
                    className="logo mb-2"
                    alt="Match Group"
                  />
                  <p>
                    “Notion has been the most powerful and impactful way to
                    streamline our workflow.” →
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5sSU1RuGiuXiLOo6BTB6JT%2F459aa7c6824c18b7faaca2b0c3606d62%2Fdeel_2025.png&w=1920&q=75"
                    className="logo mb-2"
                    alt="dell"
                  />
                  <p>
                    “Someone could join Deel and onboard themselves without ever
                    speaking to anybody.” →
                  </p>
                </div>
                <div className="col-md-4 mb-3">
                  <img
                    src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3pCaKcH2gCNdmeLdzdL66F%2Fc6cd3b5670585d9feb298de532930d24%2FPlanful_Logo.png&w=1920&q=75"
                    className="logo mb-2"
                    alt="Planful"
                  />
                  <p>
                    From six apps to one: Scaling faster with all teams running
                    on Notion AI. →
                  </p>
                </div>
              </div>
            </div>
            </div>
        </section> */}
        <IntegrateApps></IntegrateApps>
        {/* <section>
        <div className="integrateApps row">
          <div className="col-sm-5 h-100">
            <p className="p46B">Find anything </p>
            <p className="p46B">with one search. </p>
            <p>
              Search across your company knowledge and apps, right inside
              Notion.
            </p>
            <div className="d-flex">
              <div className="btnBlueWhite">Get NotionFree</div>
              <a href="#" className="ms-3 align-self-center">
                Request a demo→
              </a>
            </div>
            <div className="row">
              <div className="col-md-6">
                <h5>
                  <strong>Integrates with</strong>
                </h5>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FCQcBQyH4Arrg3L89LGtJJ%2Fbe4d88d7b99690a8e32cec52ec9322dc%2Fslack-logo.png&w=48&q=75"
                      alt="Slack"
                      width="20"
                      className="me-2"
                    />
                    Slack
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Kp35zgUoc6qKprOsvC0rm%2F5bb1391716e9f3549bab489646c0fff4%2Fgoog\\\le-workspace-logo.png&w=48&q=75"
                      alt="Google Drive"
                      width="20"
                      className="me-2"
                    />
                    Google Drive
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4c6UQCtqP2VcaQ54geVmhE%2Fecb8a17172049803d0687a331738eb64%2Fgithub-logo.png&w=48&q=75"
                      alt="GitHub"
                      width="20"
                      className="me-2"
                    />
                    GitHub
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2QeSvVRbbTcryv22yuxJ4O%2F7a2f80d7e0c777b7d98f35e76bb241cf%2Fjira-logo.png&w=48&q=75"
                      alt="Jira"
                      width="20"
                      className="me-2"
                    />
                    Jira
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4Peb2KsEz9ZP28FP5TQMhw%2F4b1eb7bf064929333034da4e2acaadb7%2Fms-teams-logo.png&w=48&q=75"
                      alt="MS Teams"
                      width="20"
                      className="me-2"
                    />
                    MS Teams
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1Y9wMruARnjBVnkdEPmoJd%2Fb98ddb2a235344031a05c3b6579fec40%2Fsharepoint-logo.png&w=48&q=75"
                      alt="SharePoint"
                      width="20"
                      className="me-2"
                    />
                    SharePoint
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3qLse95jc5JIgvNUbsyQq7%2F68eaf72b8bc66c93577a37cd5cdddd60%2Fonedrive-logo.png&w=48&q=75"
                      alt="OneDrive"
                      width="20"
                      className="me-2"
                    />
                    OneDrive
                  </li>
                </ul>
              </div>

              <div className="col-md-6">
                <h5>
                  <strong>Coming soon</strong>
                </h5>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7uxYhi4B135cc5qjskpew1%2F85dd5b390939ec5d9f481b334dfaa433%2Fgmail-logo.png&w=48&q=75"
                      alt="Gmail"
                      width="20"
                      className="me-2"
                    />
                    Gmail
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6sXzNcTANYabBBQaiCZMXR%2F678d3ad8374d4276da3fd8e95ae88234%2Flinear-logo.png&w=48&q=75"
                      alt="Linear"
                      width="20"
                      className="me-2"
                    />
                    Linear
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4QFYcbryJVxPpMyp1lypRD%2Fb78f20fcf39037dd5792bae510a9b740%2Fzendesk-logo.png&w=48&q=75"
                      alt="Zendesk"
                      width="20"
                      className="me-2"
                    />
                    Zendesk
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6Kt86waxJxRwpIxAPorGyn%2F4ddbf37fecde60a2faf7ff9788ba00ac%2Fsalesforce-logo.png&w=48&q=75"
                      alt="Salesforce"
                      width="20"
                      className="me-2"
                    />
                    Salesforce
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <img
                      src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6J63Bc8LtN8uIO1giCEyZN%2F4364add25c89df7f0912c64249a22ce4%2Fbox-logo.png&w=48&q=75"
                      alt="Box"
                      width="20"
                      className="me-2"
                    />
                    Box
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-7 h-100">
            <div className="blueCard card">
              <div className="card-body">
                <img
                  src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222"
                  className="superiorityImage d-flex justify-content-center"
                />
              </div>
            </div>
          </div>
        </div>
        </section> */}
        <OtherApps></OtherApps>
        {/* <section>
        <div className="row">
        <div className="col-sm-6">
          <div className="grayCard card">
            <div className="card-body">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                className="logox2 d-flex justify-content-center"
              />
              <p className="p26B">Get Started on Notion</p>
              <p>Your AI workspace.</p>
              <button className="btnBlack d-flex justify-content-center">
                <svg class="appleLogo" viewBox="0 0 170 170">
                  <path d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z"></path>
                </svg>{" "}
                Download for Mac
              </button>
              <img
                src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fnotion%2Fen-US.png&w=3840&q=75"
                className="superiorityImage d-flex justify-content-center"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 h-100">
          <div className="grayCard card mb-4">
            <div className="card-body d-flex align-items-center">
              <div className="w-50">
                <svg className="forms" viewBox="0 0 22 22">
                  <path
                    d="M1.55617 8.19127C0.579346 8.44327 0.322683 9.19783 0.797222 9.6789L4.51639 13.1375C4.56 13.1758 4.58732 13.2262 4.59755 13.2843L5.74661 19.8009C5.87804 20.5463 6.83186 20.7831 7.29769 20.1855L9.19411 17.7479C9.25825 17.6676 9.37598 17.656 9.45269 17.7253L12.4303 20.3926C13.1551 20.9664 14.1015 20.6318 14.3274 20.0581L20.8045 4.1832C21.3339 2.76468 20.2979 1.31037 18.3367 2.12389"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M6.5025 11.7319C10.1428 9.58286 12.7689 7.53232 15.9535 5.62596C16.2611 5.44184 16.5291 5.82255 16.2599 6.05928C15.5026 6.72523 14.7709 7.37237 14.5951 7.54025C14.2008 7.91697 9.79719 11.6886 9.79719 11.6886L7.61508 13.6861C8.54636 15.0129 12.1389 17.7421 13.1126 18.1146C15.6038 13.1812 17.298 8.95012 19.0422 4.23471C19.1762 3.87253 18.8246 3.52014 18.4618 3.65253L7.97959 7.47798L3.24764 9.38752L6.5025 11.7319Z"
                    fill="white"
                  ></path>
                </svg>
                <p className="p26B mb-1">Notion Mail</p>
                <p className="mb-3">The inbox that thinks like you.</p>
                <button className="btnBlack d-flex justify-content-center">
                  Download
                </button>
              </div>
              <div className="w-50 text-end">
                <img
                  src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fmail%2Fen-US.png&w=640&q=75"
                  className="img-fluid"
                  alt="Notion Mail"
                />
              </div>
            </div>
          </div>
          <div className="grayCard card">
            <div className="card-body d-flex align-items-center">
              <div className="w-50">
                <svg class="forms" viewBox="0 0 57 60">
                  <path
                    d="M6.18613 49.1689C5.15664 49.1575 4.2418 48.8935 3.53102 48.23C3.53102 48.23 3.52873 48.23 3.52643 48.2254C3.44389 48.1451 3.36593 48.0625 3.29256 47.9798C2.73082 47.337 2.42587 46.5129 2.42587 45.6222L2.41899 8.93385C2.41899 6.81041 4.20741 4.90505 6.3237 4.77421L42.9289 2.50615C43.0091 2.50155 43.0871 2.49926 43.1673 2.49926C44.0822 2.49926 44.9351 2.82983 45.5863 3.44505C45.6757 3.52999 45.7605 3.61722 45.8385 3.70904C46.0494 3.95008 46.2237 4.21637 46.3613 4.50332C46.226 4.21867 46.0494 3.95238 45.8385 3.71134C46.3865 4.34952 46.6869 5.16216 46.6869 6.04368V6.98258C46.6869 6.98258 46.7098 7.75161 45.9486 7.80211L45.9531 7.8067L12.2851 9.91866C9.81569 10.0725 7.80946 12.2143 7.80946 14.6912C7.80946 14.6912 7.7957 48.5537 7.79341 48.6088C7.76819 49.1689 7.30733 49.1689 6.92672 49.1689H6.18613Z"
                    fill="black"
                  ></path>
                  <path
                    d="M54.5994 52.0086C54.5994 52.0637 54.5948 52.1188 54.5902 52.1739C54.51 53.3515 53.5722 54.3892 52.4189 54.6026C52.396 54.6026 52.3731 54.6095 52.3501 54.6095L13.3008 56.9763H13.1792C12.4157 56.9373 11.7095 56.6434 11.1592 56.1246C10.5425 55.5438 10.1963 54.7496 10.171 53.8795C10.171 53.8451 10.1664 53.8107 10.1664 53.7739V14.9277C10.1664 14.8726 10.1664 14.8198 10.171 14.7647C10.2559 13.5182 11.2968 12.4301 12.5395 12.3015C12.5716 12.3015 12.6037 12.2923 12.6358 12.29L51.7058 9.83832C51.7677 9.83373 51.8296 9.83143 51.8916 9.83143C52.5955 9.83143 53.2512 10.0862 53.7533 10.5568C54.1041 10.8851 54.3518 11.296 54.4848 11.7529C54.5421 11.948 54.5765 12.1523 54.5902 12.3612L54.5994 52.0086Z"
                    fill="black"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M48.9865 50.7782L16.2929 52.6835C14.9562 52.7776 13.7731 52.3231 13.8098 50.5693V23.2699C13.8098 22.3333 14.5802 21.7341 15.4308 21.6905L49.4199 19.6497C50.2682 19.6061 50.963 20.2213 50.963 21.073V48.4206C50.963 49.4215 50.713 50.7093 48.9934 50.7759H48.9888L48.9865 50.7782Z"
                    fill="white"
                  ></path>
                  <path
                    d="M23.935 29.9662C22.3369 30.0649 21.7958 31.2862 21.7981 33.164V33.4945C21.6078 33.5405 21.4473 33.5818 21.2547 33.5933C20.1037 33.6644 19.2737 32.7278 19.2714 31.0474C19.2691 28.4763 21.5665 26.0591 25.9435 25.7859C29.8414 25.5426 32.336 27.4296 32.3406 30.7582C32.3406 33.2627 30.2678 35.0418 28.2249 35.5973C32.0585 35.7856 33.6589 37.9274 33.6635 40.6637C33.6681 45.3445 30.2518 47.9959 24.9805 48.3242L24.8521 48.3311C20.8901 48.579 18.1089 47.0708 18.1066 44.4675C18.1066 42.9846 19.1888 41.7312 20.819 41.6279C20.9474 41.6187 21.0735 41.6439 21.2019 41.6371C21.5252 44.2862 23.3159 45.2618 25.1044 45.1516C26.8286 45.0437 28.0415 43.8799 28.0415 42.2316V42.165C28.0392 39.594 25.8977 39.4654 22.6694 39.3369L22.1558 36.2699C25.1594 35.719 26.6589 34.7365 26.6566 32.9574C26.6566 31.0451 25.5996 29.8583 23.9373 29.9639H23.935V29.9662Z"
                    fill="black"
                  ></path>
                  <path
                    d="M38.3432 28.7036C35.1492 29.6287 34.4453 28.2215 34.7938 26.75C36.7107 26.3001 41.693 24.8034 43.5777 24.1262L43.6007 43.8684L47.0835 44.3757C47.0835 45.6613 46.3498 46.4647 45.0406 46.5474C43.9537 46.6139 41.4293 46.7058 40.2164 46.7815C38.3317 46.8986 34.881 47.181 34.881 47.181C34.7847 46.9238 34.7526 46.6621 34.7526 46.4303C34.7526 45.8036 35.0071 45.1608 35.8371 44.8785L38.3592 44.0612L38.3409 28.7036H38.3432Z"
                    fill="black"
                  ></path>
                </svg>
                <p className="p26B mb-1">Notion Calendar</p>
                <p className="mb-3">Time and work, together.</p>
                <button className="btnBlack d-flex justify-content-center">
                  Download
                </button>
              </div>
              <div className="w-50 text-end">
                <img
                  src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fcalendar%2Fen-US.png&w=640&q=75"
                  className="img-fluid"
                  alt="Notion Calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
        </section> */}
        <Footer>

        </Footer>
      {/* <section>
      <div class="bg-white py-5 border-top">
        <div class="container">
          <div class="row">
            <div class="col-md-3 mb-4">
              <img
                className="logo"
                src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png"
                alt="Notion Logo"
              />
              <span class="ms-2 fw-bold">Notion</span>
              <div class="mt-3 d-flex gap-3">
                <i class="bi bi-instagram">
                  <svg class="shareInstagram" viewBox="0 0 18 18">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9 1.621c2.405 0 2.689.011 3.635.053.879.039 1.354.186 1.67.309.418.162.721.359 1.034.671.316.316.51.615.675 1.034.123.316.271.795.309 1.67.042.949.053 1.234.053 3.635s-.011 2.689-.053 3.635c-.039.879-.186 1.354-.309 1.67a2.802 2.802 0 01-.671 1.034c-.316.316-.615.51-1.034.675-.316.123-.795.271-1.67.309-.949.042-1.234.053-3.635.053s-2.689-.011-3.635-.053c-.879-.039-1.354-.186-1.67-.309a2.802 2.802 0 01-1.034-.671 2.815 2.815 0 01-.675-1.034c-.123-.316-.271-.795-.309-1.67-.042-.949-.053-1.234-.053-3.635s.011-2.689.053-3.635c.039-.879.186-1.354.309-1.67.162-.418.359-.721.671-1.034.316-.316.615-.51 1.034-.675.316-.123.795-.271 1.67-.309.946-.042 1.23-.053 3.635-.053zM9 0C6.557 0 6.251.011 5.291.053 4.335.095 3.677.25 3.108.471a4.389 4.389 0 00-1.596 1.041A4.404 4.404 0 00.471 3.105C.25 3.678.095 4.332.053 5.288.011 6.251 0 6.557 0 9c0 2.443.011 2.749.053 3.709.042.956.197 1.614.418 2.183a4.389 4.389 0 001.041 1.596 4.392 4.392 0 001.593 1.037c.573.221 1.227.376 2.183.418.96.042 1.266.053 3.709.053s2.749-.011 3.709-.053c.956-.042 1.614-.197 2.183-.418a4.413 4.413 0 001.593-1.037c.5-.499.809-1.002 1.037-1.593.221-.573.376-1.227.418-2.183.042-.96.053-1.266.053-3.709s-.011-2.749-.053-3.709c-.042-.956-.197-1.614-.418-2.183a4.21 4.21 0 00-1.03-1.6A4.392 4.392 0 0014.896.474c-.573-.221-1.227-.376-2.183-.418C11.75.01 11.444 0 9 0zm0 4.377A4.625 4.625 0 004.377 9 4.625 4.625 0 009 13.623 4.625 4.625 0 0013.623 9 4.625 4.625 0 009 4.377zm0 7.622A3 3 0 119 6 3 3 0 019 12zm4.806-6.726a1.079 1.079 0 100-2.158 1.079 1.079 0 000 2.158z"
                    ></path>
                  </svg>
                </i>
                <i class="bi bi-twitter-x">
                  <svg class="shareX" viewBox="0 0 15 13">
                    <path d="M11.787.523h2.109L9.289 5.788l5.42 7.164h-4.244L7.142 8.607 3.34 12.952H1.23l4.927-5.631L.958.523H5.31l3.004 3.972L11.787.523Zm-.74 11.167h1.169L4.674 1.719H3.421l7.626 9.971Z"></path>
                  </svg>
                </i>
                <i class="bi bi-linkedin">
                  <svg class="shareLinkedIn" viewBox="0 0 16 16">
                    <defs>
                      <clipPath id="a">
                        <path d="M0 0h16v16H0z"></path>
                      </clipPath>
                    </defs>
                    <path d="M14.81 0H1.18C.53 0 0 .52 0 1.15v13.69C0 15.48.53 16 1.18 16h13.63c.65 0 1.18-.52 1.18-1.15V1.15c0-.64-.53-1.15-1.18-1.15ZM4.75 13.63H2.38V5.99h2.37v7.64ZM3.56 4.96c-.76 0-1.38-.62-1.38-1.37s.62-1.37 1.38-1.37 1.37.62 1.37 1.37-.62 1.37-1.37 1.37Zm10.07 8.67h-2.37V9.92c0-.88-.02-2.02-1.23-2.02s-1.42.97-1.42 1.96v3.77H6.24V5.99h2.27v1.04h.03c.32-.6 1.09-1.23 2.24-1.23 2.4 0 2.85 1.58 2.85 3.64v4.19Z"></path>
                  </svg>
                </i>
                <i class="bi bi-facebook">
                  <svg class="shareFacebook" viewBox="0 0 18 18">
                    <path d="M17.999 8.999c0-4.97-4.029-8.999-8.999-8.999s-8.999 4.029-8.999 8.999c0 4.492 3.291 8.215 7.593 8.89v-6.289h-2.285v-2.601h2.285v-1.983c0-2.255 1.344-3.501 3.399-3.501 0.985 0 2.015 0.176 2.015 0.176v2.215h-1.135c-1.118 0-1.467 0.694-1.467 1.405v1.688h2.496l-0.399 2.601h-2.097v6.289c4.302-0.675 7.593-4.398 7.593-8.89z"></path>
                  </svg>
                </i>
                <i class="bi bi-youtube">
                  <svg class="shareYouTube" viewBox="0 0 18 18">
                    <path d="M9 2.070c-8.845 0-9 0.787-9 6.93s0.155 6.93 9 6.93 9-0.787 9-6.93-0.155-6.93-9-6.93zM11.884 9.301l-4.041 1.886c-0.354 0.164-0.644-0.020-0.644-0.41v-3.553c0-0.39 0.29-0.574 0.644-0.41l4.041 1.886c0.354 0.166 0.354 0.436 0 0.601z"></path>
                  </svg>
                </i>
              </div>

              <div class="mt-4">
                <select class="form-select form-select-sm w-auto">
                  <option selected>🌐 English</option>
                </select>
                <div class="mt-3 small">
                  <a href="#">Do Not Sell or Share My Info</a>
                  <br />
                  <a href="#">Cookie settings</a>
                  <br />
                  <span class="text-muted">© 2025 Notion Labs, Inc.</span>
                </div>
              </div>
            </div>
            <div class="col-md">
              <h6 class="fw-bold">Company</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Status</a>
                </li>
                <li>
                  <a href="#">Terms & privacy</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Download</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">iOS & Android</a>
                </li>
                <li>
                  <a href="#">Mac & Windows</a>
                </li>
                <li>
                  <a href="#">Calendar</a>
                </li>
                <li>
                  <a href="#">Web Clipper</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Resources</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Integrations</a>
                </li>
                <li>
                  <a href="#">Templates</a>
                </li>
                <li>
                  <a href="#">Affiliates</a>
                </li>
              </ul>
            </div>

            <div class="col-md">
              <h6 class="fw-bold">Notion for</h6>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Enterprise</a>
                </li>
                <li>
                  <a href="#">Small business</a>
                </li>
                <li>
                  <a href="#">Personal</a>
                </li>
              </ul>
              <a href="#" class="fw-bold d-inline-block mt-2">
                Explore more →
              </a>
            </div>
          </div>
        </div>
      </div>
      </section> */}
    </div>
  );
};


export default Landing;
