const nome = "Hello"

function inverterString(nome){
    return nome.split('').reverse().join('')
}

console.log(inverterString(nome))