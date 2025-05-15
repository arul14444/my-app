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
            <div className='row mb-3'>
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
                            <img src="https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png" className='superiorityImage' />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="blueCard card">
                        <div className="card-body">
                            <p>Enterprise Search</p>
                            <h5 className="card-title">One search for everything</h5>
                            <img src='https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222' className='superiorityImage' />
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
                            <img src='https://images.ctfassets.net/spoqsaf9291f/sBvJS45PQCJBRR1hfIZH6/89c2b8066e8e52ef45c433294d6d0af9/bento_3.en-US.png' className='superiorityImage2' />
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
                            <img src="https://images.ctfassets.net/spoqsaf9291f/3WUVrdpc8WmnGJooDLXPR7/58a35d526f463c4a492a8119c1b652b8/bento_4.en-US.png" className='superiorityImage' />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="toscaCard card">
                        <div className="card-body">
                            <p>Enterprise Search</p>
                            <h5 className="card-title">One search for everything</h5>
                            <img src='https://images.ctfassets.net/spoqsaf9291f/4m5lpqe7uGKqVeCbxJTzs8/e55e27db18bf03aa6b431f6797219894/bento_5.en-US.png' className='superiorityImage' />
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-sm-12">
                            <p className='p46'>"Your AI everything app."</p>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/3FH43ruDfwZILGSgjnJ2sn/82bb2e9bfd3521c58e53a395bd72c6f6/forbes.png" className="forbesLogo img-fluid my-3" alt="Forbes Logo" />
                            <p>One space for every team.</p>
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
                                    <p>projects</p>
                                    <h5 className="card-title">Keep every plan on track</h5>
                                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4GoYEFFY5zHRGpaFGYkZCu%2Ff1c54f6f8fa5d206c2839d7ab982ed91%2Fstartups.en-US.png&w=3840&q=90" className="img-fluid mt-3" alt="Project Preview" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center my-4">
                        <div className="col-md-8">
                            <p className='p16B'>More productivity. Fewer tools.</p>
                            <img src="https://images.ctfassets.net/spoqsaf9291f/1VJq4eDjZKJfNP8ertYCn7/15adb9934fa5b1c74b5b050baa0bade9/CrossOut-L.png" className="img-fluid" alt="CrossOut" />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="grayCard card my-4">
                            <div className="row justify-content-center"></div>
                                <div className="col-md-8">
                                    <p className='p16B'>More productivity. Fewer tools.</p>
                                </div>
                                <div className="col-md-4">
                                    <p className='p16B'>More productivity. Fewer tools.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-5"></div>
                        <div className="col-md-7"></div>
                            <div className="blueCard card my-4"></div>
                                <div className="card-body">
                        <div className="col-md-5">
                            
                        </div>
                        <div className="col-md-7">
                            <div className="blueCard card my-4">
                                <div className="card-body">
                                    <img src="https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4GoYEFFY5zHRGpaFGYkZCu%2Ff1c54f6f8fa5d206c2839d7ab982ed91%2Fstartups.en-US.png&w=3840&q=90" className="img-fluid mt-3" alt="Project Preview" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;
