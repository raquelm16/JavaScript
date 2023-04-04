//tipo lista de menu
let opcao = 'uva' //vai imprimir o case 'uva'


switch (opcao) {
    case 'uva':
       console.log('Opção selecionada é Uva');
        break; //sem esse brake a terminal imprimiria o case uva e o case laranja
case 'laranja':
    console.log('Opção selecionada é Laranja');
    break;
    case 'Maçã':
        console.log('Opção selecionada é Maçã');
        break;
    default: //quando não ouvir a opção na lista
        console.log('Opção inválida');
        break;
}
