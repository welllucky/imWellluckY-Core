import { Router } from "express";
import { AppDataSource } from "../config/bd";
import { Projeto } from "../entities/Projeto";
import { constants } from "buffer";

const router = Router();

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

router.post("/projects", async (req, res) => {
	const project = await AppDataSource.getRepository(Projeto).create(req.body)
	const result = await AppDataSource.getRepository(Projeto).save(project)
	return res.status(201).send(result)
})

router.put("/projects/:id", async (req, res) => {
	const project = await AppDataSource.getRepository(Projeto).findOneBy({
		idProjeto: Number(req.params.id),
	})
	AppDataSource.getRepository(Projeto).merge(project, req.body)
	const result = await AppDataSource.getRepository(Projeto).save(project)
	return res.status(200).send(result)
})

router.delete("/projects/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Projeto).delete(Number(req.params.id))
	return res.status(200).send(result)
})

export default router;