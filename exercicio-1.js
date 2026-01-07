// ✅ 20 Exercícios de Lógica com JavaScript (nível iniciante)

// Declare três variáveis: uma string, um number e um booleano. Exiba o tipo de cada uma usando typeof.

var meuNoteTrabalho = "Dell";
let trabalhoEsninando = true;
let meuPesoKg = 90;

// teste para saber se a variável deu certo

console.log(meuNoteTrabalho);
console.log(trabalhoEsninando);
console.log(meuPesoKg);
// saber tipo de variável

console.log(typeof meuNoteTrabalho);
console.log(typeof trabalhoEsninando);
console.log(typeof meuPesoKg);

// Crie uma variável contendo seu nome usando aspas simples, outra usando aspas duplas e outra usando template string. Mostre todas no console.

//  meu nome completo

const nome1 = "Paulo";
const nome2 = "Roberto";
const nome3 = "Sabino";
const nome4 = "de Araujo";

const meuNomeCompleto = nome1 + " " + nome2 + " " + nome3 + " " + nome4;

const meuNomeCompleto1 = `Olá meu nome é ${nome1} ${nome2} ${nome3} ${nome4}`;

console.log(meuNomeCompleto);
console.log(meuNomeCompleto1);

// Declare uma variável idade usando let, depois reatribua um novo valor para ela. Exiba antes e depois.

let minhaIdade = 43;

console.log(minhaIdade);

minhaIdade = 44;

console.log(minhaIdade);

// Tente alterar o valor de uma variável criada com const e observe o erro. Explique com um comentário no código.

// const minhaIdade = 43;

console.log(minhaIdade);

minhaIdade = 44;

console.log(minhaIdade);
// Comentário - A variável apresenta erro no console, pois em const é uma constante e portanto não pode ser alterada.

// Crie duas variáveis numéricas e exiba no console os resultados de: soma, subtração, multiplicação, divisão e resto da divisão.
let numero1 = 90;
let numero2 = 10;

const soma = numero1 + numero2;
const subtracao = numero1 - numero2;
const multiplicacao = numero1 * numero2;
const divisao = numero1 / numero2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);

// Crie uma variável nota e use operadores de comparação para verificar se a nota é maior que 7, igual a 10 e menor que 5.
let nota1 = 9;

console.log(nota1 > 7);
console.log(nota1 == 10);
console.log(nota1 < 5);

// Crie duas variáveis booleanas representando “acordou cedo” e “tomou café”. Use operadores lógicos (&&, ||, !) para testar condições.
let acordouCedo = true;
let tomouCafe = false;

// 1. Operador E (&&) - Retorna true apenas se AMBOS forem verdadeiros
console.log("Está bem disposto?", acordouCedo && tomouCafe);
// Resultado: false (porque não tomou café)

// 2. Operador OU (||) - Retorna true se pelo menos UM for verdadeiro
console.log("Vai conseguir trabalhar?", acordouCedo || tomouCafe);
// Resultado: true (porque pelo menos acordou cedo)

// 3. Operador NÃO / Negação (!) - Inverte o valor
console.log("Ainda está com sono?", !tomouCafe);

// Declare uma variável com valor undefined e outra com valor null. Mostre o tipo de cada uma.
let suportePapel = null;
let caixaFechada;

console.log(suportePapel);
console.log(caixaFechada);

// Crie um array com 5 nomes. Exiba o primeiro e o último nome usando índice.
const receitaBruaca = ["farinha de trigo", "leite", "ovos", "manteiga", "sal"];

console.log(
  "A receita para fazer uma bruaca tem os seguintes ingredientes:",
  receitaBruaca
);
console.log("Primeiro ingrediente:", receitaBruaca[0]);

console.log("Último ingrediente:", receitaBruaca[4]);

console.log(
  "Primeiro e último ingrediente:",
  receitaBruaca[0],
  receitaBruaca[4]
);

// Modifique o terceiro nome do array criado acima por outro nome. Mostre o array atualizado.
receitaBruaca[4] = "açucar";
console.log(
  "A receita para fazer uma bruaca tem os seguintes ingredientes:",
  receitaBruaca
);

// Crie um array com 3 números e mostre a soma deles usando os índices.

const numeros = [10, 20, 30];

const soma1 = numeros[0] + numeros[1] + numeros[2];

console.log("A soma dos números é:", soma1);

// Crie um objeto representando uma pessoa com nome, idade e cidade. Exiba cada propriedade separadamente.
const pessoa = { denome: "Ana Silva", idade: 28, cidade: "Fortaleza" };

console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Cidade:", pessoa.cidade);

// Adicione a esse objeto uma nova propriedade chamada profissao. Mostre o objeto atualizado.
pessoa.profissao = "professor";

console.log("Objeto atualizado:", pessoa);
// Delete a propriedade idade do objeto. Exiba o objeto novamente.
delete pessoa.idade;
console.log("Objeto deletando a idade:", pessoa);

// Crie um objeto representando um produto (nome e preço). Mostre o tipo de cada propriedade usando typeof.
const produto = {
  nome: "Guitarra",
  preco: 1500.75,
};
console.log("Dados do produto:", produto);
// Crie um array com 3 objetos representando alunos (nome e nota). Exiba apenas a nota do segundo aluno.
const alunos = [
  { nome: "João", nota: 8.5 },
  { nome: "Maria", nota: 9.2 },
  { nome: "Carlos", nota: 7.0 },
];

console.log("Nota do segundo aluno:", alunos[1].nota);

// Crie um array com tipos misturados (string, number, boolean). Exiba o tipo de cada item.
const itens = [
  "O aluno João aprovado!",
  7,
  true,
  "O aluno reprovado",
  8,
  false,
];

itens.forEach((item, index) => {
  console.log(`Posição [${index}]: Valor = ${item} | Tipo = ${typeof item}`);
});

// Use template string para exibir uma frase como: “Meu nome é X e tenho Y anos”, usando variáveis.
const nome = "Paulo";
const idade = 43;

const frase = `Meu nome é ${nome} e tenho ${idade} anos.`;

console.log(frase);

// Crie uma variável saldo e outra gasto. Use operadores matemáticos para atualizar o valor do saldo e exibir o resultado.
let saldo = 2500.0;
const gasto = 1450.5;

saldo -= gasto;
console.log(
  `Você gastou R$ ${gasto}. Seu novo saldo é: R$ ${saldo.toFixed(2)}.`
);

// Crie duas variáveis: senhaCorreta e senhaDigitada. Use operadores lógicos para verificar se a senha está correta.
const senhaCorreta = "Admin123";
const senhaDigitada = "Admin123";

if (senhaDigitada === senhaCorreta) {
  console.log("Acesso concedido! Bem-vindo.");
} else {
  console.log("Senha incorreta. Tente novamente.");
}
