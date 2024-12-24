//Função destinada à verificar a idade do usuário e retornar seus direitos.

function seusDireitos() {
    const idade = parseInt(prompt('Digite sua idade:'));

    if (idade >= 18) {
        alert(
            'Atenção! Você tem direito à: Carteira de motorista, Reservista(Caso homem), e ser preso.'
        );
    } else {
        alert('Atenção! Você tem direito à escola, só!!!!!');
    }
}
