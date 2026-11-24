# Evola — Simplified Homepage

This is the current seven-page Evola website, with a shorter and clearer homepage designed for non-technical business visitors.

## What changed on the homepage

- One bold promise: **Less admin. More time.**
- One quick explanation of what the business does, without AI/IT terminology.
- Three everyday problem categories: paperwork, enquiries and practical AI help.
- One easy-to-understand invoice example, with an illustrative before/after.
- One simple contact call to action.
- Reduced from eight homepage sections to four.

All other pages (Services, Solutions, Industries, AI Training, About, Contact), the seven industry categories, and the dark/light mode switch are retained.

## How to publish

1. Unzip the website.
2. Upload **all files** to the root of your GitHub Pages repository, replacing the current files.
3. Commit changes. GitHub Pages republishes the site automatically.

No backend or build step is required.

## To customise before launch

- Replace `hello@yourdomain.com` with the real business contact email.
- The Contact page currently prepares an email draft instead of submitting to Formspree.
- Use-case examples are illustrative potential workflows, not claims about completed customer projects.

## Homepage carousel

## Evola branding and motion
The provided Evola logo artwork is included as evola-logo.png and its original symbol is used alongside the Evola wordmark in the header and footer. The hero uses a one-second overlapping fade every six seconds, with slide indicators only. Supported browsers use native cross-document view transitions for same-origin navigation. Reduced-motion preferences disable transition animation.

## Industry navigation

Industries in the site header opens automatically on desktop mouse hover and on tap for mobile, with seven industries and View all industries. Each link opens the existing catalogue with that industry selected. The menu supports touch, mouse, Tab, arrow keys and Escape. Upload all files together; `industry-menu.css` is new and `script.js` and `usecases.js` have been updated.

## Wide homepage layout
The desktop header and carousel now use 96% of the viewport (up to 1800px), with a larger headline and a level, expanded illustration. Below-hero content and mobile layout retain their original reading widths. To apply this update to the preceding industry-dropdown edition, replace `evola.css` and the seven HTML files (which reference the versioned stylesheet).

The Industries menu uses desktop hover with a small pointer bridge and delayed closing, and supports tap, keyboard activation, and Escape. Existing use-cases.html links and industry filters are preserved.

## Cinematic homepage edition

- Original CSS/SVG animated full-width waves, with four rotating headings and no workflow illustration panel or directional/playback controls.
- Two-column Industries mega menu opens on desktop hover, with tap and keyboard support.
- Ask Evola FAQ uses native HTML disclosure controls.
- The carousel and background respect reduced-motion preferences.
- All seven pages and 21 illustrative use cases remain. The contact form still opens an email draft; configure your email or Formspree separately.

### Illustrative photography

The Services and Industries hero photos are credited stock imagery, not pictures of Evola staff or clients. Images are referenced from Unsplash's image CDN; download access was blocked in the creation environment, so no photo binaries are included. A styled fallback appears if either image is unavailable. For fully self-contained hosting, download the images from the credited sources, store them locally and replace their `src` URLs.

- Services: [Vitaly Gariev](https://unsplash.com/photos/team-collaborating-around-a-computer-in-an-office-UikYLDQj9_I)
- Industries: [Blake Wisz](https://unsplash.com/photos/woman-paying-at-salon-checkout-counter-tE6th1h6Bfk)
- [Unsplash License](https://unsplash.com/license)

Deploy the complete contents at the root of your existing GitHub Pages repository. The new shared stylesheet is `experience.css`. No backend or build step is required.
