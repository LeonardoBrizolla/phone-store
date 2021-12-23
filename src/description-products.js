const $heart = document.querySelector('.hearts');
const $stars = document.querySelectorAll('.star');

$heart.addEventListener('click', handleClickHeart);

$stars.forEach(($star, key) => {
  if (key === 0) {
    $star.addEventListener('click', handleClickFistStar);
  } else if (key > 0 && key < 4) {
    $star.addEventListener('click', () => handleMiddleStar(key));
  } else {
    $star.addEventListener('click', handleLastStar);
  }
});

function handleClickHeart() {
  this.classList.toggle('-active');
}

function handleClickFistStar() {
  clearAllStars();
  this.classList.add('-active');
}

function handleMiddleStar(index) {
  clearAllStars();
  $stars.forEach(($star, key) => {
    if (key <= index) {
      $star.classList.add('-active');
    }
  });
}

function handleLastStar() {
  $stars.forEach(($star) => {
    $star.classList.add('-active');
  });
}

function clearAllStars() {
  $stars.forEach(($star) => {
    $star.classList.remove('-active');
  });
}
