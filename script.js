const nome = document.getElementById("nome");
const altura = document.getElementById("altura");
const peso = document.getElementById("peso");
const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");

function calcularIMC() {

    if (nome.value != "" && altura.value != "" && peso.value != ""){
        let imc = peso.value / (altura.value * altura.value);
        imc = parseFloat(imc.toFixed(2));

        let status = "";
        if (imc < 18.5){
            status = "ABAIXO DO PESO IDEAL.";
        } else if (imc >= 18.5 && imc < 24.9){
            status = "no PESO IDEAL. PARABÉNS!";
        } else if (imc >= 25 && imc < 29.9){
            status = "ACIMA DO PESO IDEAL.";
        } else if (imc >= 30 && imc < 34.9){
            status = "com OBESIDADE NÍVEL I.";
        } else if (imc >= 35 && imc < 40.9){
            status = "com OBESIDADE NÍVEL II.";
        } else{
            status = "com OBESIDADE NÍVEL III.";
        }

        resultado.innerText = ("Seu IMC é de: " + imc + ". Isso significa que você está " + status);

    } else{
        alert ("Prencha os itens corretamente");
    }

}

botao.addEventListener("click", calcularIMC)