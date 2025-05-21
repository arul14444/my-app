const express = require('express');
const app = express();
const PORT = 3000;

// export default function handler(req, res) {

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT}`);
});

app.get('api/features', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).json([{
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
        }]);
  })

  module.exports = app;