const $addCart = document.querySelector('.-add-cart');
let startValue = 10;

$addCart.addEventListener('click', handleClick);

function handleClick() {
  const $btnCart = document.querySelector('[data-cart]');
  $btnCart.textContent = `Carrinho (${++startValue})`;
}
