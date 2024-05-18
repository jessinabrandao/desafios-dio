const numeros = [9, 10, 4, 6, 2, 8,1]
let numeroPar = 0
let numeroImpar = 0

for (let i = 0; i < numeros.length; i++) {
    const num = numeros[i];


    if(num % 2 ===0){
        if(num > numeroPar){
            numeroPar = num
        }
    }
    else{
        if(numeroImpar === 0 ){
            numeroImpar = num
        }else if(num < numeroImpar){
            numeroImpar = num
        }
    }
    
}

console.log(numeroPar)
console.log(numeroImpar)