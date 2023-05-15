import { Router } from "express";

const router = Router();

router.get("/", async (_req, res) => {
	res.send("Endpoint inicial da API inicializada com sucesso!") 
});

export default router;