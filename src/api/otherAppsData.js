const express = require('express');
const app = express();
const PORT = 3000;

// export default function handler(req, res) {

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('api/otherAppsData', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json([{
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
    }]);
  })

  module.exports = app;