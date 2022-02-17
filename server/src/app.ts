import express, { Application, Request, Response, urlencoded } from "express";
import axios from "axios";
import cors from "cors";
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app: Application = express();
app.use(express.json());

app.use(cors());
const PORT = 5000;

let response: Object;

app.route('/data').
  post(async (req: Request, res: Response) => {
  console.log("getting the data from post");
  let { formData } = req.body;
  let foodChosen = req.body.foodChosen;
  let state = formData.state;
  let city = formData.city;

   console.log(
     `city:${formData.city}, state:${formData.state}, food:${foodChosen}`
   );

  let queryString = `https://api.tomtom.com/search/2/search/${foodChosen}%20${city}%20${state}.json?limit=5&minFuzzyLevel=1&maxFuzzyLevel=2&view=Unified&relatedPois=off&key=${API_KEY}
  `;

  try {
    response = await (await axios.get(queryString)).data;
    res.send(response);
  } catch (error) {
    console.error(error);
  }
}).get( (req: Request, res: Response) => {
  console.log(response);
  console.log("sendind the data"); 
  res.send(response);
});
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
