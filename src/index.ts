import "reflect-metadata";
import app from "./app";
import { router, pessoaRouter } from "./routes";
import { testFunc } from "./test";

const port = process.env.PORT ?? 5000;

console.log("Iniciando a aplicação...");

const server = app.listen(port, () => {
  console.log(
    `A aplicação está sendo executada na porta ${port}.\nAcesse http://localhost:${port}\n`
  );
});

app.use("/", router);
app.use("/pessoas", pessoaRouter);

process.on("SIGINT", () => {
  server.close();

  console.log("Aplicação encerrada");
});




