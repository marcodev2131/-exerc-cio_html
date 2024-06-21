function Animal(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

function Cachorro(nome, idade, raca) {
    Animal.call(this, nome, idade);
    this.raca = raca;
}

function Gato(nome, idade, cor) {
    Animal.call(this, nome, idade);
    this.cor = cor;
}

function Papagaio(nome, idade, especie) {
    Animal.call(this, nome, idade);
    this.especie = especie;
}

const Rex = new Cachorro("Rex", 3, "Labrador");
const Meia = new Gato("Meia", 2, "Cinza");
const Simba = new Gato("Simba", 4, "Amarelo");
const Claudio = new Papagaio("Claudio", 5, "Arara");

console.log(Rex);
console.log(Meia);
console.log(Simba);
console.log(Claudio);
