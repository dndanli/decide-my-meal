import express, { Application, Request, Response } from "express";
import axios from "axios";
import cors from "cors";
require("dotenv").config();

// getting api key
const API_KEY = process.env.API_KEY;

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

let response: Object;

app
  .route("/data")
  .post(async (req: Request, res: Response) => {
    let { formData } = req.body;
    let foodChosen = req.body.foodChosen;
    let state = formData.state;
    let city = formData.city;
    let queryString = `https://api.tomtom.com/search/2/search/${foodChosen}%20${city}%20${state}.json?minFuzzyLevel=1&maxFuzzyLevel=2&categorySet=7315&view=Unified&relatedPois=off&key=${API_KEY}
      `;

    try {
      response = await (await axios.get(queryString)).data;
      res.send(response);
    } catch (error) {
      console.error(error);
    }
  })
  .get((req: Request, res: Response) => {
    res.send(response);
  });
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
