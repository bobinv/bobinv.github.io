# Ctrl Alt Automate — Dark + Light theme website

A six-page, responsive static website designed for GitHub Pages. It includes an accessible **light/dark theme toggle** in the header of every page, no database or backend required.

## The two themes

- **Dark mode (default):** Midnight navy surfaces with electric mint highlights.
- **Light mode:** Soft ivory/white surfaces, deep-navy text and mint/teal accents.
- Use the sun/moon control at the top right of the navigation to switch themes.
- Your selection is saved in the browser using `localStorage` and reused across all pages and subsequent visits. If browser storage is blocked, switching still works until the next page load.
- The first load defaults to **dark mode**, rather than the device's system theme.
- The workflow demo remains navy in light mode as a deliberate visual contrast.
- Theme icons have descriptive accessible labels, and the existing reduced-motion settings remain respected.

## Files to upload to GitHub

| File | Purpose |
| --- | --- |
| `index.html` | Home |
| `services.html` | Services |
| `solutions.html` | Solutions |
| `ai-training.html` | AI training |
| `about.html` | About |
| `contact.html` | Contact |
| `styles.css` | Base layout |
| `premium.css` | Dark navy / electric mint styles |
| `theme.css` | Theme toggle layout + light-mode styles |
| `script.js` | Mobile navigation, theme selection, saved theme, copyright year |
| `README.md` | This guide |

Upload **all files** from the ZIP to your repository root. CSS and JavaScript must remain alongside the HTML pages.

## Publish with GitHub Pages

1. Create a public repository called `YOURUSERNAME.github.io` (replace `YOURUSERNAME` with your GitHub username), or use an existing project repository.
2. Extract the ZIP, then upload its contents (not the ZIP itself) to the repository root.
3. Open **Settings → Pages** in GitHub.
4. Under **Build and deployment**, select **Deploy from a branch**; select `main` and `/(root)`; save.
5. Open `https://YOURUSERNAME.github.io/` or, for a project repo, `https://YOURUSERNAME.github.io/REPOSITORYNAME/` after deployment.

No paid hosting, runtime, third-party CSS, or build step is required.

## Edit before going live

- Replace `hello@yourdomain.com` in all HTML files with your real business email address.
- Check service descriptions and example workflows against the services your business actually offers.
- Contact links **currently open email**, rather than sending Formspree submissions. To use Formspree, create a form and configure its real endpoint. The theme toggle does not change this functionality.

## Customise appearance

- Edit `premium.css` to adjust the original dark theme.
- Edit `theme.css` to adjust the light theme and theme-switch button.
- To change the default to light mode, update the default theme in the bootstrap script found in each HTML `<head>` and ensure `script.js` uses the same storage key.

The site was checked at 320, 390, 768, 900, 1050, 1280 and 1440 pixel viewport widths in both themes, including the mobile menu and theme switching.
