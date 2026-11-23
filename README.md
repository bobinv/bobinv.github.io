# Ctrl Alt Automate — Industry Use Cases edition

A **seven-page, light/dark responsive website** ready for GitHub Pages. The homepage has been rewritten for non-technical business owners and team managers. Builds on the previous Ctrl Alt Automate design with a dedicated industry use-case catalogue and guided contact enquiry email composer.

## Pages

| Page | File | What's new |
| --- | --- | --- |
| Home | `index.html` | Plain-English hero and example workflow, everyday business pain points, beginner-friendly services and getting-started steps, plus industry use cases |
| Services | `services.html` | Link from services into the industry catalogue |
| Solutions | `solutions.html` | Link from solution patterns into industry examples |
| **Use Cases** | `use-cases.html` | **21 practical examples for seven audiences** + industry filters and search |
| AI Training | `ai-training.html` | Existing content retained |
| About | `about.html` | Existing content retained |
| Contact | `contact.html` | Use-case-linked enquiry form that drafts an email |

### Industries included

- Finance teams (invoices, receivables, month-end reporting)
- Asset management (asset lifecycle, preventive maintenance, inventory reconciliation)
- Retail (low stock, customer enquiries, daily performance reporting)
- Local councils (resident requests, permits, waste and facilities)
- Schools (enrolments, parent communications, devices and IT)
- Tradies / field services (quotes, scheduling, invoicing)
- Healthcare operations (appointments, referrals, inventory)

All scenarios are illustrative solution ideas, **not claims of completed client projects or guaranteed results**. Sensitive operations require appropriate privacy, security, human review, and regulatory controls.

## How the industry filters work

- Open `use-cases.html` to browse all 21 cards.
- Click a filter chip, or type into the search field.
- Direct industry links work with `use-cases.html?industry=finance#finance` (replace finance with `assets`, `retail`, `councils`, `schools`, `tradies`, or `healthcare`).
- Each **Discuss this use case** link opens the Contact page with the appropriate industry and case already selected.
- The site remains static; filters run in the browser without any backend.
- `usecases-data.json` contains the editable source copy of the 21 ideas. If you edit the JSON, also update the matching HTML (the website uses static HTML, not an on-the-fly build system).

## Contact form behaviour — IMPORTANT

The Contact page **does not send an enquiry to a server**. It prepares an email draft using `mailto:`; the visitor must press Send in their email app. The page also offers Copy enquiry for people who do not have a default mail application.

**Before publishing**, replace `hello@yourdomain.com` in all the HTML files **and** in `usecases.js` with your actual business contact email. This is not a working inbox.

If you decide to use Formspree instead, create a real Formspree endpoint and configure the contact form to POST to it. There is no placeholder endpoint or database connection in this package.

## GitHub Pages deployment

1. Download and extract the ZIP.
2. Upload **all extracted files at repository root**; do not upload only the ZIP.
3. GitHub repository → **Settings → Pages → Deploy from a branch**.
4. Choose `main` + `/(root)` and Save.
5. Use `https://YOURUSERNAME.github.io/` for a user site or `https://YOURUSERNAME.github.io/REPOSITORY/` for a project site.

No build tools, paid hosting, server, or database is required.

## Files included

- Seven `.html` pages
- `styles.css`, `premium.css`, `theme.css`, `usecases.css`, `home-friendly.css` (homepage-only styles)
- `script.js`, `usecases.js`
- `usecases-data.json` — editable catalogue source text
- `README.md` — this guide

## Theme

The header's light/dark toggle remains available on all seven pages and persists its selection in local browser storage. Dark remains the default theme.

## Non-technical homepage update

The homepage now leads with **"Less paperwork. More time for what matters."** It includes four familiar problems (manual data entry, chasing approvals, repeated customer questions, missed reminders), simple illustrations of possible improvements, jargon-free services, an accessible four-step way of working, and reassurance that no AI/IT experience is required. The hero illustration is explicitly labelled as an example, not a live solution or customer result.

All other pages, light/dark toggle, use-case catalogue, and enquiry-email flow are unchanged.
