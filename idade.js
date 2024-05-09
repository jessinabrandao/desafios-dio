function calcularIdade(anoNascimento, anoAtual){
    return anoAtual - anoNascimento
}

const anoNascimento = 1990
const anoAtual = 2024
const calculo = calcularIdade(anoNascimento, anoAtual)

console.log(calculo)