import {Entity, ManyToOne,OneToMany, PrimaryGeneratedColumn, Column} from "typeorm";
import { Atribuicao } from "./Atribuicao";
import { Pessoa } from "./Pessoa";

@Entity()

class Funcao {
	@PrimaryGeneratedColumn()
	idFuncao: number;

	@Column({length: 45})
	nome: string;

	@Column("text")
	descricao: string;

	@OneToMany(() => Atribuicao, atribuicao => atribuicao.idAtribuicao)
	atribuições: Atribuicao[];

	@ManyToOne(() => Pessoa, pessoa => pessoa.idPessoa)
	pessoa: Pessoa;


}

export { Funcao };