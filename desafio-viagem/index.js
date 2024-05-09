const precoEtanol = 5.79
const precoGasolina = 6.66
const combustivel = "Gasolina"
const gastoCombustivel = 10
const distancia = 100


if (combustivel == "Gasolina"){
    const valorViagem = (distancia/gastoCombustivel) * precoGasolina
    console.log("O valor da viagem é " + valorViagem.toFixed(2))
}
else if (combustivel == "Etanol"){
    const valorViagem = (distancia/gastoCombustivel) * precoEtanol
    console.log ("O valor da viagem é " + valorViagem.toFixed(2))
}



