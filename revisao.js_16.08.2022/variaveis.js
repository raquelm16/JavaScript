let numeroInteiro = 10
console.log(numeroInteiro, typeof(numeroInteiro))//tipo de dado. Number, string, boolean. 

let numeroReal = 10.50
console.log(numeroReal, typeof(numeroReal))

let nome = 'Mônica'
console.log(nome, typeof(nome))

let isVazio = nome == ""//Atribuindo um valor e comparando conteúdo.
console.log(isVazio, typeof(isVazio));

let isNumber = numeroInteiro == '10'//== compara conteúdo, === compara o tipo.
console.log(isNumber, typeof(isNumber));

const PORT = 3000
const URI = `HTTP://localhost:${PORT}` //a crase permite juntar uma variável no próprio texto.
console.log(URI)