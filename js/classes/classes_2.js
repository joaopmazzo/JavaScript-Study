import {Cliente} from "./classeCliente.js"
import {ContaCorrente} from "./classeContaCorrente.js"

const cliente1 = new Cliente("Paulo", 48268869890);
const contaCorrente1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Joao", 98467768869);

contaCorrente1.depositar(-10);
const valorDepositado = contaCorrente1.depositar(500);
console.log(valorDepositado, contaCorrente1);
const valorSacado = contaCorrente1.sacar(50);
console.log(valorSacado, contaCorrente1);

const contaCorrente2 = new ContaCorrente(cliente2, 102);
contaCorrente1.transferir(200, contaCorrente2);
console.log(contaCorrente2.cliente, contaCorrente2.saldo);

console.log(ContaCorrente.numeroDeContas);