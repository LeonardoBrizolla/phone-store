let startValue = 10;
const $addCart = window.document.querySelector('.-add-cart');

$addCart.addEventListener('click', handleClick);

function handleClick() {
  const $btnCart = window.document.querySelector('[data-cart]');
  $btnCart.textContent = `Carrinho (${++startValue})`;
}
