import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import { router } from "./routes";

import AppDataSource from "./config/bd";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

AppDataSource.initialize()
    .then(() => {
        console.log("Conexão estabelecida com o banco de dados");
    })
    .catch((error) => {
        console.log("Ocorreu um erro ao inicializar o banco de dados: ", error);
    })

export default app;
