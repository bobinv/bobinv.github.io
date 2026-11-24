# Ctrl Alt Automate — Simplified Homepage

This is the current seven-page Ctrl Alt Automate website, with a shorter and clearer homepage designed for non-technical business visitors.

## What changed on the homepage

- One bold promise: **Less admin. More time.**
- One quick explanation of what the business does, without AI/IT terminology.
- Three everyday problem categories: paperwork, enquiries and practical AI help.
- One easy-to-understand invoice example, with an illustrative before/after.
- One simple contact call to action.
- Reduced from eight homepage sections to four.

All other pages (Services, Solutions, Use Cases, AI Training, About, Contact), the seven industry categories, and the dark/light mode switch are retained.

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
Four plain-English hero messages rotate every six seconds. Visitors can select a slide, pause or resume rotation; hovering or focusing inside the carousel temporarily pauses automatic rotation. Reduced-motion preferences disable automatic rotation initially. Edit the four `.lp-slide` articles in `index.html` to change the content. `carousel.css` and `carousel.js` are homepage-only assets. All other pages are unchanged.
