import { Router } from "express";
import AppDataSource from "../config/bd";
import { Funcao } from "../entities/Funcao";

const funcaoRouter = Router();

funcaoRouter.get("/jobs", async (_req, res) => {
    const jobs = await AppDataSource.getRepository(Funcao).find()
    res.status(200).json(jobs)
})

funcaoRouter.get("/jobs/:id", async (req, res) => {
    const result = await AppDataSource.getRepository(Funcao).findOneBy({
        idFuncao: Number(req.params.id),
    })
    return res.status(200).send(result)
})

funcaoRouter.post("/jobs", async (req, res) => {
    const job = await AppDataSource.getRepository(Funcao).create(req.body)
    const result = await AppDataSource.getRepository(Funcao).save(job)
    return res.status(201).send(result)
})

funcaoRouter.put("/jobs/:id", async (req, res) => {
    const job = await AppDataSource.getRepository(Funcao).findOneBy({
        idFuncao: Number(req.params.id),
    })
    AppDataSource.getRepository(Funcao).merge(job, req.body)
    const result = await AppDataSource.getRepository(Funcao).save(job)
    return res.status(200).send(result)
})

funcaoRouter.delete("/jobs/:id", async (req, res) => {
    const result = await AppDataSource.getRepository(Funcao).delete(Number(req.params.id))
    return res.status(200).send(result)
})

export default funcaoRouter;
