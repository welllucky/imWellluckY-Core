import { Entity, PrimaryGeneratedColumn, OneToMany, Column, ManyToMany } from "typeorm";

import { Conhecimento } from "./Conhecimento";

@Entity()

class Curso {
	@PrimaryGeneratedColumn()
	idCurso: number;

	@Column({length: 124, nullable: false})
	nome: string;

	@Column({length: 256})
	descricao: string;

	@Column({length: 64, nullable: false})
	lugar: string;

	@Column({nullable: false})
	dataInicio: Date;

	@Column()
	dataTermino: Date;

	@Column("blob")
	foto: string;

	@OneToMany(() => Conhecimento, conhecimento => conhecimento.idConhecimento)
	conhecimentos: Conhecimento[];
}

export { Curso };