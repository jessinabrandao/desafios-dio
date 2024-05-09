function contarVogais(string) {
    // Inicializamos o contador de vogais como 0
    let contadorVogais = 0;

    // Iteramos pela string usando um loop for...of
    for (let caractere of string) {
        // Convertemos o caractere para minúsculo para comparar com as vogais em minúsculo
        let caractereMin = caractere.toLowerCase();

        // Verificamos se o caractere atual é uma vogal
        if (caractereMin === 'a' || caractereMin === 'e' || caractereMin === 'i' || caractereMin === 'o' || caractereMin === 'u') {
            // Se for, incrementamos o contador de vogais
            contadorVogais++;
        }
    }

    // Retornamos o contador de vogais
    return contadorVogais;
}

// Testando a função
console.log(contarVogais("hello")); // Deve retornar 2
console.log(contarVogais("JavaScript")); // Deve retornar 3