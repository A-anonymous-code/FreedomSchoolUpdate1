// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('open');
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu) navMenu.classList.remove('active');
    if (menuToggle) menuToggle.classList.remove('open');
  });
});

const ctaButtons = document.querySelectorAll('.cta-btn, .cta-btn-large');
ctaButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'about.html';
  });
});

const applyButtons = document.querySelectorAll('.apply-btn, .apply-btn-large, .network-btn');
applyButtons.forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'admission.html';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const currentPage = window.location.pathname.split('/').pop() || 'freedom.html';
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active-link');
    }
  });
});

window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});