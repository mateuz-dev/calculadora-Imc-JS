document.getElementById("botao").addEventListener("click", exibirIMC)

function exibirIMC() {
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    const resultado = document.getElementById("resultado")

    if (camposValidos()){
        const imc = calcularIMC(peso, altura)
        const classificacao = classificarImc(imc)
        resultado.innerText = `Seu IMC é de: ${imc}. Isso significa que você está ${classificacao}`
    } else{
        resultado.innerText = "PREENCHA OS CAMPOS CORRETAMENTE"
    }
}


function camposValidos(){
    const nome = document.getElementById("nome").value
    const altura = document.getElementById("altura").value
    const peso = document.getElementById("peso").value
    return (nome.trim !== "" && !isNaN(peso) && !isNaN(altura))
}


function calcularIMC(peso, altura) {
    return peso / (altura * altura).toFixed(1)
}


function classificarImc(imc) {
    let classificacao = ""
    if (imc < 18.5){
        classificacao = "ABAIXO DO PESO IDEAL."
    } else if (imc >= 18.5 && imc < 24.9){
        classificacao = "no PESO IDEAL. PARABÉNS!"
    } else if (imc >= 25 && imc < 29.9){
        classificacao = "ACIMA DO PESO IDEAL."
    } else if (imc >= 30 && imc < 34.9){
        classificacao = "com OBESIDADE NÍVEL I."
    } else if (imc >= 35 && imc < 40.9){
        classificacao = "com OBESIDADE NÍVEL II."
    } else{
        classificacao = "com OBESIDADE NÍVEL III."
    }

    return classificacao
}