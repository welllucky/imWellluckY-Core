import * as express from "express";
import * as cors from "cors";
import * as logger from "morgan";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));

app.use("/", router);
app.use("/well", router);

export default app;
