const express = require('express');
const app = express();
const PORT = 3000;

// export default function handler(req, res) {

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('api/banner', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json([
    {
      id: 1,
      source:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    },
  ]);
})

module.exports = app;
// }
