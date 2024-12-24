//Valor do Dolar e do Real
const valorDolar = parseFloat(6.2932);
const valorReal = parseFloat(0.1643);

//Função para converter real para dolar

function conversorParaDolar() {
    const numParaDolar = parseFloat(
        prompt('Digite o valor em R$ à ser convertido para dolar:')
    );
    let convertidoParaDolar = numParaDolar * valorReal;
    alert(`R$${numParaDolar} equivale à $${convertidoParaDolar.toFixed(2)}.`);
}

//Função para converter dolar para real

function conversorParaReal() {
    const numParaReal = parseInt(
        prompt('Digite o valor em $ à ser convertido para real:')
    );
    let convertidoParaReal = numParaReal * valorDolar;
    alert(`$${numParaReal} equivale à $${convertidoParaReal.toFixed(2)}.`);
}
