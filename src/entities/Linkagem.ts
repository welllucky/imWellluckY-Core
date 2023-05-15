import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	ManyToOne,
	JoinColumn,
} from "typeorm";

import { Pessoa } from "./Pessoa";
import { RedeSocial } from "./RedeSocial";

@Entity()
class Linkagem {
	@PrimaryGeneratedColumn()
	idLinkagem: number;

	@Column({ length: 256, nullable: false })
	link: string;

	@ManyToOne(() => Pessoa, pessoa => pessoa.idPessoa)
	pessoa: Pessoa;

	@ManyToOne(() => RedeSocial, redeSocial => redeSocial.idRedeSocial)
	redeSocial: RedeSocial;
}

export { Linkagem };
