//Função do jogo do número secreto
function jogoSecretNum() {
    alert('Bem-vindo ao jogo do número secreto!');

    let maxNum = 5000;
    let secretNum = parseInt(Math.random() * maxNum + 1);
    let tentativas = 1;
    let adivinhacao;

    while (adivinhacao != secretNum) {
        let adivinhacao = prompt('Digite um número entre 1 e 5000:');
        if (adivinhacao == secretNum) {
            break;
        } else if (adivinhacao > secretNum) {
            alert(`O número secreto é menor que ${adivinhacao}`);
        } else {
            alert(`O número secreto é maior que ${adivinhacao}.`);
        }
        tentativas++;
    }
    let stringTentativa =
        tentativas > 1
            ? `${tentativas} tentativas`
            : `apenas ${tentativas} tentativa!`;
    alert(
        `Isso aí! você acertou o número secreto (${secretNum}) com ${stringTentativa}`
    );
}
