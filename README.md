# TechTrigger website

Company site for TechTrigger (techtrigger.org). React 19 + Vite, pre-rendered to static HTML for SEO.

## Edit content
- Company facts (phone, email, address, social links): `src/site/config.js`
- Services, products, industries, founders, job post: `src/site/data.js`
- Page layouts: `src/pages/`  ·  Styles: `src/styles/site.css`
- Photos: `public/images/` (from Unsplash, free licence). Founder photos: `public/team/talha-waseem.jpg`, `muhammad-noman.jpg`, `ali-daud.jpg` (portrait 4:5, about 800x1000)

## Run and build
```bash
npm install
npm run dev        # local development
npm run build      # builds dist/ with one HTML file per page + sitemap.xml + robots.txt
```

## Deploy to Hostinger
Upload the **contents of `dist/`** to `public_html/` (including the hidden `.htaccess`). Then:
1. Submit `https://techtrigger.org/sitemap.xml` in Google Search Console.
2. Copy `.env.example` to `.env` before building and set `VITE_API_BASE_URL` to the live contact API. Without it the contact form posts to localhost and falls back to the email/WhatsApp message.

## Rules for content
Only publish facts we can show. Add a new product, client or number to `data.js` only when it is true.
