(() => {
  const root = document.querySelector('.lp-carousel');
  if (!root) return;
  const slides = [...root.querySelectorAll('.lp-slide')];
  const dots = [...root.querySelectorAll('.lp-slide-dot')];
  const play = root.querySelector('.lp-play');
  const status = root.querySelector('.lp-carousel-status');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0, timer, paused = reduced.matches, hovering = false, focused = false;
  function syncPlay() {
    play.setAttribute('aria-label', paused ? 'Start automatic rotation' : 'Pause automatic rotation');
    play.querySelector('.lp-play-label').textContent = paused ? 'Play' : 'Pause';
    play.firstElementChild.textContent = paused ? '▶' : '❚❚';
  }
  function schedule() {
    clearTimeout(timer);
    if (!paused && !hovering && !focused && !document.hidden) {
      timer = setTimeout(() => { show(active + 1, false); schedule(); }, 6000);
    }
  }
  function show(index, manual) {
    active = (index + slides.length) % slides.length;
    root.dataset.active = active;
    slides.forEach((slide, i) => {
      const on = i === active;
      slide.classList.toggle('is-active', on);
      slide.inert = !on;
      if (on) slide.removeAttribute('aria-hidden'); else slide.setAttribute('aria-hidden', 'true');
      if (on) dots[i].setAttribute('aria-current', 'true'); else dots[i].removeAttribute('aria-current');
    });
    root.querySelector('.lp-slide-count').textContent = `${String(active + 1).padStart(2, '0')} / 04`;
    if (manual) {
      paused = true;
      syncPlay();
      status.textContent = slides[active].getAttribute('aria-label');
    }
    schedule();
  }
  root.querySelector('.lp-prev').addEventListener('click', () => show(active - 1, true));
  root.querySelector('.lp-next').addEventListener('click', () => show(active + 1, true));
  dots.forEach((dot, i) => dot.addEventListener('click', () => show(i, true)));
  play.addEventListener('click', () => { paused = !paused; syncPlay(); schedule(); });
  root.addEventListener('mouseenter', () => { hovering = true; schedule(); });
  root.addEventListener('mouseleave', () => { hovering = false; schedule(); });
  root.addEventListener('focusin', () => { focused = true; schedule(); });
  root.addEventListener('focusout', () => { focused = root.contains(document.activeElement); queueMicrotask(() => { focused = root.contains(document.activeElement); schedule(); }); });
  document.addEventListener('visibilitychange', schedule);
  reduced.addEventListener('change', e => { if (e.matches) paused = true; syncPlay(); schedule(); });
  root.querySelector('.lp-carousel-controls').hidden = false;
  syncPlay(); schedule();
})();
