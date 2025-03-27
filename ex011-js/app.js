//Função destinada à verificar a estação do ano de acordo com o mês informado.
function estacoesDoAno() {
    const mesAtual = parseInt(
        prompt('Informe em qual mês estamos (em número) :')
    );
    if ((mesAtual == 12) | (mesAtual <= 3)) {
        alert(
            'Então estamos no verâo, que se inicia em dezembro e termina em março.'
        );
    } else if ((mesAtual > 3) & (mesAtual <= 5)) {
        alert(
            'Então estamos no outono, que se inicia em março e termina em junho.'
        );
    } else if ((mesAtual > 5) & (mesAtual <= 9)) {
        alert(
            'Então estamos no inverno, que se inicia em junho e termina em setembro.'
        );
    } else {
        alert(
            'Então estamos na primavera, que se inicia em novembro e termina em dezembro.'
        );
    }
}
