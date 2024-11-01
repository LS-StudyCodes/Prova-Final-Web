function mensagemEnviada() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const projeto = document.getElementById("projeto").value;

    if (name == "" || email == "" || projeto == ""){
        alert("Por favor, preencha os campos :)");

    } else {
        alert("Mensagem enviada para a nossa equipe. Muito obrigado! :)");
    }
}