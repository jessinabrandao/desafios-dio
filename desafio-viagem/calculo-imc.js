function calcularImc (peso, altura){
    return peso / Math.pow(altura,2)
}

function classificadorImc (imc){
    if (imc <18.5){
        return ("Você está abaixo do peso")
    }
    else if (imc>=18.5 && imc <=25){
        return ("Você está com o peso normal")
    }
    else if (imc >25 && imc <=30){
        return ("Você está acima do peso")
    }
    else if (imc >30 && imc <=40){
        return ("Você está obeso")
    }
    else{return ("Você está em estado grave")}
}


const peso = 67
const altura = 1.60
const imc = calcularImc(peso, altura)
console.log(classificadorImc(imc))


