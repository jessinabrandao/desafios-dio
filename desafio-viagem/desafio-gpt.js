const valor1 = 2
const valor2 = 5
const escolha = 1
const calculo = calculadora(valor1, valor2)



function calculadora (valor1, valor2){
    if (escolha === 1){
        return valor1 + valor2
    }

    else if (escolha === 2){
       return valor1 - valor2
    }

    else if (escolha === 3){
      return  valor1 * valor2
    }

    else {
      return  valor1 / valor2
    }
}

console.log(calculo)

const peso = 67
const altura = 1.60
const imc = calcularImc(peso, altura)


function calcularImc(peso, altua){
  return  peso / Math.pow(altura,2)
}

console.log(imc)

let pokemon = [5, 2, 1, 8, 9]

function organizador (pokemon){
    
}
