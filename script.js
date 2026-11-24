// Small, framework-free mobile navigation script.
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav-links');
const icon = toggle?.querySelector('svg');
function closeMenu() {
  if (!toggle || !nav || !icon) return;
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open navigation menu');
  document.body.classList.remove('menu-open');
  icon.innerHTML = '<path d="M4 7h16M4 12h16M4 17h16"/>';
}
if (toggle && nav && icon) {
  toggle.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    if (open) {
      nav.classList.add('open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Close navigation menu');
      document.body.classList.add('menu-open');
      icon.innerHTML = '<path d="M6 6l12 12M18 6 6 18"/>';
    } else closeMenu();
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
}
document.querySelectorAll('.js-year').forEach(e => e.textContent = String(new Date().getFullYear()));


// Site-wide accessible light/dark preference, with storage fallback.
const themeToggle = document.querySelector('.theme-toggle');
function syncThemeControl() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const actionLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode';
  if (!themeToggle) return;
  themeToggle.setAttribute('aria-label', actionLabel);
  themeToggle.setAttribute('title', actionLabel);
  const label = themeToggle.querySelector('.theme-toggle-text');
  if (label) label.textContent = isLight ? 'Dark mode' : 'Light mode';
  const colorMeta = document.querySelector('meta[name="theme-color"]');
  if (colorMeta) colorMeta.setAttribute('content', isLight ? '#f7fbfc' : '#071523');
}
if (themeToggle) {
  syncThemeControl();
  themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', next);
    try { window.localStorage.setItem('evola-theme', next); } catch (_) {}
    syncThemeControl();
  });
}
