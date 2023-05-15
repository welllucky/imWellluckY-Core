import e = require("express");
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Funcao } from "./Funcao";
import { Empresa } from "./Empresa";

@Entity()

class Atribuicao {
	@PrimaryGeneratedColumn()
	idAtribuicao: number;

	@Column({length: 45, nullable: false })
	nome: string;

	@Column("tinytext")
	descricao: string;

	@Column()
	dataInicio: Date;

	@Column()
	dataTermino: Date;

	@ManyToOne(() => Funcao, funcao => funcao.idFuncao)
	função: Funcao;

	@ManyToOne(() => Empresa, empresa => empresa.idEmpresa)
	empresa: Empresa;
}

export { Atribuicao };