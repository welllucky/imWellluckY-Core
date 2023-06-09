import AppDataSource from "../config/bd";
import { Projeto } from "../entities/Projeto";

const manager = AppDataSource.createEntityManager();

class ProjetoController {
    async criar(projeto: Projeto){
        const projetoSalvo = await manager.save(projeto);
        return projetoSalvo;
    }
}