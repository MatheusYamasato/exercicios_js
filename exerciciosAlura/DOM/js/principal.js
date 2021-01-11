var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";
/* ------------------------------------------------------------ */
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");
    var tdImc = paciente.querySelector(".info-imc");
    
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    
    var alturaEhValida = true;
    var pesoEhValido = true;
    
    if (peso <= 0 || peso >= 1000) {
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;

        paciente.classList.add("paciente-invalido");
    }
    
    if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if (pesoEhValido && alturaEhValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    } else {
        tdImc.textContent = "Altura e/ou peso inválidos!";  
    }

}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", (event) => {
    // parando o evento padrão do botão, que é recarregar a página
    event.preventDefault();
    
    // selecionando o formulário para pegarmos o valor de cada input e/ou campo
    var form = document.querySelector("#form-adiciona");

    // pegando o valor de cada input
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    // criando uma tag TR
    var pacienteTr = document.createElement("tr");


    // criando uma tag TD
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    // atribuindo o conteúdo da tag Td ao input que colocamos no formulario
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    // colocando na tag Tr os filhos TD
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    
    // selecionando a tabela
    var tabela = document.querySelector("#tabela-pacientes");

    // colocando na tabela (no form) a tag tr com todos os seus td's
    tabela.appendChild(pacienteTr)

    
})
