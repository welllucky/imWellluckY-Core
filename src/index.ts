import "reflect-metadata";
import app from "./app";
import router from "./routes";
import pessoaRouter from "./routes/pessoa";
import { testFunc } from "./test";

const port = process.env.PORT ?? 5000;

console.log("Iniciando a aplicação...");

const server = app.listen(port, () => {
  console.log(
    `A aplicação está sendo executada na porta ${port}.\nAcesse http://localhost:${port}`
  );
});

app.use("/", router);
app.use("/people", pessoaRouter);



process.on("SIGINT", () => {
  server.close();

  console.log("Aplicação encerrada");
});




