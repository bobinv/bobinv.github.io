# Ctrl Alt Automate — Enterprise-style Homepage Edition

Static, multi-page business website designed for GitHub Pages. This edition redesigns **the homepage** with a bold statement-led layout, original vector artwork, editorial sections, a use-case switcher and direct calls to action. It draws inspiration from the general visual hierarchy of premium technology consultancy websites (including LAB3), but uses independent code, imagery and copy. It is **not affiliated with LAB3**.

## Contents

- `index.html` — redesigned homepage with original headline, service pathways, industries, and interactive example selector
- `homepage.css` — homepage-specific visual design, mobile and light/dark rules
- `homepage.js` — no-dependency interactive examples
- `services.html`, `solutions.html`, `use-cases.html`, `ai-training.html`, `about.html`, `contact.html` — retained existing pages
- Existing shared CSS/JS/data files — required for the other pages

## Publish on GitHub Pages

1. Extract the ZIP into a folder.
2. Upload **the files themselves** (not a ZIP or an extra enclosing folder) to the root of your `YOURUSERNAME.github.io` repository.
3. In GitHub, open **Settings → Pages** and choose **Deploy from a branch**: `main` and `/ (root)`.
4. Visit `https://YOURUSERNAME.github.io` after the Pages deployment finishes.

If your site is already published, replace old files with these files and commit. No database, framework or server is required.

## Edit before publishing

- Replace `hello@yourdomain.com` with your real business address in the existing files.
- Update company details, privacy/terms and service claims as applicable.
- The Contact page currently opens an email draft; it is **not connected to Formspree**.
- The workflow illustration and examples describe **possible solutions**, not completed client work.
- Never insert unverified client logos, awards, testimonials or improvement percentages.

## Theme and accessibility

- Dark and light mode are inherited from the existing shared `script.js` and `theme.css`.
- Homepage-specific light theme rules are in `homepage.css`.
- The example selector uses semantic buttons and `aria-pressed`, and respects reduced-motion preferences.
- All files work locally by opening `index.html` or with a static file server.
