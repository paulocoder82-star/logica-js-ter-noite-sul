// console.log("número: 1");
// console.log("número: 2");
// console.log("número: 3");
// console.log("número: 4");
// console.log("número: 5");

for (let i = 1; i <= 5; i = i + 1) {
  console.log(`número: ${i}`);
}

//exercicio - utilize o for para fazer a tabuada de 5 e 9

for (let i = 0; i <= 9; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

for (let i = 0; i <= 9; i++) {
  console.log(`9 x ${i} = ${9 * i}`);
}

// crie uma função tabuada que a operação da tabuada, ela printa no console qualquer tabuada. USE O FOR

function tabuada(operacao) {
  console.log(`Tabuada de ${operacao}`);

  for (let i = 0; i <= 9; i++) {
    console.log(`${operacao} x ${i} = ${operacao * i}`);
  }
}

tabuada(1);
tabuada(2);
tabuada(3);
tabuada(4);
tabuada(5);

// Iterando sobre arrays

const cestaDeFruta = ["banana", "uva", "morango", "abacaxi"];

console.log(cestaDeFruta[0]);
console.log(cestaDeFruta[1]);
console.log(cestaDeFruta[2]);
console.log(cestaDeFruta[3]);

//use o for para simplificar o código acima

for (let i = 0; i <= cestaDeFruta.length - 1; i++) {
  console.log(cestaDeFruta[i]);
}

// substituindo item do array de maneira direta

// cestaDeFruta[1] = "manga";

// console.log(cestaDeFruta);

//substitua uva por manga iterando sobre o array utilizando o for

for (let i = 0; i <= cestaDeFruta.length - 1; i++) {
  if (cestaDeFruta[i] === "uva") {
    cestaDeFruta[i] = "manga";
  }
}

console.log(cestaDeFruta);

const estoque = [
  {
    marca: "Nike",
    preco: 300.0,
    quantidade: 30,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Adidas",
    preco: 450.0,
    quantidade: 20,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Puma",
    preco: 550.0,
    quantidade: 60,
    tamanho: [37, 38, 39, 40],
  },
  {
    marca: "Asics",
    preco: 299.0,
    quantidade: 70,
    tamanho: [37, 38, 39, 40],
  },
];

//1- houve um erro no estoque e a quantidade de todos os tenis diminuiu em 10 tênis (reduza 10 unidades de cada tenis)
//2 - O tenis nike teve reajuste de preço para 400.00
//3 - O Asics recebeu uma nova numeração (42)

//utilize o for para ajustar esses dados

for (let i = 0; i < estoque.length; i++) {
  //1- reucao de 10 unidade para todos os tenis
  //   estoque[i].quantidade = estoque[i].quantidade - 10;
  estoque[i].quantidade -= 10;

  //nike reajuste preço 400.00
  if (estoque[i].marca === "Nike") {
    estoque[i].preco = 400.0;
  }

  //O Asics recebeu uma nova numeração (42)
  if (estoque[i].marca === "Asics") {
    estoque[i].tamanho[estoque.length] = 42;
  }
}
