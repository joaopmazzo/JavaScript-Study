import {Cliente} from "./Cliente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js"

import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {ContaSalario} from "./Conta/ContaSalario.js"

import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"

const diretor1 = new Diretor("Tiago", 97230216869, 10000);
diretor1.cadastrarSenha("Alpino12@");
const gerente1 = new Gerente("Fernanda", 89758879852, 5000);
gerente1.cadastrarSenha("Pmazzo01");
const cliente1 = new Cliente("Paulo", 48268869890);
cliente1.cadastrarSenha("123456")

const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "Alpino12@");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "Pmazzo01");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "123456");
console.log(
`diretor está logado? ${diretorEstaLogado}
gerente está logado? ${gerenteEstaLogado}
cliente está logado? ${clienteEstaLogado}`
);








// [----------ESTUDO SOBRE AS CLASSES DE CONTAS----------]
// const contaCorrente1 = new ContaCorrente(cliente1, 1001);
// contaCorrente1.depositar(500);
// contaCorrente1.sacar(100);

// const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
// contaPoupanca1.sacar(10);

// const contaSalario1 = new ContaSalario(cliente1);
// contaSalario1.depositar(100);
// contaSalario1.sacar(10);

// console.log(contaCorrente1);
// console.log(contaPoupanca1);
// console.log(contaSalario1);
