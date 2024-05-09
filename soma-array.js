function somaArray(num) {
    let soma = 0; // Inicializamos uma variável para armazenar a soma dos números
    
    // Iteramos sobre cada elemento do array
    for (let i = 0; i < num.length; i++) {
        // Adicionamos o valor do elemento atual à variável soma
        soma += num[i];
    }
    
    // Retornamos o resultado da soma
    return soma;
}

// Testando a função
const numeros = [1, 2, 3, 4, 5];
const resultado = somaArray(numeros);
console.log(resultado); // Deve imprimir 15