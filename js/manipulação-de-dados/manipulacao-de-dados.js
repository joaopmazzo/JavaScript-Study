/*
  Prototype

  * prototype-based language
  * prototype chain
  * __proto__
*/

/*
  Type conversion (typecasting) vs Type coersion

  * Alteração de um tipo de dado para outro tipo
*/

// coersion
console.log('9' + 5)

// conversion
console.log(Number('9') + 5)

// separação
console.log("-------------------")


/* 
  Manipulando Strings e Números  
*/

// Transformar String em Número e Número em String 

let string1 = "123"
console.log(Number(string1))
let number1 = 321
console.log(String(number1))

// separação
console.log("-------------------")

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word1 = "paralelepipedo"
console.log(word1.length)

let number2 = 1234
console.log(String(number2).length)

// separação
console.log("-------------------")

// Transformar um número quebrado em 2 casas decimais e trocar porto por vírgula

let number3 = 123123123.15126753
console.log(number3.toFixed(2).replace(".", ","))

// separação
console.log("-------------------")

// Transforando letras minúsculas em maiúsculas e transformando letras maiúsculas em minúsculas

let word2 = "hello, world!"
console.log(word2.toUpperCase())

let word3 = "HEY, WORLD!"
console.log(word3.toLowerCase())

// separação
console.log("-------------------")

// Separando um texto que contem espaços, em um novo array onde cada texto é uma posição do array, e depois, transformando o array em um texto e onde eram espaços foi colocado "_"

let phrase1 = "Eu quero viver a Vida!"
let myArray1 = phrase1.split(" ")
console.log(myArray1)
let phraseWithUnderscore = myArray1.join("_")
console.log(phraseWithUnderscore)

// separação
console.log("-------------------")

// Verificando se o texto contém a palavra Vida

let phrase2 = "Eu quero viver a Vida"
console.log(phrase2.includes("Vida"))
console.log(phrase2.includes("vida"))

// separação
console.log("-------------------")

// Criando array com construtor

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// separação
console.log("-------------------")

// Contar elementos de um array

console.log([
  'a',
  { type: "Array" },
  function () { return "alo" },
].length)

console.log([
  'a',
  { type: "Array" },
  function () { return "alo" },
][2]())

console.log([
  'a',
  { type: "Array" },
  function () { return "alo" },
][1].type)

// separação
console.log("-------------------")

// Transformando uma cadeia de caracteres em elementos de um array

let word4 = "manipulação"
console.log(Array.from(word4))

// separação
console.log("-------------------")

/*
  Manipulando Arrays
*/

let techs = ["html", "css", "js"]

// Adiciando um item no fim

techs.push("java")
console.log(techs)

// Adiciando no começo

techs.unshift("php")
console.log(techs)

// Removendo do fim

techs.pop()
console.log(techs)

// Removendo do começo

techs.shift()
console.log(techs)

// Pegando somente alguns elemento do Array

console.log(techs.slice(1, 3))

// Removendo 1 ou mais items em qualquer posição do Array

techs.splice(1, 2)
console.log(techs)

// encontrar a posição de um elemento no Array

techs.push("java")
techs.push("python")

let index = techs.indexOf("java")

console.log(techs)
console.log(index)

techs.splice(index, 2)
console.log(techs)