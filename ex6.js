class Calculadora {
    adicao(n1, n2) {
        return n1 + n2;
    }

    subtracao(n1, n2) {
        return n1 - n2;
    }

    multiplicacao(n1, n2) {
        return n1 * n2;
    }

    divisao(n1, n2) {
        if (n2 === 0) {
            return "Erro: divisão por zero";
        }
        return n1 / n2;
    }

    calcularExpressao(escolha, n1, n2) {
        if (escolha === "ad") {
            return this.adicao(n1, n2);
        } else if (escolha === "sub") {
            return this.subtracao(n1, n2);
        } else if (escolha === "multi") {
            return this.multiplicacao(n1, n2);
        } else if (escolha === "div") {
            return this.divisao(n1, n2);
        } else {
            return "Operação inválida";
        }
    }
}

const calc = new Calculadora();
const escolha = "ad"; 
const n1 = 10;
const n2 = 2;
console.log(calc.calcularExpressao(escolha, n1, n2));