const slidesPlugin = (slides, activeSlide = 0) => {

    slides[activeSlide].classList.add('active');

    const clearActiveClasses = () => {
        slides.forEach(slide => {
            slide.classList.remove('active');
        })
    }
    
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            clearActiveClasses();
            slide.classList.add('active');
        });
    })
}

const slides = document.querySelectorAll('.slide');

slidesPlugin(slides, 0);
