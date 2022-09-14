frutas = ['uva', 'maça', 'pera', 'laranja', 'bergamota', 'mimosa']

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[frutas.length-1]);
console.log(frutas[frutas.length-2]);

//imprimindo
for(let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}

//forma 1 de imprimir de tras pra frente
for(let i=0; i<frutas.length; i++){
    console.log(frutas[frutas.length -1 -i]); //valor de 6(quantidades) -1 = 5 (posiçoes)
    //posiçoes menos o i: 5-0=5, 5-1=4, 5-2=3...
}

//forma 2
for(let i = frutas.length-1; i>=0; i--){
    console.log(frutas[i]);
}
