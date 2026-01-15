//arrays
const tecnologias = [" HTML", "CSS", "JavaScript", "React", "Node.js"];
console.log(tecnologias);

console.log(tecnologias[2]);
// vai aparecer no console: "javaScript", pois na sequência do arrays.

//Função construtora

const frutas = new Array("banana", "uva", "morango");

console.log(frutas);
console.log(frutas[frutas.length - 1]);

//iterar pelo array (PASSEAR PELOS ITENS DO ARRAY)

for (let i = 0; i < tecnologias.length; i++) {
  console.log(tecnologias[i]);
}

//Métodos de arrays

// push() - Adicionar um item no final array.
frutas.push("manga");
frutas.push("abacaxi");

console.log(frutas);

// pop() - Remove o ultimo item do array.

tecnologias.pop("HTML");

// unshift() - Adiciona o item no inicio do array

tecnologias.unshift("TailwindCSS");
console.log(tecnologias);

// shift() - Remove o item no inicio do array
tecnologias.shift();
tecnologias.shift();

//splice - Adiciona, remove ou substitue elementos em uma posição específica
let palavras = [
  ["sim", "não"],
  ["positivo", "negativo"],
];
console.log(palavras[1][1]);

let letras = ["A", "B", "C", "D", "E"];

console.log(letras);

// letras.splice(2, 1, "X", "Y", "Z", [1, 2, 3]);
//está comentado arrays acima, mas ela apresenta no console a junção das letras.

letras.splice(3, 0, "X");
console.log(letras);

//explicaçao plus
console.log(typeof "alguma coisa");
console.log(typeof 100);
console.log(typeof { nome: "Rodrigo", idade: 30 });
console.log(typeof [1, 2, 3]);

console.log(letras);

const professor = { nome: " Rodrigo" };

//slice() - Retorna uma cópia da parte do array sem modificar o array original

const carros = ["hilux", "civic", "corolla", "porsche", "hr-v"];

const doisCarros = carros.slice(2, 4);

console.log(doisCarros);

//Exercício métodos arrays
// Crie um array de objetos (um array de tenis - propriedades livre)

// 1 - Adiciona um item no final - push()
// 2 - Remove o item no inicio - shift()
// 3 - Pega qualquer item no meio desse array e deleta - splice(2,1)
// 4 - Substitui um item no meio e adiciona 2 novos tenis - splice(3,0, {},{})
// 5 - Pega uma fatia qualquer desse array - slice(3,5)

const tenis = [
  { marca: "Adidas", modelo: "esporte", cor: "branco", tamanh0: 42 },
  { marca: "Nike", modelo: "radical", cor: "preto", tamanh0: 40 },
  { marca: "Puma", modelo: "social", cor: "azul", tamanh0: 41 },
  { marca: "OLPK", modelo: "rs-x", cor: "amarelo", tamanh0: 43 },
];

console.log(tenis);
// 1 - Adiciona um item no final - push()
tenis.push({
  marca: "Oasis",
  modelo: "sapatenis",
  cor: "vermelho",
  tamanh0: 44,
});
console.log(tenis);

// 2 - Remove o item no inicio - shift()
tenis.shift();

// 3 - Pega qualquer item no meio desse array e deleta - splice(2,1)
tenis.splice(2, 1);

// 4 - Substitui um item no meio e adiciona 2 novos tenis - splice(3,0, {},{})
tenis.splice(
  3,
  0,
  { marca: "Vans", modelo: "Old Skool", tamanho: 39, cor: "Preto/Branco" },
  {
    marca: "Converse",
    modelo: "All Star Chuck Taylor",
    tamanho: 37,
    cor: "Vermelho",
  }
);

// 5 - Pega uma fatia qualquer desse array - slice(3,5)
const fatiaTenis = tenis.slice(3, 5);

console.log(fatiaTenis);

// Métodos avançados
// map() - cria um novo array aplicando uma função em cada elemento.
const meuNumeros = [2, 3, 4, 5, 6, 7];

const numerosDobrados = meuNumeros.map((item) => {
  console.log(item);
  return item * 2;
});
console.log(numerosDobrados);

// Exercicio
// triplique apenas os números pares usando map
const meuNumeros1 = [-2, -1, 0, 1, 2];
// impar numero % 2 !== 0
// par numero % 2 === 0
// verifique é o mesmo que IF
// se for par multiplica por 3

const numerosTriplicados = meuNumeros1.map((item) => {
  if (item % 2 === 0) {
    return item * 3;
  } else {
    return item;
  }
});
console.log(numerosTriplicados);

// filter() - Retorna um novo array apenas com os elementos que atendem a uma condição

const outrosNumeros = [-10, -4, -2, 0, 1, 2, 4, 6];

const maioresQueDois = outrosNumeros.filter((item) => {
  return item > 2;
});
console.log(maioresQueDois);

//retorne apenas os numeros pares e dobrados

const numerosParesDobrados = outrosNumeros
  .filter((item) => {
    return item % 2 === 0;
  })
  .map((item) => {
    return item * 2;
  });

console.log(numerosParesDobrados);

// find() - Retorna o primeiro elemento que satifaz a condição

let numeros1 = [10, 20, 30, 40, 50];

const encontrado = numeros1.find((item) => {
  return item > 30;
});

console.log(encontrado);
