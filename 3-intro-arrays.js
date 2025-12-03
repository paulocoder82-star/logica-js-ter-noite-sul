//assuntos que já aprendemos:

// tipos de dados primitivo - string, number, booleano, undefined, null
// variações da string - aspas duplas, aspas simples, crase (template string)
// criacao de variáveis - var, let, const
//diferença do let e const
// reatribuicao de valores na variavel
// operadores matemáticos
// operadores de comparação
// operadores lógico (e, ou, inverso)
// propriedade typeof
// introdução a arrays: acessando dados, substituindo dados
// instroducao a objetos : acessando dados, criando propriedades, deletando propriedades.

//assunto: introdução a arrays (listas)

const frutas = ["laranja", "morango", "manga", "uva"];

console.log(frutas);

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[0]);
console.log(frutas[4 - 2]);
console.log(frutas[0] === "banana");

const objeto = "dindin" || "geladinho";

const resultado = objeto === "chupchup";

console.log(resultado);

//substituir o valor no array

frutas[2] = "banana";

console.log(frutas);

frutas[4] = "manga";
console.log(frutas);

frutas[6] = "fruta do conde";
console.log(frutas);

console.log(frutas[5]);

//quantidade de itens de um array

console.log(frutas.length);

console.log(frutas[frutas.length - 1]);
