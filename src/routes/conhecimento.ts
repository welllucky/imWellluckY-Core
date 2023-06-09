import { Router } from "express";
import AppDataSource from "../config/bd";
import { Conhecimento } from "../entities/Conhecimento";

const conhecimentoRouter = Router();

conhecimentoRouter.get("/knowledges", async (_req, res) => {
	const knowledges = await AppDataSource.getRepository(Conhecimento).find()
	res.status(200).json(knowledges)
})

conhecimentoRouter.get("/knowledges/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Conhecimento).findOneBy({
		idConhecimento: Number(req.params.id),
	})
	return res.status(200).send(result)
})

conhecimentoRouter.post("/knowledges", async (req, res) => {
	const knowledge = await AppDataSource.getRepository(Conhecimento).create(req.body)
	const result = await AppDataSource.getRepository(Conhecimento).save(knowledge)
	return res.status(201).send(result)
})

conhecimentoRouter.put("/knowledges/:id", async (req, res) => {
	const knowledge = await AppDataSource.getRepository(Conhecimento).findOneBy({
		idConhecimento: Number(req.params.id),
	})
	AppDataSource.getRepository(Conhecimento).merge(knowledge, req.body)
	const result = await AppDataSource.getRepository(Conhecimento).save(knowledge)
	return res.status(200).send(result)
})

conhecimentoRouter.delete("/knowledges/:id", async (req, res) => {
    const result = await AppDataSource.getRepository(Conhecimento).delete(Number(req.params.id))
    return res.status(200).send(result)
}
)

export default conhecimentoRouter;