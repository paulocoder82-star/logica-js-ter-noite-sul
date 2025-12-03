//introdução a objetos

const aluno = {
  nome: "Maria",
  matricula: 243445325,
  turma: "B",
  ano: 3,
};

const pessoa = {
  nome: "Marcos",
  idade: 25,
  temCarro: true,
  casado: false,
  coresFavoritas: ["verde", "preto", "azul"],
  carro: {
    modelo: "corolla",
    ano: 2022,
    itens: ["direcao eletrica", "cvt", "banco de couro"],
  },
};

console.log(aluno);

console.log(aluno.matricula);

console.log(aluno.nome);

console.log(aluno.nome === pessoa.nome);

console.log(pessoa.coresFavoritas);
console.log(pessoa.coresFavoritas[2]);

console.log(pessoa.carro.modelo);

console.log(pessoa.carro.itens[1]);

//desafio: Crie uma variável chamada frase, e coloque uma string "Eu tenho um carro com câmbio [cvt]" - use template string

const frase = `Eu tenho um ${pessoa.carro.modelo} com câmbio ${pessoa.carro.itens[1]}`;

console.log(frase);

//substuindo valores em um objeto

pessoa.carro.ano = 2025;

console.log(pessoa);

//adicionando "ar" no itens do carro
pessoa.carro.itens[3] = "ar";

console.log(pessoa);

//deletando uma propriedade

delete pessoa.casado;

console.log(pessoa);

pessoa.profissao = "Programador";

console.log(pessoa);
