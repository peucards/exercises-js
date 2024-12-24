//Função destinada à receber a altura e largura de um parade, e informar quantos litros de tinta serão necessários para pinta-la por inteiro.
function qtdNecessariaDeTinta() {
    const altura = parseFloat(
        prompt('Informe a altura da parede:').replace(',', '.')
    );
    const largura = parseFloat(
        prompt('Informe a largura da parede:').replace(',', '.')
    );
    const media = parseFloat(altura * largura).toFixed(2);
    alert(`A área total da parede é de ${media}m².`);
    const qtdTinta = parseFloat(media / 2).toFixed(2);
    alert(
        `A quantidade de tinta necessária para pintar toda a parde é de ${qtdTinta} litros.`
    );
}
