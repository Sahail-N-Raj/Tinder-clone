import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";

//App config
const app = express();
const port = process.env.PORT || 8001;
let connection_url = `mongodb+srv://tinder_clone:Tinderclone12@cluster0.zy3hm.mongodb.net/tinderdb?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(Cors());

//db config
mongoose.connect(connection_url, (err, info) => {
  if (err) throw err;
  console.log("connected to database");
});

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello sahail");
});

app.post("/tinder/cards ", (req, res) => {
  const dbCard = req.body;
  console.log("hello");

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
//to download data from database
app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
//listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
