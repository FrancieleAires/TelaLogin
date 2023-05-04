function cadastrar(){
localStorage.setItem("email", document.getElementById("email").value) 
localStorage.setItem("senha", document.getElementById("senha").value) 
alert("Cadastro concluído com sucesso!");
}

function entrar(){ 
localStorage.setItem("gmail", document.getElementById ("gmail").value) 
localStorage.setItem("password", document.getElementById ("password").value) 

}

function exibir(){
	if(localStorage.getItem("email") == localStorage.getItem("gmail") && localStorage.getItem("senha") ==localStorage.getItem("password"))
	{
		document.getElementById("errado").textContent = "Parabens ganhou MB";	
	}

}

