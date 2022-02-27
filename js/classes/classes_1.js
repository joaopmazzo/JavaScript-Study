class Calculadora {
	constructor(numero1, numero2) {
		this.numero1 = numero1;
		this.numero2 = numero2;
	}

	get soma() {
		return this.soma();
	}
	get subtracao() {
		return this.subtracao();
	}
	get multiplicacao() {
		return this.multiplicacao();
	}
	get divisao() {
		return this.divisao();
	}

	soma() {
		return this.numero1 + this.numero2;
	}
	subtracao() {
		return this.numero1 - this.numero2;
	}
	multiplicacao() {
		return this.numero1 * this.numero2;
	}
	divisao() {
		return this.numero1 / this.numero2;
	}
}

let calculadoraSomar = new Calculadora(10, 5);
let calculadoraSubstracao = new Calculadora(20, 3);
let calculadoraMultiplicacao = new Calculadora(2, 5);
let calculadoraDivisao = new Calculadora(4, 2);

console.log("Soma: " + calculadoraSomar.soma() + " \n" +
	"Subtração: " + calculadoraSubstracao.subtracao() + " \n" +	
	"Multiplicação: " + calculadoraMultiplicacao.multiplicacao() + " \n" +
	"Divisao: " + calculadoraDivisao.divisao());