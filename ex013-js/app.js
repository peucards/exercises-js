function formJS() {
    let email = document.getElementById('emailForm').value;
    let telNumber = document.getElementById('telForm').value;
    let formularioPreenchido = [email, telNumber];
    let checkedNotify = document.getElementById('check');
    let notifyPermission; // Declaração antes do if...else

    if (checkedNotify.checked) {
        notifyPermission = 'Permissão de notificações concedida.';
    } else {
        notifyPermission = 'Permissão de notificações negada.';
    }

    console.log(formularioPreenchido, notifyPermission); // console.log após o if...else
}

const btn = document.getElementById('btn');
btn.addEventListener('click', formJS);
