matriz = []
for(let i=0; i<3; i++){
    x = Math.floor(Math.random()*10)
    y = Math.floor(Math.random()*10)
    z = Math.floor(Math.random()*10)
    //console.log("Pontos:", x, y, z);
    matriz.push([x, y, z])
    //console.log(matriz);//pode ser posto fora
}

//console.log("|", matriz[0][0], matriz[0][1], matriz[0][2], "|");
//console.log("|", matriz[1][0], matriz[1][1], matriz[1][2], "|")
//console.log("|", matriz[2][0], matriz[2][1], matriz[2][2], "|")

//assim e muito mais economico
for(i=0; i<3; i++){
            console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|");
}
