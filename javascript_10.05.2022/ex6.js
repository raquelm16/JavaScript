let matriz = []
console.log('Original')
for(let i=0; i<3; i++){
    let x = Math.floor(Math.random()*10)
    let y = Math.floor(Math.random()*10)
    let z = Math.floor(Math.random()*10)
    console.log(x,y,z);
    matriz.push([x,y,z])
}

console.log('Diagonal principal dobrada')
for(let i=0; i<3; i++){//linha
    for(let j =0; j < 3; j++){//coluna
        if (i == j){//se a posiçao da linha=coluna
            matriz[i][j]*=2
        }
    }        
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|");
}