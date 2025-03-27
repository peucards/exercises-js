//Função para criar uma tabuada
function tabuada() {
    const num = prompt('Informe o número:');
    for (var i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
