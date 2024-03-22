function adicionar() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 + numero2;
    document.getElementById('resultado').innerText = 'Resultado da adição: ' + resultado;
}

function subtrair() {
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    var resultado = numero1 - numero2;
    document.getElementById('resultado').innerText = 'Resultado da subtração: ' + resultado;
}
