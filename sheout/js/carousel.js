export function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselPrev = document.querySelector('.carousel-prev');
    const carouselNext = document.querySelector('.carousel-next');
    let currentSlide = 0;
    function showSlide(n) {
      for (let i = 0; i < carouselItems.length; i++) {
        carouselItems[i].style.display = 'none';
      }
      carouselItems[n].style.display = 'block';
    }
    showSlide(currentSlide);
    carouselPrev.addEventListener('click', () => {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
      }
      showSlide(currentSlide);
    });
    carouselNext.addEventListener('click', () => {
      currentSlide++;
      if (currentSlide > carouselItems.length - 1) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    });
  }
  