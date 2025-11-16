function verificar(){
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user == 'user' && password == '1234'){
        alert('ss')
        window.location.href = "index.html";
    }
    else{
        alert('Tente novamente!');
        limparCampos();
    }
}
function limparCampos() {
    document.getElementById('user').value = '';
    document.getElementById('password').value = '';
}