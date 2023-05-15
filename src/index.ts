import "reflect-metadata"
import app from "./app";
import { AppDataSource } from "./data-source";
const port = process.env.PORT ?? 3000;

AppDataSource.initialize()
	.then(() => {
		// here you can start to work with your database
	})
	.catch(error => console.log(error));


app.get("/", (_req, res) => {
  res.send("Apicação executando com sucesso!");
});

const server = app.listen(port, () => {
  console.log(
    `A aplicação está sendo executada na porta ${port}.\nAcesse http://localhost:${port}`
  );
});



process.on("SIGINT", () => {
  server.close();

  console.log("Aplicação encerrada");
});
