class Retangulo {
    largura;
    altura;

    constructor(largura, altura){
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea(){
        return this.largura * this.altura;
    }

    calcularPerimetro (){
        return 2 * (this.largura + this.altura);
    }
}

const lala = new Retangulo(20, 40);
console.log(lala);
console.log(lala.calcularArea()); // Saída: 228
console.log(lala.calcularPerimetro()); // Saída: 62