import { Router } from "express";
import AppDataSource from "../config/bd";
import { Pessoa } from "../entities/Pessoa";

const router = Router();

router.get("/", async (_req, res) => {
	res.send("Endpoint inicial da API inicializada com sucesso!")
});

export default router;