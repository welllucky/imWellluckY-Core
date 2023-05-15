import { Blob } from "buffer";
import {Entity, OneToMany, PrimaryGeneratedColumn, Column} from "typeorm";
import { Conhecimento } from "./Conhecimento";
import { Atribuicao } from "./Atribuicao";

Entity()

class Empresa {
	@PrimaryGeneratedColumn()
	idEmpresa: number;

	@Column({length: 45})
	nome: string;

	@Column("blob")
	foto: string;

	// @OneToMany(() => Conhecimento, conhecimento => conhecimento.idConhecimento)
	// conhecimentos: Conhecimento[];

	// @OneToMany(() => Atribuicao, atribuicao => atribuicao.idAtribuicao)
	// atribuicoes: Atribuicao[];
}

export { Empresa };