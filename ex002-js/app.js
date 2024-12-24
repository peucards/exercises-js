//Essa função tem como função receber a altura e largura de um terreno, retornar a área e o tipo do terreno.
function areaTerreno () {
    const largura = parseFloat(prompt('Insira aqui a largura do terreno:'));
    const comprimento = parseFloat(prompt('Agora insira o comprimento do terreno:'));
    const area = largura * comprimento;
    
    alert(`O seu terreno possui uma área de ${area}m².`)

    if (area < 100) {
        alert('O seu terreno é um terreno Popular.');
    } else if (area > 100 & area < 500) {
        alert('O seu terreno é um terreno Master.')
    } else {
        alert('O seu terreno é um terreno Vip.')
    }
}