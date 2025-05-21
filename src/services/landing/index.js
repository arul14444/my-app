import axios from "axios";
import { API_URL } from "../../env";


export const fetchBanner = async () =>{
  const { data } = await axios.get(`${API_URL}/api/banner`);
  return data;
}

export const fetchTrustedBy = async () =>{
  const { data } = await axios.get(`${API_URL}/api/trustedBy`);
  return data;
}
export const fetchFeatures = async () =>{
  const { data } = await axios.get(`${API_URL}/api/features`);
  return data;
}
export const fetchUsedByCompanies = async () =>{
  const { data } = await axios.get(`${API_URL}/api/usedByCompanies`);
  return data;
}
export const fetchIntegratedApps = async () =>{
  const { data } = await axios.get(`${API_URL}/api/integratedApps`);
  return data;
}
export const fetchIntegratedComingSoonApps = async () =>{
  const { data } = await axios.get(`${API_URL}/api/integratedComingSoonApps`);
  return data;
}
export const fetchOtherAppsData = async () =>{
  const { data } = await axios.get(`${API_URL}/api/otherAppsData`);
  return data;
}

export const banner = [
  {
    id: 1,
    source:
      "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
  },
];


export const trustedBy = [
  {
    id: 1,
    source:
      "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FjWkCPMAAj0Av69704DQoB%2F84499b606028b276e0bf94c238f07097%2FOpenAI-black-wordmark-cropped.png&w=3840&q=75",
    name: "OpenAI",
  },
  {
    id: 2,
    source:
      "https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/497492503acb3fa21bbd9dd1aec193c3/Figma-logo-color.svg",
    name: "Figma",
  },
  {
    id: 3,
    source:
      "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4xtSoCGKxiZcTwsYPlBB5h%2F0fb7d4155e89ef5a852936099e014313%2Fvolvo.png&w=1920&q=75",
    name: "Volvo",
  },
  {
    id: 4,
    source:
      "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4eiEZBWL5gEClwB1IHi18I%2Fb9b86479965977121ceabd01f45567a7%2Framp.png&w=3840&q=75",
    name: "Ramp",
  },
  {
    id: 5,
    source:
      "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3CSWr4Z4uIvbfO7102KPY%2Fbbd97c8edd0673853ac8dae2887a638d%2Fcursor.png&w=1920&q=75",
    name: "Cursor",
  },
  {
    id: 6,
    source:
      "https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/5264c929774566fc6f02fbb47e7aea97/Headspace-logo-color.svg",
    name: "Headspace",
  },
  {
    id: 7,
    source:
      "https://images.ctfassets.net/spoqsaf9291f/3hzRKZTT0Mi4Q3JLPQpQyF/28256f50d0bf6b63bfbed7862b8cbe68/Perplexity_AI_logo.svg.png",
    name: "Perplexity",
  },
  {
    id: 8,
    source:
      "https://images.ctfassets.net/spoqsaf9291f/15en0a60cYTRxNO1QlHbdg/f09657a6b8287f1db0e628a048267e2c/vercel-logotype-light.svg",
    name: "Vercel",
  },
];

export const features = [
    {
    "id": 1,
    "title":"AI Meeting Notes",
    "subtitle":"Perfect notes every time.",
    "source": "https://images.ctfassets.net/spoqsaf9291f/4zmmc2Sts2j750iWG4cz9C/f9fc4a58dea5be6e42777a8637684765/bento_1.en-US.png",
    },

    {
    "id": 2,
    "title":"Enterprise Search",
    "subtitle":"One search for everything",
    "source": "https://images.ctfassets.net/spoqsaf9291f/2ZvcfZ5FYoh5mWSzqBAoqI/0fc610cde8307c2707c679304bf55589/30222",
    },

    {
    "id": 3,
    "title":"Projects",
    "subtitle":"Keep every plan on track",
    "source": "https://images.ctfassets.net/spoqsaf9291f/sBvJS45PQCJBRR1hfIZH6/89c2b8066e8e52ef45c433294d6d0af9/bento_3.en-US.png",
    },

    {
    "id": 4,
    "title" :  "Notion Mail",
    "subtitle":"The inbox that thinks like you.",
    "source": "https://images.ctfassets.net/spoqsaf9291f/3WUVrdpc8WmnGJooDLXPR7/58a35d526f463c4a492a8119c1b652b8/bento_4.en-US.png",
    },

    {
    "id": 5,
    "title":"Enterprise Search",
    "subtitle":"One search for everything",
    "source": "https://images.ctfassets.net/spoqsaf9291f/4m5lpqe7uGKqVeCbxJTzs8/e55e27db18bf03aa6b431f6797219894/bento_5.en-US.png",
    }
]

