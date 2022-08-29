import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [];
let tweets = [];

app.get("/sign-up", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  if (!req.body.username) {
    res.status(404).send("Usuário não esta sendo enviado");
  }
  if (!req.body.tweet) {
    res.status(404).send("Tweet não esta sendo enviado");
  }

  tweets.push(req.body);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  for (let i = 0; i < tweets.length; i++) {
    let nick = tweets[i].username;
    let avatar = users.find((value) => value.username == nick).avatar;
    tweets[i].avatar = avatar;
  }
  tweets.splice(10);
  res.send(tweets);
});

app.listen(5000, () => console.log("wer live"));
