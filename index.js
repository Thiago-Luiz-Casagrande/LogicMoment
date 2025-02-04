let modelos = [];
let anos = [];
let valores = [];

function cadastrarCarro(modelo, ano, valor) {
  modelos.push(modelo);
  anos.push(ano);
  valores.push(valor);
}
function indiceCarroMaisBarato() {
  let indice = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] < valores[indice]) {
      indice = i;
    }
  }
  return indice;
}
function indiceCarroMaisCaro() {
  let indice = 0;
  for (let i = 0; i < valores.length; i++) {
    if (valores[i] > valores[indice]) {
      indice = i;
    }
  }
  return indice;
}
function calcularMediaValores() {
  let total = 0;
  for (let i = 0; i < valores.length; i++) {
    total += valores[i];
  }
  return total / valores.length;
}

cadastrarCarro("Onix", 2023, 50000);
cadastrarCarro("Siena", 2010, 27000);
cadastrarCarro("Hilux", 2020, 170000);

let indiceMaisBarato = indiceCarroMaisBarato();
let indiceMaisCaro = indiceCarroMaisCaro();

console.log("Carro mais Barato:");
console.log("Modelo: ", modelos[indiceMaisBarato]);
console.log("Ano: ", anos[indiceMaisBarato]);
console.log("Valor: ", valores[indiceMaisBarato]);

console.log("\nCarro mais Caro:");
console.log("Modelo: ", modelos[indiceMaisCaro]);
console.log("Ano: ", anos[indiceMaisCaro]);
console.log("Valor: ", valores[indiceMaisCaro]);

console.log("Média dos valores dos carros: ", calcularMediaValores());
