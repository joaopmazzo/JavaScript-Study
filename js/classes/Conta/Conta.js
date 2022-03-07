// classe abstrata
export class Conta {
	constructor(saldoInicial , cliente, agencia) {
		if (this.constructor == Conta) {
			throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata");
		}

		this._saldo = saldoInicial;
		this._cliente = cliente;
		this._agencia = agencia;
	}

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

	// método abstrato
	sacar(valor) {
		throw new Error("O método sacar é abstrato")
	}

	_sacar(valor, taxa) {
		const valorSacado = valor * taxa;
		if (this._saldo >= valorSacado) {
			this._saldo -= valorSacado;			
			return valorSacado;
		}
		return 0;
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