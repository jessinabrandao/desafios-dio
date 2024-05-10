class circulo {
    raio;

    constructor(raio){
        this.raio = raio
    }

    calcularArea(){
        return Math.PI * this.raio * this.raio
    }

    calcularPerimetro (){
        return  2 * Math.PI * this.raio
    }
}

const lala = new circulo(23)
console.log(lala.calcularArea())
console.log(lala.calcularPerimetro())