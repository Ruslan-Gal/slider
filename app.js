function slidesPlugin(activeSlideNum = 2) {
  const slides = document.querySelectorAll('.slide');

  slides[activeSlideNum].classList.add('active', 'color');

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      clearActiveClasses();

      slide.classList.add('active', 'color');
    });
  });

  function clearActiveClasses() {
    slides.forEach((slide) => {
      slide.classList.remove('active', 'color');
    });
  }
}

slidesPlugin();
