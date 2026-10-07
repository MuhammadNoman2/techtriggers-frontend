# Tech Triggers website

Company site for Tech Triggers (techtrigger.org). React 19 + Vite, pre-rendered to static HTML for SEO.

## Edit content
- Company facts (phone, email, address, social links): `src/site/config.js`
- Services, products, industries, founders, job post: `src/site/data.js`
- Page layouts: `src/pages/`  ·  Styles: `src/styles/site.css`
- Photos: `public/images/` (from Unsplash, free licence). Founder photos: `public/team/talha-waseem.jpg`, `muhammad-noman.jpg`, `ali-daud.jpg` (portrait 4:5, about 800x1000)

## Hero videos (optional)
The home page slider plays a looping video behind each slide when the file exists, and shows a poster photo otherwise.
Put muted mp4 files (1920x1080, about 8 seconds, under 4 MB each) in `public/videos/` with these exact names, then rebuild:
`hero-team.mp4`, `hero-lms.mp4`, `hero-sales-desk.mp4`.
Compress with: `ffmpeg -i input.mp4 -an -vf "scale=1920:-2" -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -movflags +faststart output.mp4`

## Run and build
```bash
npm install
npm run dev        # local development
npm run build      # builds dist/ with one HTML file per page + sitemap.xml + robots.txt
```

## Deploy to Hostinger (automatic)
Push a version tag and GitHub Actions builds the site and uploads `dist/` to Hostinger by FTPS:
```bash
git push origin main
git tag v1.0.1 && git push origin v1.0.1
```
The workflow is `.github/workflows/deploy.yml`. It never touches the `api/` folder (the PHP backend).

One-time setup, in the repo's Settings, Secrets and variables, Actions (or with `gh secret set NAME`):
`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_SERVER_DIR` (for example `/public_html/`, set it to the folder your FTP account must write into).

After the first deploy, submit `https://techtrigger.org/sitemap.xml` in Google Search Console.

## Rules for content
Only publish facts we can show. Add a new product, client or number to `data.js` only when it is true.
