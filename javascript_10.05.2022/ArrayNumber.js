let numeros = []

let n = 3
for(let i=0; i<n; i++){
    let exponenciacao = 2**(n-i)
    numeros.push(exponenciacao)
    console.log("Base:" + 2 + " expoente: " +(n-i));//isso explica o que aconte com o expoente
}

//numeros[0] = 9
//numeros[1] = 4
//numeros[2] = 2
//console.log(numeros);
//console.log(numeros[0], numeros[1], numeros[2]);


console.log("Vetor Original", numeros);
for(let i=0; i<n; i++){
    numeros[i] *= 2
}
console.log("Vetor Dobrado", numeros);
