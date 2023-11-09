function calcular() {
    // Obtém o valor que irá pagar e a mensalidade selecionada
    var valor = parseFloat(document.getElementById('valor').value);
    var mensalidade = parseFloat(document.getElementById('quantidade').value);

    // Calcula o desconto
    var desconto = valor - mensalidade;

    // Exibe o resultado na tabela
    document.getElementById('text').innerHTML = "Desconto: R$" + desconto.toFixed(2);
}

function limpar() {
    // Limpa os campos de valor e mensalidade
    document.getElementById('valor').value = "";
    document.getElementById('quantidade').selectedIndex = 0;

    // Limpa a tabela de resultados
    document.getElementById('text').innerHTML = "";
}
