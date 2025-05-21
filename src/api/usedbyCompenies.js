const express = require('express');
const app = express();
const PORT = 3000;

// export default function handler(req, res) {

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('api/usedbyCompenies', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json([{"id": 1,
        "companies":"OpenAI",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75",
        "story" :"Theres power in a single platform where you can do all your work. Notion is that single place. →"
        },
        {"id": 2,
        "companies":"Toyota",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1fJCIIjK31CRPMPj7Bp9Mu%2Fa48f183d399e7483799401f44053e306%2Ftoyota.png&w=3840&q=75",
        "story" :"Streamlined workflows to reduce timelines by 3×. →"
        },
        {"id": 3,
        "companies":"Ramp",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75",
        "story" :"With Notion, every person at Ramp has an AI assistant. →"
        },
        {"id": 4,
        "companies":"Vercel",
        "source":"https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg",
        "story" :"Notion understands that you can solve a lot of problems with one tool. →"
        },
        {"id": 5,
        "companies":"Match Group",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Z03v7BH2brwtBG2qdA5dp%2Fd6cd228d2f7b6048edcec9f4d5bcce3c%2Fmatch.png&w=1080&q=75",
        "story" :"Notion has been the most powerful and impactful way to streamline our workflow. →"
        },
        {"id": 6,
        "companies" :"dell",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F5sSU1RuGiuXiLOo6BTB6JT%2F459aa7c6824c18b7faaca2b0c3606d62%2Fdeel_2025.png&w=1920&q=75",
        "story" : "Someone could join Deel and onboard themselves without ever speaking to anybody. →"
        },
        {"id": 7,
        "companies":"Planful",
        "source":"https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3pCaKcH2gCNdmeLdzdL66F%2Fc6cd3b5670585d9feb298de532930d24%2FPlanful_Logo.png&w=1920&q=75",
        "story" :"From six apps to one: Scaling faster with all teams running on Notion AI. →."
        }]);
  }
);

  module.exports = app;