/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A função deve retornar
1 se o número for par e 0 se for ímpar.
*/

const teclado = require(`prompt-sync`)();

let n1: number = parseInt(teclado(`Digite o primeiro número: `));

function verificar(n1: number): number {

    let verifique: number = n1 % 2;
    return verifique;

}
let verifique: number = verificar(n1);
if (verifique == 0) {
    console.log(`É par`)
}
else if (verifique > 0) {
  console.log(`É ímpar`)
}
else {
  console.log(`Algo deu errado!!`);
}

