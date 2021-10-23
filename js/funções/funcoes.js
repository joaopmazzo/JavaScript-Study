/*
  Function() constructor

  * expressão new
  * criar um novo objeto
  * this keyword
*/

function Person(name) {
  this.name = name
  this.walk = function () {
    return this.name + " está andando"
  }
}
const joao = new Person("João")
const paulo = new Person("Paulo")
console.log(joao.walk())
console.log(paulo.walk())