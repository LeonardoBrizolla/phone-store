const $inputSearch = document.querySelector('.input-search');
const $content = $inputSearch.querySelector('.content');
const $iconSearch = $inputSearch.querySelector('.icon.-search');
const $iconClose = $inputSearch.querySelector('.icon.-close');

$iconSearch.addEventListener('click', (event) => handleClickOpenSearch(event));
$iconClose.addEventListener('click', (event) => handleClickCloseSearch(event));

function handleClickOpenSearch(event) {
  event.preventDefault();

  $inputSearch.classList.add('-active');
  $content.focus();
  $content.select();
}

function handleClickCloseSearch(event) {
  event.preventDefault();

  $inputSearch.classList.remove('-active');
  $content.value = '';

  $content.addEventListener('focusout', () => {
    $inputSearch.classList.remove('-active');
    $content.value = '';
  });
}
