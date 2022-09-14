bk = 35.46
console.log('BK: ' + bk);

if (bk <= 35){
    bk_desc = bk * 0.95
    //bk_desc2 = bk-((bk*5)/100)
    //bk_desc3 = bk - (bk * 0.05)
    console.log('Desconto de 5%. Valor com desconto: ' + bk_desc);
} else if (bk > 35 && bk < 45){
    bk_desc = bk * 0.90
    //bk_desc = bk - (bk * 0.10)
    console.log('Desconto de 10%. Valor com desconto: ' + bk_desc);
} else if (bk >= 45){
    bk_desc = bk * 0.85
    console.log('Desconto de 15%. Valor com desconto: ' + bk_desc);
}