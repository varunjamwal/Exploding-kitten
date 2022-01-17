const express = require("express");
const redis = require('redis');
const cors = require('cors');
const app = express();
const client = redis.createClient();
app.use(cors());

app.post("/addUser", async (req, res) => {
    try {
      await client.connect();
    const exist = await client.hExists('scoreboard',req.query.user);
    console.log(exist);
    if(exist)
    {
      console.log('User already exists !')
    }
    else{
      client.hSet('scoreboard', req.query.user,0 );
     }
      res.status(200).json('Success');
      await client.quit();
     } catch(error) {
       console.log(error)
      res.status(500).end(error.toString());
     }
  });  

  app.post("/addWin", async (req, res) => {
    try {
      await client.connect();
    const exist = await client.hExists('scoreboard',req.query.user);
    if(exist)
    {
      let currScore = await client.hmGet('scoreboard',req.query.user)
      client.hSet('scoreboard', req.query.user,++currScore );
    }
      res.status(200).json('Success');
      await client.quit();
     } catch(error) {
       console.log(error);
      res.status(500).end(error.toString());
     }
  });

  app.get("/getScore", async (req, res) => {
    try {
      await client.connect();
      const data = await client.hGetAll('scoreboard')
      let finalData = [];
      for(let user in data){
        let jsonData = {
          user: user,
          score: data[user]
      };
      finalData.push(jsonData)
    }
      res.status(200).json(finalData);
      await client.quit();
     } catch(error) {
       console.log(error);
      res.status(500).end(error.toString());
     }
  });
  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log('Server started on port ' + PORT));