import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let Landing = () => {
    return (
        Header(),
        Body()
    )
}

let Header = () => {
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <nav className="navbar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="logo" />

                    <ul className="navbar-nav flex-row">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Notion</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Mail</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Calendar</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">AI</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Enterprise</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Explore</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Request a demo</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center">
                        <a className="txtLogin">Login</a>
                        <button className="btnBlack">Get Notion free</button>
                    </div>
                </nav>
            </div>
        </div>
    )
}

let Body = () => {
    return (
        
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <p className="p66B">The AI workspace that works for you.</p>
                    <p>One place where teams find every answer, automate the busywork, and get projects done.</p>
                    <div className="d-flex">
                        <div className="btnBlueWhite">Get NotionFree</div>
                        <div className="btnWhiteBlue">Request a demo</div>
                    </div>
                </div>
                <div className="col-7">
                    <img src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fnosey%2Fhero%2FnoseyHeroV2.png&w=2048&q=75" alt="Notion Hero" className="imageCol7" />
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-4">
                    trusted by top teams
                </div>
                <div className="col-8 d-flex justify-content-start align-items-center">
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4xtSoCGKxiZcTwsYPlBB5h%2F0fb7d4155e89ef5a852936099e014313%2Fvolvo.png&w=1920&q=75" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1920&q=75" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/5264c929774566fc6f02fbb47e7aea97/Headspace-logo-color.svg" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png" alt="OpenAI Logo" className="trustTeamLogo" />
                    <img src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg" alt="OpenAI Logo" className="trustTeamLogo" />
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="redCard card">
                        <div className="card-body">
                            <p>AI Meeting Notes</p>
                            <h5 className="card-title">Perfect notes every time.</h5>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png" className="superiorityImage" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="blueCard card">
                        <div className="card-body">
                            <p>Enterprise Search</p>
                            <h5 className="card-title">One search for everything</h5>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222" className="superiorityImage" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="yellowCard card">
                        <div className="card-body">
                            <p>projects</p>
                            <h5 className="card-title">Keep every plan on track</h5>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/sBvJS45PQCJBRR1hfIZH6/89c2b8066e8e52ef45c433294d6d0af9/bento_3.en-US.png" className="superiorityImage2" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="grayCard card">
                        <div className="card-body">
                            <p>Notion Mail</p>
                            <h5 className="card-title">The inbox that thinks like you.</h5>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/3WUVrdpc8WmnGJooDLXPR7/58a35d526f463c4a492a8119c1b652b8/bento_4.en-US.png" className="superiorityImage" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="toscaCard card">
                        <div className="card-body">
                            <p>Enterprise Search</p>
                            <h5 className="card-title">One search for everything</h5>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/4m5lpqe7uGKqVeCbxJTzs8/e55e27db18bf03aa6b431f6797219894/bento_5.en-US.png" className="superiorityImage" />
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <p className="p46">"Your AI everything app."</p>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/3FH43ruDfwZILGSgjnJ2sn/82bb2e9bfd3521c58e53a395bd72c6f6/forbes.png" className="forbesLogo img-fluid my-3" alt="Forbes Logo" />
                            <p className='p66B'>One space for every team.</p>
                        </div>
                    </div>
                    <nav className="navbar justify-content-center my-3">
                        <ul className="navbar-nav flex-row">
                            <li className="nav-item mx-2"><a className="nav-link" href="#">Product</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="#">Engineering</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="#">Design</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="#">IT</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="#">Marketing</a></li>
                            <li className="nav-item mx-2"><a className="nav-link" href="#">Startups</a></li>
                        </ul>
                    </nav>
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="blueCard card my-4">
                                <div className="card-body">
                                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5FOEEkHXxB4F3hQrZLWZ8G%2F3b595746774c084f827f7f3585d048ff%2Fproduct.en-US.png&w=3840&q=90" className="img-fluid mt-3" alt="Project Preview" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-md-8 mt-4">
                            <p className="p16B">More productivity. Fewer tools.</p>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/1VJq4eDjZKJfNP8ertYCn7/15adb9934fa5b1c74b5b050baa0bade9/CrossOut-L.png" className="img-fluid" alt="CrossOut" />
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="grayCard p-4">
                            <div className="row align-items-start text-start ps-md-4">
                            <div className="col-md-8">
                                <h2><strong>OpenAI</strong></h2>
                                <p className="fs-4">“There’s power in a single platform where you can do all your work. Notion is that single place.”</p>
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
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1fJCIIjK31CRPMPj7Bp9Mu%2Fa48f183d399e7483799401f44053e306%2Ftoyota.png&w=3840&q=75" className="logo mb-2" alt="Toyota" />
                                <p>Streamlined workflows to reduce timelines by 3×. →</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75" className="logo mb-2" alt="Ramp" />
                                <p>“With Notion, every person at Ramp has an AI assistant.” →</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg" className="logo mb-2" alt="Vercel" />
                                <p>“Notion understands that you can solve a lot of problems with one tool.” →</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Z03v7BH2brwtBG2qdA5dp%2Fd6cd228d2f7b6048edcec9f4d5bcce3c%2Fmatch.png&w=1080&q=75" className="logo mb-2" alt="Match Group" />
                                <p>“Notion has been the most powerful and impactful way to streamline our workflow.” →</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5sSU1RuGiuXiLOo6BTB6JT%2F459aa7c6824c18b7faaca2b0c3606d62%2Fdeel_2025.png&w=1920&q=75" className="logo mb-2" alt="dell" />
                                <p>“Someone could join Deel and onboard themselves without ever speaking to anybody.” →</p>
                            </div>
                            <div className="col-md-4 mb-3">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3pCaKcH2gCNdmeLdzdL66F%2Fc6cd3b5670585d9feb298de532930d24%2FPlanful_Logo.png&w=1920&q=75" className="logo mb-2" alt="Planful" />
                                <p>From six apps to one: Scaling faster with all teams running on Notion AI. →</p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="IntegrateApps row">
                    <div className="col-sm-5 h-100">
                        <p className="p46B">Find anything </p>
                        <p className="p46B">with one search. </p>
                        <p>Search across your company knowledge and apps, right inside Notion.</p>
                        <div className="d-flex">
                            <div className="btnBlueWhite">Get NotionFree</div>
                            <a href='#' className="ms-3 align-self-center">Request a demo→</a>
                        </div>
                        <div className="row">

                            <div className="col-md-6">
                                <h5><strong>Integrates with</strong></h5>
                                <ul className="list-unstyled">
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FCQcBQyH4Arrg3L89LGtJJ%2Fbe4d88d7b99690a8e32cec52ec9322dc%2Fslack-logo.png&w=48&q=75" alt="Slack" width="20" className="me-2" />
                                        Slack
                                    </li>
                                        <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Kp35zgUoc6qKprOsvC0rm%2F5bb1391716e9f3549bab489646c0fff4%2Fgoog\\\le-workspace-logo.png&w=48&q=75" alt="Google Drive" width="20" className="me-2" />
                                        Google Drive
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4c6UQCtqP2VcaQ54geVmhE%2Fecb8a17172049803d0687a331738eb64%2Fgithub-logo.png&w=48&q=75" alt="GitHub" width="20" className="me-2" />
                                        GitHub
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2QeSvVRbbTcryv22yuxJ4O%2F7a2f80d7e0c777b7d98f35e76bb241cf%2Fjira-logo.png&w=48&q=75" alt="Jira" width="20" className="me-2" />
                                        Jira
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4Peb2KsEz9ZP28FP5TQMhw%2F4b1eb7bf064929333034da4e2acaadb7%2Fms-teams-logo.png&w=48&q=75" alt="MS Teams" width="20" className="me-2" />
                                        MS Teams
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1Y9wMruARnjBVnkdEPmoJd%2Fb98ddb2a235344031a05c3b6579fec40%2Fsharepoint-logo.png&w=48&q=75" alt="SharePoint" width="20" className="me-2" />
                                        SharePoint
                                    </li>
                                    <li className="d-flex align-items-center mb-2">
                                        <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3qLse95jc5JIgvNUbsyQq7%2F68eaf72b8bc66c93577a37cd5cdddd60%2Fonedrive-logo.png&w=48&q=75" alt="OneDrive" width="20" className="me-2" />
                                        OneDrive
                                    </li>
                                </ul>
                        </div>

                        <div className="col-md-6">
                        <h5><strong>Coming soon</strong></h5>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-center mb-2">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7uxYhi4B135cc5qjskpew1%2F85dd5b390939ec5d9f481b334dfaa433%2Fgmail-logo.png&w=48&q=75" alt="Gmail" width="20" className="me-2" />
                                Gmail
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6sXzNcTANYabBBQaiCZMXR%2F678d3ad8374d4276da3fd8e95ae88234%2Flinear-logo.png&w=48&q=75" alt="Linear" width="20" className="me-2" />
                                Linear
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4QFYcbryJVxPpMyp1lypRD%2Fb78f20fcf39037dd5792bae510a9b740%2Fzendesk-logo.png&w=48&q=75" alt="Zendesk" width="20" className="me-2" />
                                Zendesk
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6Kt86waxJxRwpIxAPorGyn%2F4ddbf37fecde60a2faf7ff9788ba00ac%2Fsalesforce-logo.png&w=48&q=75" alt="Salesforce" width="20" className="me-2" />
                                Salesforce
                            </li>
                            <li className="d-flex align-items-center mb-2">
                                <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6J63Bc8LtN8uIO1giCEyZN%2F4364add25c89df7f0912c64249a22ce4%2Fbox-logo.png&w=48&q=75" alt="Box" width="20" className="me-2" />
                                Box
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
                    <div className="col-sm-7 h-100">
                        <div className="blueCard card">
                            <div className="card-body">
                                <p>Enterprise Search</p>
                                <h5 className="card-title">One search for everything</h5>
                                <img src="https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222" className="superiorityImage d-flex justify-content-center" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
