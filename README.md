# Gaurav Bhandari — Enterprise Architecture portfolio

A responsive, GitHub Pages-ready personal website built with Astro 5 and Tailwind CSS 4. All content is in `src/pages/index.astro`; styles are in `src/styles.css`.

## Local development

Install Node.js 22 or later, then:

```bash
npm install
npm run dev
```

Open the local URL Astro prints (typically http://localhost:4321).

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

1. Back up the current `master` branch of `GauravBhandari19/gauravbhandari19.github.io` before changing any files.
2. Upload all files in this folder, including the hidden `.github/workflows/deploy.yml` file, to the repository's `master` branch. **Keep the folder contents at the repo root**, not nested under another folder.
3. In GitHub, open **Settings → Pages → Build and deployment → Source** and select **GitHub Actions**.
4. Open the **Actions** tab and watch the `Deploy to GitHub Pages` workflow finish.
5. Under **Settings → Pages**, set the custom domain to **gauravb.co.uk** and enable **Enforce HTTPS** once the certificate is ready.
6. Keep the current DNS records that route `gauravb.co.uk` to GitHub Pages. If moving repos/accounts, check the current DNS configuration against [GitHub's custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) before making any changes.
7. For a preview *before* replacing your live domain, temporarily remove `public/CNAME`, adjust the `site` value in `astro.config.mjs`, and deploy under a separate `username.github.io`-style staging repository; restore both settings for production.

## Content and privacy

- Text was based on the 2026 CV and existing public site. Review all statements before publishing.
- This version intentionally **does not** publish a phone number, personal email address, or raw CV. Links go to verified public LinkedIn and GitHub profiles.
- The architecture examples are themes, not detailed case studies; review for employer confidentiality.
- No photographs are included, so there are no image licensing issues.
- The contact links can be edited directly in `src/pages/index.astro`.
- Google Fonts are requested from an external service. For an offline/fully self-hosted site, replace the font import with local fonts or system fonts.

## Project structure

```text
.github/workflows/deploy.yml  CI/CD deployment
public/CNAME                 Domain mapping
public/favicon.svg           Site icon
public/robots.txt            Search engine rules
src/pages/index.astro        Entire responsive page and content
src/styles.css               Visual styles and responsive rules
astro.config.mjs             Astro settings and Tailwind integration
package.json                 Dependencies and scripts
```
