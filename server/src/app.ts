import express, { Application, Request, Response, urlencoded } from "express";
import { documenuData } from "./data";
const cors = require("cors");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app: Application = express();
app.use(express.json());

app.use(cors());
const PORT = 5000;

let data: Object;
app.post("/post_data", async (req: Request, res: Response) => {
  let { formData } = req.body;
  console.log("the form data: ", formData);

  //call the api with the form data received
  // emulate timeout
  console.log("making api call");
  setTimeout(() => {
    console.log("data received");
    data = documenuData;
  }, 2000);
});

/**
 * listen to get request of front end
 * give the data to front end
 */

app.get("/get_data", async (req: Request, res: Response) => {
  res.json(data);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
