//Função para ler um número e retornar o sucessor e antecessor do mesmo.

function antecessorEsucessor () {
    const num = parseInt(prompt('Digite um número:'));
    const sucessor = num + 1;
    const antecessor = num -1;

    alert(`O antecessor de ${num} é ${antecessor}, e o sucessor é ${sucessor}.`);
}