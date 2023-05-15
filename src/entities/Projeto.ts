import { Entity, ManyToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { Conhecimento } from "./Conhecimento";
import { Pessoa } from "./Pessoa";

@Entity()

class Projeto {
	@PrimaryGeneratedColumn()
	idProjeto: number;

	@Column({length: 64})
	nome: string;

	@Column("text")
	descricao: string;

	@Column()
	dataInicio: Date;

	@Column()
	dataTermino: Date;

	@Column("text")
	conteudo: string;

	@ManyToMany(() => Conhecimento, conhecimento => conhecimento.idConhecimento)
	conhecimentos: Conhecimento[];

	@ManyToMany(() => Pessoa, pessoa => pessoa.idPessoa)
	participantes: Pessoa[];
}

export { Projeto };