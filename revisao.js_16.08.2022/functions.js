//blocos de códigos. Chamados somente quando precisar.

//JEITO 01
function somar(a,b){
    return a + b
}
console.log(somar(30,40));


//JEITO 02
const somar2 = function(a=30,b=20,c=10){
    return a + b + c
}
console.log(somar2(b=50))//b tá passando como o primeiro parâmetro, que é o a. Não se prenda aos nomes das variáveis, b podia ter outro nome.


//JEITO 03
const somar3 = (x=50, y=80) => {//igual, mais limpo.
    return x + y
}
console.log(somar3(jacaré=20, onça=70));