import express from "express";
import cors from "cors";

// import dotenv from "dotenv";

// dotenv.config();

const app = express();

const port = process.env.PORT;

if (!port) throw new Error("Port not specified, app did not start");

app.use(cors({ origin: "*" }));

app.use("/", (req, res, next) => {
  const date = new Date();
  const resString = `From Heroku container: Current time is ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  res.status(200).json({ timestamp: resString }).send();
});

app.listen(port, () => {
  console.log("App started on port:" + port);
});
