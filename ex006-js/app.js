//Função para receber o nome do Aluno, suas 4 notas durante o ano, e retornar o nome, a média das notas e exibir se o aluno foi aprovado ou reprovado.
function relatorioAluno() {
    const aluno = String(prompt('Qual o nome do aluno?'));
    let nota_1 = parseFloat(
        prompt('Informe a primeira nota do Aluno:').replace(',', '.')
    );
    let nota_2 = parseFloat(
        prompt('Informe a segunda nota do Aluno:').replace(',', '.')
    );
    let nota_3 = parseFloat(
        prompt('Informe a terceira nota do Aluno:').replace(',', '.')
    );
    let nota_4 = parseFloat(
        prompt('Informe a quarta nota do Aluno:').replace(',', '.')
    );
    const media = (nota_1 + nota_2 + nota_3 + nota_4) / 4;
    let situacaoDoAluno = media >= 7 ? 'Aprovado' : 'Reprovado';

    alert(
        `A média do aluno ${aluno} é de ${media} pontos. Ele foi ${situacaoDoAluno}.`
    );
}
