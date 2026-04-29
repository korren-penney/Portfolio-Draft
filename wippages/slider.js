/**
 * Slider Logic for Korren Penney's Portfolio
 * Handles horizontal translation of the timeline-wrapper
 */

let currentSlide = 0;
const wrapper = document.getElementById('sliderWrapper');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slides = document.querySelectorAll('.timeline-slide');
const totalSlides = slides.length;

function updateSlider() {
    const offset = -currentSlide * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
}

// Event Listeners for Buttons
nextBtn.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0; // Loop back to the first slide
    }
    updateSlider();
});

prevBtn.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Loop to the last slide
    }
    updateSlider();
});

// Optional: Keyboard Navigation (Left/Right Arrows)
document.addEventListener('keydown', (e) => {
    if (e.key === "ArrowLeft") prevBtn.click();
    if (e.key === "ArrowRight") nextBtn.click();
});