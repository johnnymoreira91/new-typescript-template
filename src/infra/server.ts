import express, { Application, json } from "express";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();

app.use(json());
app.use(helmet());
app.use(cors());

export {
  app
};
