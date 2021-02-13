let nome = window.document.getElementById('nome')
let email  = document.querySelector('#email')
let comentario = document.querySelector('#comentario')
let nomeOk = false
let emailOk = false
let comentarioOk = false

function validaNome() {
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaComentario() {
    let txtComentario = document.querySelector('#txtComentario')

    if(comentario.value.length >= 100) {
        txtComentario.innerHTML = 'O texto é muito grande, digite no máximo 100 caracteres'
        txtComentario.style.color = 'red'
        
    }else {
         txtComentario.style.display = 'none'
        
    }
}
function enviar() {
    if(nomeOk == true && emailOk == true && comentarioOk == true) {
        alert ('Formulário enviado com sucesso!')
    }else{
        alert('Preenchar o formulário corretamente')
    }
}
