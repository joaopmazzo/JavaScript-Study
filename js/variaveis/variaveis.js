// var
var clima = "quente";
clima = "frio";

console.log(clima);

// let
let clima2 = "quente";
clima2 = "frio";

console.log(clima2);

// const
const clima3 = "quente";
// clima3 = "frio"; // não permite alteração da variável

console.log(clima3);

console.log('> existe x com um valor antes do bloco? ', x)
{
  var x = 0 // var é global e também local // o conceito aplicado aqui é chamado de hoisting(elevação)
}
console.log('> existe x com um valor depois do bloco? ', x)


let y = 1
// console.log('> existe y com um valor antes do bloco? ', y)
{
  let y = 0 // const e let são locais e só funcionam no escopo onde foram criadas // não ocorre hoisting com let e const
  console.log('> existe y com valor dentro do bloco? ', y)
}
console.log('> existe y com um valor antes do bloco? ', y)