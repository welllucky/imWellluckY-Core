import { Blob } from "buffer";
import { Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, OneToMany, Column } from "typeorm";
import { RedeSocial } from "./RedeSocial";
import { Contato } from "./Contato";
import { Projeto } from "./Projeto";
import { Linkagem } from "./Linkagem";

@Entity()
class Pessoa {
	@PrimaryGeneratedColumn()
	idPessoa: number;

	@Column({ length: 64 })
	nome: string;

	@Column()
	dataNascimento: Date;

	@Column("blob", { nullable: true })
	foto: string;

	@Column()
	isWelllucky: boolean;

	@Column()
	sexo: string;

	// @OneToMany(() => Contato, contanto => contanto.idContato, { nullable: true })
	// contatos: Contato[];

	// @OneToMany(() => Linkagem, linkagem => linkagem.idLinkagem)
	// redesSociais: Linkagem[];

	@ManyToMany(() => Projeto, projeto => projeto.idProjeto, { nullable: true })
	@JoinTable()
	projetos: Projeto[];
}

export { Pessoa };