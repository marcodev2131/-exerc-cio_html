function validarFormulario() {
    var valorA = parseFloat(document.getElementById('numeroA').value);
    var valorB = parseFloat(document.getElementById('numeroB').value);

    if (validar(valorA, valorB)) {
        exibirMensagem(true, "Formulário válido!");
    } else {
        exibirMensagem(false, "Formulário inválido! O número B deve ser maior que o número A.");
    }
}

function validar(valorA, valorB) {
    return !isNaN(valorA) && !isNaN(valorB) && valorB > valorA;
}

function exibirMensagem(valido, mensagem) {
    if (valido) {
        alert(mensagem);
        numeroA.value = '';
        numeroB.value = '';
    } else {
        alert(mensagem);
    }
}