import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

let users = [
  {
    username: "bobesponja",
    avatar:
      "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/12/GettyImages-1205198865.jpg",
  },
];
let tweets = [
  {
    username: "bobesponja",
    tweet: "eu amo o hub",
  },
];

app.get("/sign-up", (req, res) => {
  res.send(users);
});

app.post("/sign-up", (req, res) => {
  const user = req.body;
  users.push(user);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  users.filter((value) => value.username == tweets.username);
  res.send(tweets);
});

app.listen(5000, () => console.log("wer live"));
