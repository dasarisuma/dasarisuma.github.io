// Smooth scrolling and animation reveal
document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling for navigation
  document.querySelectorAll('.nav-bar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Scroll animation for sections
  const sections = document.querySelectorAll('.section');
  const revealSection = function () {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      if (sectionTop < viewportHeight - 100) {
        section.style.opacity = 1;
        section.style.transform = 'translateY(0)';
      }
    });
  };

  window.addEventListener('scroll', revealSection);
  revealSection();
});
