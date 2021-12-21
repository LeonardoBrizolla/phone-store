/*
  JavaScript
    - Comportamento;
    - Interação;

  1. Pegar janela
  2. Pegar HTML -  DOM
  3. Pagar coração
  4. Adicionar evento de click + funcao ao coracao
  5. Criar funcao handleClick
  6. adicionar ao evento
*/

const $heart = window.document.querySelector('.heart');

$heart.addEventListener('click', handleClick);

function handleClick() {
  console.log('ae');
}
