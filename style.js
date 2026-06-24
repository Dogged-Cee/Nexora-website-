// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
themeToggle.addEventListener('click', () => {
  const isDark = body.getAttribute('data-theme') === 'dark';
  body.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '◐' : '◑';
});

// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const primaryNav = document.getElementById('primaryNav');
menuBtn.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? '✕' : '☰';
});
primaryNav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  primaryNav.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}));

// Project filter
const searchInput = document.getElementById('projectSearch');
const cards = Array.from(document.querySelectorAll('.proj-card'));
const noResults = document.getElementById('noResults');
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = card.dataset.name.includes(q);
    card.classList.toggle('hidden', !match);
    if (match) visible++;
  });
  noResults.style.display = visible === 0 ? 'block' : 'none';
});

// Contact form (front-end only placeholder)
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  formMsg.style.display = 'block';
  form.reset();
});
