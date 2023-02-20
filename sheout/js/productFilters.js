export function initProductFilters() {
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
            }
  