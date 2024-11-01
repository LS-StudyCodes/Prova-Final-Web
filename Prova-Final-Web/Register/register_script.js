const name1 = document.getElementById("name").value;
function validarCadastro(){
    if (name1.value == null && name1.lenght < 3) {
        alert("Nome não inserido!");
        return false;
    } else if (document.getElementById("email").innerText == null) {
        alert("Email não inserido!");
        return false;
    } else if(document.getElementById("password1").value != document.getElementById("password2").value){
        alert("As senhas não conferem!");
        return false;
    } else if (document.getElementById("dataNascimento").innerText == null) {
        alert("Data de nascimento não inserida!");
        return false;
    } else {
        alert("Cadastro realizado com sucesso!")
        location.href = "../../Prova-Final-Web/Portfolio/Portfolio.html"
    }
}