import express from "express";
import routes from "./src/routes/index.js";
import cors from "cors";
import connectDatabase from "./src/database/db.js";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();
connectDatabase();

app.use(
  cors({
    origin: "https://lucasloopst.github.io",
  })
);

app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
