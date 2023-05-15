import { Router } from "express";

const router = Router();

router.get("/", (_req, res) => {
	res.send("Endpoint inicial da aplicação executando com sucesso!");
});

router.get("/users", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.get("/knowledges", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.get("/courses", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.get("/jobs", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.get("/projects", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.post("/users", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.post("/knowledges", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.post("/courses", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.post("/jobs", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.post("/projects", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.delete("/users", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.delete("/knowledges", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.delete("/courses", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.delete("/jobs", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.delete("/projects", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.put("/users", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.put("/knowledges", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.put("/courses", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.put("/jobs", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})

router.put("/projects", (_req, res) => {
	res.send("<h1>Endpoint well da aplicação executando com sucesso!</h1>");
})


export default router;