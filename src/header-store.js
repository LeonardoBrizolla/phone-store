const $search = document.querySelector('.input-search');
const $searchContent = document.querySelector('[data-search]');
const $iconSearch = document.querySelector('.icon.-search');
const $iconClose = document.querySelector('.icon.-close');

$iconSearch.addEventListener('click', (event) => {
  event.preventDefault();
  $search.classList.add('-active');
  $searchContent.focus();
  $searchContent.select();
});

$iconClose.addEventListener('click', (event) => {
  event.preventDefault();
  $search.classList.remove('-active');
  $searchContent.value = '';
});

$searchContent.addEventListener('focusout', () => {
  $search.classList.remove('-active');
  $searchContent.value = '';
});
