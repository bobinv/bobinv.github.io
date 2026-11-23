# Ctrl Alt Automate — multi-page static managed services website

A polished, responsive 6-page website made entirely with HTML, CSS and JavaScript. It can be hosted for free on GitHub Pages. No Node.js, React build, database, account or backend is required for the site itself.

## Pages

- `index.html` — Home / landing page
- `services.html` — Six service areas
- `solutions.html` — Example business use cases
- `ai-training.html` — AI training tracks and responsible adoption
- `about.html` — Approach and delivery principles
- `contact.html` — Email-based enquiries
- `styles.css` — Shared styles for all pages
- `script.js` — Mobile navigation and current year

## Customise before publishing

1. **Brand:** Ctrl Alt Automate is already applied consistently across all six pages (headers, footers, page titles and email subjects).
2. **`hello@yourdomain.com` is not a working email address for you.** Replace all appearances in `contact.html`, footer markup on every page and homepage contact links with your actual inbox.
3. Update the HTML page titles, descriptions and service text to reflect the services you really offer.
4. Edit the colour variables at the top of `styles.css` for brand colours.
5. The sample use cases, training plans and workflow illustration are deliberately described as examples. The website includes no invented clients, achievements or certifications.

## Preview locally

Double-click `index.html` to open it in your browser, then use the navigation links. (On some browsers a local webserver helps: `python -m http.server 8000` and visit `http://localhost:8000`.)

## Host on GitHub Pages for free

1. Create a public repository called `YOURUSERNAME.github.io`, replacing YOURUSERNAME with your actual GitHub username.
2. Upload **all 8 files** listed above (or the complete contents of the ZIP). Keep them in the repository root. Do not upload the ZIP without extracting it.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`; choose `main` and `/(root)`; save.
5. Once published, visit `https://YOURUSERNAME.github.io/`.

For any differently named repository, the address is `https://YOURUSERNAME.github.io/REPOSITORY-NAME/`. All links are relative, so both URL styles work.

## FAQ

- **Does the Contact page send messages?** It opens the visitor's email client via `mailto:`. It is not a hosted contact form. A working form needs a third-party form service or backend.
- **Are there hosting charges?** No, for this static website on GitHub Pages (subject to GitHub Pages usage policies). A custom domain is optional and separately priced.
- **Can I edit individual pages?** Yes; edit that page's `.html` file, commit and GitHub republishes.
- **Are external resources required?** No external fonts, images, CDNs or libraries are loaded.
