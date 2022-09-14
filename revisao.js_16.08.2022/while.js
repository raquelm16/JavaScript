//Executa as instruções até que as condições sejam atendidas (funciona enquanto a condição é verdadeira).


//JEITO 01
let isImpar = true
while(isImpar){
    let numero = Math.floor(Math.random()*10000)
    console.log(numero)
    isImpar = numero % 2 == 1//1=ímpar, 0=par.
}//Aqui o par está como true e o ímpar como false.


//JEITO 02
do {
    let numero = Math.floor(Math.random()*10000)
    console.log(numero)
    isImpar = numero % 2 == 1
} while(isImpar)