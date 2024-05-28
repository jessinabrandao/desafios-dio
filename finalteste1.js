class carro{
    marca;
    modelo;
    ano;

    constructor(marca, modelo, ano){
        this.marca = marca
        this.modelo = modelo
        this.ano = ano
    }

}

const uno = new carro('fiat', 'lalala', 2024)
console.log(uno)