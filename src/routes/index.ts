import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
	res.send("Endpoint inicial da aplicação executando com sucesso!");
});

router.get("/well", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

export default router;