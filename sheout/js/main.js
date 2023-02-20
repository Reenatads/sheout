document.addEventListener('DOMContentLoaded', function() {

    // Navigation Menu
    const navMenu = document.querySelector('.nav-menu');
    const navToggle = document.querySelector('.nav-toggle');
  
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('nav-menu--show');
    });
  
    // Carousel
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
  
    // Product Filters
    const filterLinks = document.querySelectorAll('.filter-link');
    const productCards = document.querySelectorAll('.product-card');
  
    filterLinks.forEach((link) => {
      link.addEventListener('click', () => {
        filterLinks.forEach((link) => link.classList.remove('filter-link--active'));
        link.classList.add('filter-link--active');
  
        const filterValue = link.getAttribute('data-filter');
  
        productCards.forEach((card) => {
          if (card.getAttribute('data-category') === filterValue || filterValue === 'all') {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  
    // Sticky Header
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > headerHeight) {
        header.classList.add('header--sticky');
      } else {
        header.classList.remove('header--sticky');
      }
    });
  
  });
  