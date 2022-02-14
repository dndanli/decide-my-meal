import express, { Application, Request, Response } from "express";
require("dotenv").config();

const API_KEY = process.env.API_KEY;

const app: Application = express();
const PORT = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
