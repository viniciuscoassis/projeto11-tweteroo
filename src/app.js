import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("deu get");
});

app.listen(5000);
