const nota1 = 7
const nota2 = 9
const nota3 = 6
media = (nota1 + nota2 + nota3) / 3

if (media <5){
    console.log("Média menor que 5, reprovação")
}

else if (media >=5 && media <=7){
    console.log("Média entre 5 e 7, resuperação")
}
else{console.log("Média acima de 7, passou de semestre")}