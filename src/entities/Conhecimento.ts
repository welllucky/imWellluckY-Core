import {Entity, JoinTable, ManyToMany,PrimaryGeneratedColumn, ManyToOne, Column} from "typeorm";
import { Curso } from "./Curso";
import { Empresa } from "./Empresa";
import { Projeto } from "./Projeto";

@Entity()

class Conhecimento {
	@PrimaryGeneratedColumn()
	idConhecimento: number;

	@Column()
	nome: string;

	@Column()
	anoAdquirido: Date;

	@Column()
	ferramenta: boolean;

	@Column("blob")
	foto: string;

	@ManyToOne(() => Curso, (curso) => curso.idCurso, {nullable: true})
	curso: Curso;

	@ManyToOne(() => Empresa, empresa => empresa.idEmpresa)
	empresa: Empresa

	@ManyToMany(() => Projeto, projeto => projeto.idProjeto)
	@JoinTable()
	projetos: Projeto[];
}

export { Conhecimento };