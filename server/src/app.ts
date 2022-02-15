import express, { Application, Request, Response, urlencoded } from "express";
const cors = require("cors");
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app: Application = express();
app.use(express.json());

app.use(cors());
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("test");
});

app.post("/post_data", async (req: Request, res: Response) => {
  let { formData } = req.body;
  console.log("the form data: ", formData);
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
