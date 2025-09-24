document.getElementById('year').textContent = new Date().getFullYear();

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
  hamburger.classList.toggle('open');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
});

document.querySelectorAll('.mobile-link, .contact-mobile').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const textElement = document.getElementById('typing-text');
const sentences = [
    "Junior Front‑End Web Developer.",
    " I love JavaScript, arrays, and conditions 🚀"
];

let sentenceIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentSentence = sentences[sentenceIndex];
    let displayText = "";

    if (isDeleting) {
        displayText = currentSentence.substring(0, charIndex - 1);
        charIndex--;
    } else {
        displayText = currentSentence.substring(0, charIndex + 1);
        charIndex++;
    }

    textElement.textContent = displayText;

    let typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === currentSentence.length) {
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        sentenceIndex = (sentenceIndex + 1) % sentences.length;
    }

    setTimeout(type, typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});