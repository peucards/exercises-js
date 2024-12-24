//Função para simular um atendimento de uma loja, onde você informa o produto e lhe é retornado o preço, e a opção de aplicar um cupom de desconto.
function sistemaCupons() {
    const produto = String(prompt('Qual o produto desejado?'));
    const precoProduto = parseFloat(Math.random() * 30 + 1).toFixed(2);

    alert(
        `Nós temos o produto desejado, o mesmo está custando ${precoProduto}.`
    );

    const cupons = ['cupom10', 'cupom20', 'cupom30'];
    const promptDoCupom = String(
        prompt('Possui algum cupom de desconto? insira aqui:').toLowerCase()
    );
    const cupomValido = cupons.some((cupom) => promptDoCupom.includes(cupom));

    if (cupomValido) {
        const valorFinal = parseFloat(
            precoProduto - precoProduto * 0.1
        ).toFixed(2);
        alert(
            `O cupom utilizado é válido! Você obteve 10% de desconto, o valor final do produto ficou de R$${valorFinal}.`
        );
    } else if (promptDoCupom === null) {
        alert(
            `Sem um cupom de desconto, o valor do produto permanece o mesmo, R$${precoProduto}.`
        );
    } else {
        alert('Cupom inválido.');
    }
}
