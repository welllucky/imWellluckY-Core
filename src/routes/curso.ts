import { Router } from "express";
import  AppDataSource  from "../config/bd";
import { Curso } from "../entities/Curso";

const cursoRouter = Router();

cursoRouter.get("/courses", async (_req, res) => {
	const courses = await AppDataSource.getRepository(Curso).find()
	res.status(200).json(courses)
})

cursoRouter.get("/courses/:id", async (req, res) => {
	const result = await AppDataSource.getRepository(Curso).findOneBy({
		idCurso: Number(req.params.id),
	})
	return res.status(200).send(result)
})

cursoRouter.post("/courses", async (req, res) => {
    const course = await AppDataSource.getRepository(Curso).create(req.body)
    const result = await AppDataSource.getRepository(Curso).save(course)
    return res.status(201).send(result)
})

cursoRouter.put("/courses/:id", async (req, res) => {
	const course = await AppDataSource.getRepository(Curso).findOneBy({
		idCurso: Number(req.params.id),
	})
	AppDataSource.getRepository(Curso).merge(course, req.body)
	const result = await AppDataSource.getRepository(Curso).save(course)
	return res.status(200).send(result)
})

cursoRouter.delete("/courses/:id", async (req, res) => {
    const result = await AppDataSource.getRepository(Curso).delete(Number(req.params.id))
    return res.status(200).send(result)
})

export default cursoRouter;