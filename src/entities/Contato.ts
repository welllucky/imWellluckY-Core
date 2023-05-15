import {Entity, PrimaryGeneratedColumn, OneToMany, Column} from "typeorm";
import { Pessoa } from "./Pessoa";

@Entity()

class Contato {
	@PrimaryGeneratedColumn()
	idContato: number;

	@Column({length: 14})
	telefone: string;

	@Column({length: 256 })
	email: string;

	@OneToMany(() => Pessoa, pessoa => pessoa.idPessoa)
	pessoa: Pessoa;
}

export { Contato };