let produto = "Soja"
let regiao = "Sul"

switch (regiao) {
    case 'Sul':
        console.log('Região SUL, ', 'Produto: ', produto + '.');
        break;
    case 'Norte':
        console.log('Região NORTE, ', 'Produto: ', produto + '.');
        break;
    default:
        console.log('Produto sem região.');
        break;
}