import React from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

let Landing = () => {
    return(
        Header(),
        Body()

        
    )
}

let Header = () => {
    return(
        <div className="container-fluid">
             <div className="container-fluid">
            <nav className="navbar">
               <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="logo" />
                
                <ul className="navbar-nav  flex-row">
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
                    <a className="txtLogin ">Login</a>
                    <button className="btnBlack">Get Notion free</button>
                </div>
            </nav>
        </div>

        </div>
    )
}
let Body = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-5">
                    <h1>The AI workspace that works for you.</h1>
                    <p>One place where teams find every answer, automate the busywork, and get projects done.</p>
                    <div className="d-flex">
                        <div className="btnBlueWhite">Get NotionFree</div>
                        <div className="btnWhiteBlue">Request a demo</div>
                    </div>
                </div>
                {/*  <video muted autoPlay src="notion.com/front-static/nosey/hero/noseyHeroV2.mp4" poster="notion.com/_next/image?url=%2Ffront-static%2Fnosey%2Fhero%2FnoseyHeroV2.png&amp;w=2048&amp;" alt="Notion" className="video"></video> */}
                <div className="col-7">
                    <img src="https://www.notion.com/_next/image?url=%2Ffront-static%2Fnosey%2Fhero%2FnoseyHeroV2.png&w=2048&q=75" alt="Notion Hero" className="imageCol7" />
                </div>
            </div>
            <div className='row'>
                <div className="col-4">
                trusted by top teams
                </div>
                <div className="col-1 " style= {{height: 10, width: "auto"}} >
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75" alt="OpenAI Logo" className="imageCol4" />
                </div>
                {/* <div className="trustTeamLogo col-1">
                    <img src="https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg" alt="Figma Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4xtSoCGKxiZcTwsYPlBB5h%2F0fb7d4155e89ef5a852936099e014313%2Fvolvo.png&w=1920&q=75" alt="Volvo Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75" alt="Ramp Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1920&q=75" alt="Cursor Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/5264c929774566fc6f02fbb47e7aea97/Headspace-logo-color.svg" alt="Headspace Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png" alt="Perplexity AI Logo" className="imageCol4" />
                </div>
                <div className="trustTeamLogo col-1">
                    <img src="https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg" alt="Vercel Logo" className="imageCol4" />
                </div> */}
            </div>

            <div className="row">
            <div className="col-sm-6">
                <div className="redCard card">
                <div className="card-body">
                    <p>
                        AI Meeting Notes
                    </p>
                    <h5 className="card-title">Perfect notes every time.</h5>
                    <img>

                    </img>
                </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="blueCard card">
                <div className="card-body">
                    <p>
                        Enterprise Search
                    </p>
                    <h5 className="card-title">One search for everything</h5>
                    <img>

                    </img>
                </div>
                </div>
            </div>
            </div>
            <div className="row">
            <div className="col-sm-12">
                <div className="yellowCard card">
                <div className="card-body">
                    <p>
                        projects
                    </p>
                    <h5 className="card-title">Keep every plan on track</h5>
                    <img>

                    </img>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Landing;