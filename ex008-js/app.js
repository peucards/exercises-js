//Função para calcular o aluguel dos carros
function aluguelCarros() {
    let kmPercorridos = parseFloat(
        prompt('Quantos KM o cliente percorreu utilziando o veículo?').replace(
            ',',
            '.'
        )
    );
    let diasAlugados = parseInt(
        prompt('E por quantos dias o carro foi alugado?')
    );
    let totalPagar = parseFloat(kmPercorridos * 5.45 + diasAlugados * 90);

    alert(
        `O cliente alugou um veículo durante ${diasAlugados} dias e percorreu ${kmPercorridos}KM, totalizando R$${totalPagar}.`
    );
}
