import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Pessoa } from "../entities/Pessoa";
import { Conhecimento } from "../entities/Conhecimento";
import { Curso } from "../entities/Curso";
import { Funcao } from "../entities/Funcao";
import { Projeto } from "../entities/Projeto";

const router = Router();

router.get("/", async (_req, res) => {
	await res.send("Endpoint inicial da aplicação executando com sucesso!");
});

router.get("/people", async (_req, res) => {
	const people = await AppDataSource.getRepository(Pessoa).find()
	res.status(200).json(people)
})

router.get("/people/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Pessoa).findOneBy({
		idPessoa: Number(req.params.id),
	})
	return res.status(200).send(result)
})


router.get("/knowledges", async (_req, res) => {
	const knowledges = await AppDataSource.getRepository(Conhecimento).find()
	res.status(200).json(knowledges)
})

router.get("/knowledges/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Conhecimento).findOneBy({
		idConhecimento: Number(req.params.id),
	})
	return res.status(200).send(result)
})

router.get("/courses", async (_req, res) => {
	const courses = await AppDataSource.getRepository(Curso).find()
	res.status(200).json(courses)
})

router.get("/courses/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Curso).findOneBy({
		idCurso: Number(req.params.id),
	})
	return res.status(200).send(result)
})

router.get("/jobs", async (_req, res) => {
	const jobs = await AppDataSource.getRepository(Funcao).find()
	res.status(200).json(jobs)
})

router.get("/jobs/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Funcao).findOneBy({
		idFuncao: Number(req.params.id),
	})
	return res.status(200).send(result)
})

router.get("/projects", async (_req, res) => {
	const projects = await AppDataSource.getRepository(Projeto).find()
	res.status(200).json(projects)
})

router.get("/projects/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Projeto).findOneBy({
		idProjeto: Number(req.params.id),
	})
	return res.status(200).send(result)
})

router.post("/Pessoas", async (req, res) => {
	const person = await AppDataSource.getRepository(Pessoa).create(req.body)
	const result = await AppDataSource.getRepository(Pessoa).save(person)
	return res.status(201).send(result)
})

router.post("/knowledges", async (req, res) => {
	const knowledge = await AppDataSource.getRepository(Conhecimento).create(req.body)
	const result = await AppDataSource.getRepository(Conhecimento).save(knowledge)
	return res.status(201).send(result)
})

router.post("/courses", async (req, res) => {
	const course = await AppDataSource.getRepository(Curso).create(req.body)
	const result = await AppDataSource.getRepository(Curso).save(course)
	return res.status(201).send(result)
})

router.post("/jobs", async (req, res) => {
	const job = await AppDataSource.getRepository(Funcao).create(req.body)
	const result = await AppDataSource.getRepository(Funcao).save(job)
	return res.status(201).send(result)
})

router.post("/projects", async (req, res) => {
	const project = await AppDataSource.getRepository(Projeto).create(req.body)
	const result = await AppDataSource.getRepository(Projeto).save(project)
	return res.status(201).send(result)
})

router.put("/people/:id", async (req, res) => {
	const person = await AppDataSource.getRepository(Pessoa).findOneBy({
		idPessoa: Number(req.params.id),
	})
	AppDataSource.getRepository(Pessoa).merge(person, req.body)
	const result = await AppDataSource.getRepository(Pessoa).save(person)
	return res.status(200).send(result)
})

router.put("/knowledges/:id", async (req, res) => {
	const knowledge = await AppDataSource.getRepository(Conhecimento).findOneBy({
		idConhecimento: Number(req.params.id),
	})
	AppDataSource.getRepository(Conhecimento).merge(knowledge, req.body)
	const result = await AppDataSource.getRepository(Conhecimento).save(knowledge)
	return res.status(200).send(result)
})

router.put("/courses/:id", async (req, res) => {
	const course = await AppDataSource.getRepository(Curso).findOneBy({
		idCurso: Number(req.params.id),
	})
	AppDataSource.getRepository(Curso).merge(course, req.body)
	const result = await AppDataSource.getRepository(Curso).save(course)
	return res.status(200).send(result)
})

router.put("/jobs/:id", async (req, res) => {
	const job = await AppDataSource.getRepository(Funcao).findOneBy({
		idFuncao: Number(req.params.id),
	})
	AppDataSource.getRepository(Funcao).merge(job, req.body)
	const result = await AppDataSource.getRepository(Funcao).save(job)
	return res.status(200).send(result)
})

router.put("/projects/:id", async (req, res) => {
	const project = await AppDataSource.getRepository(Projeto).findOneBy({
		idProjeto: Number(req.params.id),
	})
	AppDataSource.getRepository(Projeto).merge(project, req.body)
	const result = await AppDataSource.getRepository(Projeto).save(project)
	return res.status(200).send(result)
})

router.delete("/people/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Pessoa).delete(Number(req.params.id))
	return res.status(200).send(result)
})

export default router;