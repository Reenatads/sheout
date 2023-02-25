export function initStickyHeader() {
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
}