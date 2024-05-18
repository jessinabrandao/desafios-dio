const notas = [9, 5, 7, 8 ,2, 6]
let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];

    soma = soma + nota

}


const media = soma/notas.length

if (media < 5){
    return console.log("Reprovado")
}
else {
    return console.log("aprovado")}
