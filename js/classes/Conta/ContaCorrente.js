import {Conta} from "./Conta.js"

export class ContaCorrente extends Conta {
	/*
	 É utilizada a serquilha para "proteger" atributos, podendo alterar o saldo apenas chamando o metodo
	em sua classe "raiz";
	 Um ponto importante é que isso ainda não foi aplicado oficialmente, porém algumas bibliotecas já
	aderiram para testes, como versões acima do node 12;
	 Logo é uma conversão utilizarmos (_) antes destes atributos, na qual foi defenida pela comunidade.
	 Está convensão não deixa o campo realmente privado, pois podemos alterar, porém enquanto a proposta de
	campos privado não é oficialmente implementada, a convensão é utilizarmos (_) antes dos atributos;
	*/
	static numeroDeContas = 0;
	_saldo = 0;
	constructor(cliente, agencia) {
		super(0, cliente, agencia);
		ContaCorrente.numeroDeContas += 1;
	}

	// sobrescreve o comportamento do metodo sacar() da classe Conta
	sacar(valor) {
		let taxa = 1.1;
		return super._sacar(valor, taxa);
	}
}