export const UsedbyCompenies = [
    {"id": 1,
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
    } 
]

export const integratedApps =[
  {
    "id": 1,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2FCQcBQyH4Arrg3L89LGtJJ%2Fbe4d88d7b99690a8e32cec52ec9322dc%2Fslack-logo.png&w=48&q=75",
    "apps": "Slack"
  },
  {
    "id": 2,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2Kp35zgUoc6qKprOsvC0rm%2F5bb1391716e9f3549bab489646c0fff4%2Fgoogle-workspace-logo.png&w=48&q=75",
    "apps": "Google Drive"
  },
  {
    "id": 3,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4c6UQCtqP2VcaQ54geVmhE%2Fecb8a17172049803d0687a331738eb64%2Fgithub-logo.png&w=48&q=75",
    "apps": "GitHub"
  },
  {
    "id": 4,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F2QeSvVRbbTcryv22yuxJ4O%2F7a2f80d7e0c777b7d98f35e76bb241cf%2Fjira-logo.png&w=48&q=75",
    "apps": "Jira"
  },
  {
    "id": 5,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4Peb2KsEz9ZP28FP5TQMhw%2F4b1eb7bf064929333034da4e2acaadb7%2Fms-teams-logo.png&w=48&q=75",
    "apps": "MS Teams"
  },
  {
    "id": 6,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F1Y9wMruARnjBVnkdEPmoJd%2Fb98ddb2a235344031a05c3b6579fec40%2Fsharepoint-logo.png&w=48&q=75",
    "apps": "SharePoint"
  },
  {
    "id": 7,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F3qLse95jc5JIgvNUbsyQq7%2F68eaf72b8bc66c93577a37cd5cdddd60%2Fonedrive-logo.png&w=48&q=75",
    "apps": "OneDrive"
  }
]

export const integratedComingSoonApps = [
  {
    "id": 1,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F7uxYhi4B135cc5qjskpew1%2F85dd5b390939ec5d9f481b334dfaa433%2Fgmail-logo.png&w=48&q=75",
    "apps": "Gmail"
  },
  {
    "id": 2,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6sXzNcTANYabBBQaiCZMXR%2F678d3ad8374d4276da3fd8e95ae88234%2Flinear-logo.png&w=48&q=75",
    "apps": "Linear"
  },
  {
    "id": 3,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F4QFYcbryJVxPpMyp1lypRD%2Fb78f20fcf39037dd5792bae510a9b740%2Fzendesk-logo.png&w=48&q=75",
    "apps": "Zendesk"
  },
  {
    "id": 4,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6Kt86waxJxRwpIxAPorGyn%2F4ddbf37fecde60a2faf7ff9788ba00ac%2Fsalesforce-logo.png&w=48&q=75",
    "apps": "Salesforce"
  },
  {
    "id": 5,
    "source": "https://www.notion.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fspoqsaf9291f%2F6J63Bc8LtN8uIO1giCEyZN%2F4364add25c89df7f0912c64249a22ce4%2Fbox-logo.png&w=48&q=75",
    "apps": "Box"
  }
]

export const OtherAppsData = [
  {
    "id": 1,
    "source": "https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fnotion%2Fen-US.png&w=3840&q=75",
    "apps": "Get Started on Notion",
    "story": "Your AI workspace."
  },
  {
    "id": 2,
    "source": "https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fmail%2Fen-US.png&w=640&q=75",
    "apps": "Notion Mail",
    "story": "The inbox that thinks like you."
  },
  {
    "id": 3,
    "source": "https://www.notion.com/_next/image?url=%2Ffront-static%2Fdownloads%2Fcalendar%2Fen-US.png&w=640&q=75",
    "apps": "Notion Calendar",
    "story": "The calendar that thinks like you."
  }
]


