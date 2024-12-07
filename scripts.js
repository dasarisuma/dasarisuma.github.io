document.addEventListener('DOMContentLoaded', function () {
  // Smooth scrolling
  document.querySelectorAll('.horizontal-nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Reveal sections on scroll
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
