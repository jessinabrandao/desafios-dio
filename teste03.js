const num = [2,3]
const soma = operacao("soma", num)
const subtracao = operacao ("subtracao", num)
const multiplicacao = operacao ("multiplicacao", num)
const divisao = operacao ("divisao", num)

function operacao (num){
    switch (operacao){
        case "soma":
            return num.reduce((acc,curr) => acc +curr)
        
        case "subtracao":
            return num.reduce((acc,curr) => acc - curr)

        case "multiplicacao":
            return num.reduce((acc, curr) => acc * curr)

        case "divisao":
            return num.reduce((acc,curr) => acc / curr)
    }
}


console.log("soma", operacao(soma))
