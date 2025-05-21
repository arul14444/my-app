const express = require('express');
const app = express();
const PORT = 3000;

// export default function handler(req, res) {

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('api/integratedApps', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json(
        [{
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
          }]
    );
  })
  module.exports = app;