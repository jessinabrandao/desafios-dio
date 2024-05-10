class car {
    marca;
    cor;
    gastoKm;

    constructor(marca, cor, gastoKm){
        this.marca = marca
        this.cor = cor
        this.gastoKm = gastoKm
    }

    calcularTrajeto(distanciaKm, preco){
        return distanciaKm * this.gastoKm * preco
    }
}

const uno = new car ('Fiat', 'Branco', 1/12)
const distanciaKm = 70
const preco = 5
console.log(uno.calcularTrajeto(distanciaKm, preco))
