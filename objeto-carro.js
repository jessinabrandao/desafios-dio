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
console.log(uno.calcularTrajeto(70,5))
