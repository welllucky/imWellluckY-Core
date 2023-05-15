import { Curso } from "./entities/Curso";
import "reflect-metadata";
import { AppDataSource } from "./config/bd";

export const testFunc = () => {
	AppDataSource.initialize()
		.then(async connection => {
			console.log("Iniciando a conexão com o banco de dados...")
			console.log("Inserindo um novo curso no banco de dados...");
			const curso = new Curso();
			curso.nome = "Curso teste";
			curso.descricao = "Isso é um teste ";
			curso.lugar = "Casa";
			curso.dataInicio = new Date();
			curso.dataTermino = new Date();
			curso.foto = "/teste/123/teste";
			await connection.manager.save(curso);
			console.log("Salvando o novo curso com o index: " + curso.idCurso);
			console.log("Carregando os Cursos do banco de dados...");
			const cursos = await connection.manager.find(Curso);
			console.log("Cursos carregados: ", cursos);
			console.log(
				"Here you can setup and run express/koa/any other framework.",
			);
		})
		.catch(error => console.log(error));
};
