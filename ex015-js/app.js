//Criar um código para receber o E-mail, a senha, se o usuário aceitou os termos ou não, e se o usuário deseja manter a conta conectada ou não, alertar se a senha tem menos de 6 caractéres, e no final exibir no console os dados colocados pelo usuário.

// Função principal
function main() {
    // Declaração de variáveis:
    // E-mail
    const email = document.getElementById('emailInput').value;

    // Senha
    const password = document.getElementById('passwordInput').value;

    // Termos
    const terms = document.getElementById('terms');

    // Mantenha-me conectado
    const saveData = document.getElementById('saveData');

    // Verificar se o usuário aceitou os termos
    let verificarTermo;

    // Verificar se o usuário aceitou manter-se conectado ao site
    let verificarSaveData;
    // Estruturas de verificação:

    // Estrutura de verificação: verifica se a senha possuí menos de 6 palavras e alerta o usuário
    if (password.length < 6) {
        alert('Ei!!! Sua senha deve ter pelo menos 6 caractéres!');
        return;
    }
    // Estrutura de verificação: verifica se o usuário aceitou os termos
    if (terms.checked) {
        verificarTermo = 'O usuário concordou com os termos do site.';
    } else {
        alert(
            'Olá! Caso discorde com nossos termos, infelizmente não podemos criar sua conta. Obrigado pela compreensão.'
        );
        return;
    }

    // Estrutura de verificação: verifica se o usuário concordou em manter sua conta conectada ao site
    if (saveData.checked) {
        verificarSaveData =
            'O usuário concordou manter a conta conectada ao site.';
    } else {
        verificarSaveData =
            'O usuário não concordou manter a conta conectada ao site.';
    }

    // Declarando o array final para exibir no console os dados.
    const fullForms = [email, password, verificarTermo, verificarSaveData];

    // Imprimindo no console os dados
    console.log(fullForms);
}

const btn = document.getElementById('btn');
btn.addEventListener('click', main);
