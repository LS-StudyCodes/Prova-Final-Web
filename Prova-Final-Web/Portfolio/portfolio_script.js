const portfolioGrid = document.querySelector('.portfolio-grid');

function handleResize() {
    if (window.innerWidth <= 768) {
        portfolioGrid.classList.add('flex-wrap');
    } else {
        portfolioGrid.classList.remove('flex-wrap');
    }
}

window.addEventListener('resize', handleResize);
handleResize();