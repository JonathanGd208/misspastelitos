const slider = document.getElementById('slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const totalSlides = slider.children.length;
let currentIndex = 0;
let intervalId = null;

function goToSlide(index) {
  const slideWidth = slider.clientWidth;
  slider.style.transform = `translateX(-${slideWidth * index}px)`;
  currentIndex = index;
}

function nextSlide() {
  const newIndex = (currentIndex + 1) % totalSlides;
  goToSlide(newIndex);
}

function prevSlide() {
  const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  goToSlide(newIndex);
}

function startAutoSlide() {
  intervalId = setInterval(nextSlide, 4000);
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

nextBtn.addEventListener('click', () => {
  stopAutoSlide();
  nextSlide();
  startAutoSlide();
});

prevBtn.addEventListener('click', () => {
  stopAutoSlide();
  prevSlide();
  startAutoSlide();
});

window.addEventListener('resize', () => {
  goToSlide(currentIndex); // Reajustar al tamaño nuevo
});

startAutoSlide();



