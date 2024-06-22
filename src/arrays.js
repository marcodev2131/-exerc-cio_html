const alunosENotas = [
    { nome: "Técio", nota: 8 },
    { nome: "Claudomir", nota: 5 },
    { nome: "Valter", nota: 6 },
    { nome: "Kimberly", nota: 7 },
    { nome: "Gilson", nota: 0 },
    { nome: "Genoveva", nota: 9 }
];

function filtrarAlunosAprovados(alunosENotas) {
    return alunosENotas.filter(alunosENotas => alunosENotas.nota >= 6);
}

let alunosAprovados = filtrarAlunosAprovados(alunosENotas);
console.log(alunosAprovados);