import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./data-source";
import { testFunc } from "./test";
const port = process.env.PORT ?? 3000;

console.log("Iniciando a aplicação...");
AppDataSource.initialize()
  .then(() => {
    console.log("Inicialização do banco de dados concluída com sucesso!");
  })
  .catch((error) => {
    console.log("Ocorreu um erro ao inicializar o banco de dados: ", error);
  })

const server = app.listen(port, () => {
  console.log(
    `A aplicação está sendo executada na porta ${port}.\nAcesse http://localhost:${port}`
  );
});

process.on("SIGINT", () => {
  server.close();

  console.log("Aplicação encerrada");
});
