const nums = [10,2];


function operacao(nums) {
    return nums.reduce((acc, curr) => acc * curr);
}

const soma = operacao(nums);
console.log(soma);