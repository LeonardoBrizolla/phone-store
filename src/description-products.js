const $heart = document.querySelector('.hearts');

$heart.addEventListener('click', handleClick);

function handleClick() {
  $heart.classList.toggle('-active');
}

const $stars = document.querySelectorAll('.star');

$stars.forEach(($star) => {
  $star.addEventListener('click', () => {
    if ($star.src == 'http://localhost:5500/assets/star-unfill.png') {
      $star.src = '../assets/star-fill.png';
    } else {
      $star.src = '../assets/star-unfill.png';
    }
  });
});
