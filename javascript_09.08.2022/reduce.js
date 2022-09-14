
produtos = [
    {nome: "Samsung S22", preco: 5644.55},
    {nome: "Samsung S22", preco: 2500.66},
    {nome: "Samsung A71", preco: 1987.67},
    {nome: "iPhone X", preco: 2999.32},
    {nome: "iPhone 8", preco: 2300.61},
    {nome: "iPhone 13", preco: 6200.61}
]

produtos.push({nome:"Samsung S10", preco:800})//adicionando um novo 'produto'

//TOTAL GERAL
totalProdutos = produtos.map((p) => p.preco)
                    .reduce((previous, current) => previous + current)
console.log(totalProdutos.toFixed(2))

//TOTAL MAIS CARO
totalMuitoCaro = produtos.filter(p => p.preco > 3000)
                    .map(p => p.preco)
                    .reduce((previous, current) => previous = current)
console.log(totalMuitoCaro.toFixed(2))
