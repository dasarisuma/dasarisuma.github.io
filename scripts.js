// Scroll Animation
const sections = document.querySelectorAll('.section');

const sectionInView = (section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
};

const handleScroll = () => {
    sections.forEach(section => {
        if (sectionInView(section)) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
};

window.addEventListener('scroll', handleScroll);

// Scroll-based motion effects
document.addEventListener("DOMContentLoaded", () => {
    handleScroll();  // For initial scroll position
});
