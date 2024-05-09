function verificarPrimo(num) {
    if (num <= 1) {
        return false; // Números menores ou iguais a 1 não são primos
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Se houver um divisor diferente de 1 e num, o número não é primo
        }
    }
    
    return true; // Se nenhum divisor diferente de 1 e num for encontrado, o número é primo
}

const num = 7;
const resultado = verificarPrimo(num);
console.log(resultado); // Deve imprimir true