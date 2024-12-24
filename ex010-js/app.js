//Função para verificar se um número é impar ou par.
function imparPar() {
    const num = parseInt(prompt('Insira aqui um número inteiro:'));
    const resto = num % 2;

    if (resto == 0) {
        alert(`${num} é um numero par.`);
    } else {
        alert(`${num} é um número impar.`);
    }
}
