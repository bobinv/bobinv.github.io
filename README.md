# Ctrl Alt Automate — Midnight Navy + Electric Mint website

A premium, six-page **static** managed services website. It is ready for GitHub Pages and requires no backend, Node.js, framework, CDN, third-party fonts, or paid hosting.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage, hero demo, service overview and FAQs |
| `services.html` | Full capabilities and delivery models |
| `solutions.html` | Workflow and business automation examples |
| `ai-training.html` | AI training programmes and responsible adoption |
| `about.html` | Method and delivery principles |
| `contact.html` | Contact options (email links) |
| `styles.css` | Base responsive layout |
| `premium.css` | Navy/mint design system, glass-style cards and animations |
| `script.js` | Mobile navigation and automatic copyright year |

**Important:** All nine files should be uploaded to the **root** of your GitHub repository (do not upload the ZIP unopened). Keep the two stylesheets named exactly as shown.

## Preview on your computer

Open `index.html` in a browser. You can navigate to all the other pages through the header. No build step is required. If your browser has special local-file restrictions, you can run `python -m http.server 8000` in the extracted folder, then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a public GitHub repository called `YOURUSERNAME.github.io` (replace `YOURUSERNAME` with your actual account name).
2. Upload all nine website files to the repository root and commit them on the `main` branch.
3. Open **Settings → Pages**.
4. For **Build and deployment**, select **Deploy from a branch**, then choose branch `main` and folder `/(root)`, and save.
5. Once deployment finishes, your site will be live at `https://YOURUSERNAME.github.io/`.

For a project repository named `ctrl-alt-automate`, your URL will usually be `https://YOURUSERNAME.github.io/ctrl-alt-automate/`. Relative links and assets work for both patterns.

## Update your content before publishing

1. **Email placeholder:** Replace **every occurrence** of `hello@yourdomain.com` across all `.html` files with your real business inbox. This includes `mailto:` links. Until you do, enquiry links are not usable.
2. **Brand:** `Ctrl Alt Automate` is applied to all pages, headers, titles and footers. Edit the text if your registered business name is different.
3. **Services:** Review statements to ensure all services described are genuinely provided. Example use cases are clearly illustrative and do not assert customer results.
4. **Colours:** Change `--navy`, `--mint`, and the section/card CSS rules in `premium.css` to restyle the theme. All backgrounds, lighting and gradients can be customised.
5. **Copy:** Each page is editable HTML. You do not need to rebuild the site after text changes—commit to GitHub and it republishes automatically.

## Notes

- Mobile navigation is accessible and supports Escape to close.
- Subtle transitions and animations respect the visitor's reduced-motion preference.
- All page navigation and styles use relative URLs compatible with GitHub Pages.
- The workflow dashboard on the homepage is **illustrative**, not a live integration.
- The contact page uses email links (`mailto:`), **not a working web form**. A form would require an external form provider or serverless backend.
- A custom domain is optional; HTTPS on GitHub's free Pages URL is available at no additional charge.
