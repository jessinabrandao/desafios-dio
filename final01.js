const notas = [ 9,8,7,4,6]
let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota
    
}

const media = soma / notas.length

if(media<5){
    return console.log("Reprovado")
}

else if (media>5){
    return console.log("Aprovado")
}



console.log(media)

