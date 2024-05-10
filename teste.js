const peso = 55
const altura = 1.60
const imc = calcularImc(peso,altura)

function calcularImc(peso,altura){
    return (peso * Math.pow(altura, 2))
}

function classificadorImc(imc){
    switch (true){
        case imc <18.5:
            return("Você está em estado grave")
        case imc>=18.5 && imc <=25:
            return ("Você está com o peso normal")
        case imc >25 && imc <=30:
            return ("Você está acima do peso")
        case imc >30 && imc <=40:
            return ("Você está obeso")
            case imc >40:
                return ("Você está em estado grave")
    }
}

console.log(classificadorImc(imc))