const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const resultado = document.getElementById("resultado");

function calcularIMC() {

    if (nome.value != "" && altura.value != "" && peso.value != "" &&)

    const imc = (parseFloat(altura) * parseFloat(altura) / parseFloat(peso));

    resultado.textContent = imc;
}

resultado.addEventListener("click", calcularIMC)