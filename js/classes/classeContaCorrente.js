import {Cliente} from "./classeCliente.js"

export class ContaCorrente {
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
	agencia;
	_cliente;

	_saldo = 0;

	set cliente(novoCliente) {
		if (novoCliente instanceof Cliente) {
			this._cliente = novoCliente;
		}
	}

	get cliente() {
		return this._cliente;
	}

	get saldo() {
		return this._saldo;
	}

	constructor(cliente, agencia) {
		this.cliente = cliente;
		this.agencia = agencia;
		ContaCorrente.numeroDeContas += 1;
	}

	sacar(valor) {
		if (this._saldo <= valor) return
		this._saldo -= valor;
		return valor;
	}

	depositar(valor) {
		if (valor <= 0) return
		this._saldo += valor;
		return valor;
	}

	transferir(valor, conta) {
		const valorSacado = this.sacar(valor);
		conta.depositar(valorSacado);
	}
}