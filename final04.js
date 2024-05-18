const produtos = [
    {nome:"Camisa Feminina", preço: 45.50, categoria: "Vestuário"}, 
    {nome:"Celular", preço: 2.500, categoria: "Eletrônico"},
    {nome:"Fone de Ouvido", preço: 38, categoria: "Eletrônico"},
    {nome:"Mouse", preço: 50, categoria: "Eletrônico"}
]

for (let i = 0; i < produtos.length; i++) {

    if(produtos[i].preço < 50){
        if (produtos[i].categoria === "Eletrônicos")
            console.log(produtos[i])
    }
    
}