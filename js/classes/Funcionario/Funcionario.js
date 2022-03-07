export class Funcionario {
	constructor(nome, cpf, salario) {
		this._nome = nome;
		this._cpf = cpf;
		this._salario = salario;
		this._senha;

		this._bonificacao = 1;
	}

	autenticar(senha) {
		return senha == this._senha;
	}

	cadastrarSenha(senha) {
		this._senha = senha;
	}
}