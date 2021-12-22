const $heart = document.querySelector('.hearts');
const $star = document.querySelector('.star');

$heart.addEventListener('click', handleClickHeart);
$star.addEventListener('click', handleClickStar);

function handleClickHeart() {
  $heart.classList.toggle('-active');
}

function handleClickStar() {
  $star.classList.toggle('-active');
}
