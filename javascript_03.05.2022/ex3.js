funcionarios = 5
totalmedia = 0

for(i=0; i<1; i++){
    //let salario = Math.random()*10000
    //totalmedia += salario
    //console.log(i, salario.toFixed(2))

    let salario1 = Math.random()*1000
    let salario2 = Math.random()*1000
    let salario3 = Math.random()*1000
    let salario4 = Math.random()*1000
    let salario5 = Math.random()*1000
    let media = (salario1 + salario2 + salario3 + salario4 + salario5)/5
    totalmedia = media / funcionarios
    console.log("Os salários são:",salario1.toFixed(2),",",salario2.toFixed(2),",",salario3.toFixed(2),",",salario4.toFixed(2),"e",salario5.toFixed(2),". A média total dos salários é: ", totalmedia.toFixed(2));
}
//media = totalmedia / n
//console.log(media.toFixed(2))