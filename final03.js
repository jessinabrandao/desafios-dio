const numeros = [10, 8, 30, 2, 6, 9, 12]

let maiorPar = 0
let menorImpar = 0

for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];

    if(num % 2 === 0){
        if ( num > maiorPar){
            maiorPar = num
        }
    }
    else{
        if (menorImpar === 0){
            menorImpar = num
        }
        else if(num < menorImpar){
            menorImpar = num
        }
    }
}
console.log(menorImpar)
console.log(maiorPar)


