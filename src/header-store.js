const $search = document.querySelector('[type=search]');
const $searchSVG = document.querySelector('.searchSVG');
const $closeSVG = document.querySelector('.closeSVG');

$searchSVG.addEventListener('click', () => $search.classList.add('-active'));
$closeSVG.addEventListener('click', () => $search.classList.remove('-active'));
