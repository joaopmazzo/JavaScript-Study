/*
Ser autenticável significa ter o método autenticar
*/

export class SistemaAutenticacao {
	static login(autenticavel, senha) {
		if (SistemaAutenticacao.isAutenticavel(autenticavel)) {
			return autenticavel.autenticar(senha);		
		}
		return false;
	}

	// realiza uma pesquisa de chave e valor em nossa classe e verifica se a mesma é uma função e retorna um booleano
	static isAutenticavel(autenticavel) {
		return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
	}
}