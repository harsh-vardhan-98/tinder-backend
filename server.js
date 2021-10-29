import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Card from './dbCards.js';



const app = express();
const port = process.env.PORT || 8001;
const connection_url = "mongodb+srv://admin-harsh:harsh1234@cluster0.bffol.mongodb.net/tinderdb?retryWrites=true&w=majority"
app.use(express.json());
app.use(cors());

mongoose.connect(connection_url);




app.get("/", (req, res) => (res.status(200).send("HELLO PEOPlE")));

app.post("/tinder/card", (req, res) => {

     const dbCard = req.body;
     Card.create(dbCard, (err, data) => {
          if (err) {
               res.status(500).send(err);
          } else {
               res.status(201).send(data)
          }

     })
});

app.get("/tinder/card", (req, res) => (

     Card.find((err, data) => {
          if (err) {
               res.status(500).send(err);
          } else {
               res.status(200).send(data)
          }

     })



));



app.listen(port, () => console.log(`listening on ${port}`))

