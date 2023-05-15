import { Entity, OneToMany, PrimaryGeneratedColumn, Column } from "typeorm";
import { Pessoa } from "./Pessoa";
import { Linkagem } from "./Linkagem";

@Entity()
class RedeSocial {
	@PrimaryGeneratedColumn()
	idRedeSocial: number;

	@Column({ length: 45, nullable: false })
	nome: string;

	@Column("blob", { nullable: false })
	logo: string;

	@OneToMany(() => Linkagem, linkagem => linkagem.idLinkagem)
	redesSociais: Linkagem[];
}

export { RedeSocial };
