import { Router } from "express";
import AppDataSource from "../config/bd";
import { Pessoa } from "../entities/Pessoa";

const pessoaRouter = Router();

pessoaRouter.get("/pessoas", async (_req, res) => {
	const people = await AppDataSource.getRepository(Pessoa).find()
	res.status(200).json(people)
})

pessoaRouter.get("/pessoas/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Pessoa).findOneBy({
		idPessoa: Number(req.params.id),
	})
	return res.status(200).send(result)
})

pessoaRouter.post("/pessoas", async (req, res) => {
	const person = await AppDataSource.getRepository(Pessoa).create(req.body)
	const result = await AppDataSource.getRepository(Pessoa).save(person)
	return res.status(201).send(result)
})

pessoaRouter.put("/pessoas/:id", async (req, res) => {
	const person = await AppDataSource.getRepository(Pessoa).findOneBy({
		idPessoa: Number(req.params.id),
	})
	AppDataSource.getRepository(Pessoa).merge(person, req.body)
	const result = await AppDataSource.getRepository(Pessoa).save(person)
	return res.status(200).send(result)
})

pessoaRouter.delete("/pessoas/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Pessoa).delete(Number(req.params.id))
	return res.status(200).send(result)
})

export default pessoaRouter;