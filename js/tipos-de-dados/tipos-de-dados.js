/*
  String

  * Cadeia de caracteres

  "" // aspas duplas
  '' // aspas simples
  `` //template literals ou template  strings
*/
console.log('João');
console.log('João disse "mas porque aspas simples?"');
console.log(`

João

`);
console.log(`a soma de 1 + 2 é: ${1 + 2}`);

/*
  Number

  * Números

  33 // inteiros
  12.5 // reais - float
  NaN //Not a Number
  Infinity // infinito
*/
console.log(``)

console.log(33);
console.log(12.5);
console.log(12.5 + 33);
console.log(12.5 / "asd");
console.log(12.5 === Infinity);

/*
  Boolean

  * Somente 2 valor

    true // verdadeiro
    false // falso
*/
console.log(``)

console.log(true);
console.log(false);

/*
  *Undefined
    * indefinido

  *null
    * nulo
    * objeto que possui nada dentro
    * diferente de indefinido
*/
console.log(`
${null === undefined}

`)

/*
  * Object
    * objeto
    * propriedades / atributos
    * funcionalidades / métodos

  { propriedade: "valor"}

*/
console.log({
  name: "João",
  idade: "21",
  andar: function () {
    console.log("andar");
  }
})

/*
  * Array (vetores)
    * Uma lista
    * Agrupamento de dados

  ["João", 21]

*/
console.log(["joão", "Paulo", "Mazzo"]);