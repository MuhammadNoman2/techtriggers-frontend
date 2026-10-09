# Frontend Deployment Guide - TechTrigger

## Production Build & Deployment to Hostinger

### Prerequisites
- Backend deployed and working at `https://techtrigger.org/api`
- Node.js installed on your Mac
- FTP/SFTP access to Hostinger
- Domain SSL certificate active

---

## Step 1: Prepare for Production Build

### Update Environment for Production

```bash
cd "/Users/apple/Documents/Tech Triggers/tech-triggers"

# Copy production environment
cp .env.production .env
```

### Verify .env contains:
```ini
VITE_API_BASE_URL=https://techtrigger.org/api
VITE_API_CONTACT_ENDPOINT=/contact.php
VITE_API_QUOTE_ENDPOINT=/quotation.php
VITE_COMPANY_EMAIL=techtrigger76@gmail.com
VITE_COMPANY_PHONE=+923376279457
VITE_COMPANY_WHATSAPP=https://wa.me/923376279457
```

---

## Step 2: Build for Production

```bash
# Install dependencies (if not already done)
npm install

# Create production build
npm run build
```

This creates a `/dist` folder with optimized files:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js      # Optimized JavaScript
│   ├── index-[hash].css     # Optimized CSS
│   └── logo-[hash].png      # Optimized images
└── ...
```

---

## Step 3: Deploy to Hostinger

### Option A: FTP/SFTP Upload (Recommended for First Deployment)

1. **Open FileZilla or any FTP client**

2. **Connect to Hostinger:**
   - Host: `ftp.techtrigger.org` or your VPS IP
   - Username: Your hosting username
   - Password: Your hosting password
   - Port: 21 (FTP) or 22 (SFTP - recommended)

3. **Navigate to:**
   ```
   /public_html/
   ```

4. **Upload all files from `/dist` folder:**
   - Select all files/folders in `dist/`
   - Drag and drop to `/public_html/`
   - **IMPORTANT:** Upload the CONTENTS of dist, not the dist folder itself

5. **Final structure on server:**
   ```
   /public_html/
   ├── api/                  # Backend (already deployed)
   │   ├── api/
   │   ├── config/
   │   └── ...
   ├── index.html            # Frontend (NEW)
   ├── assets/               # Frontend assets (NEW)
   │   ├── index-*.js
   │   ├── index-*.css
   │   └── logo-*.png
   └── ...
   ```

### Option B: Via SSH (For Updates)

```bash
# SSH into Hostinger
ssh your_username@techtrigger.org

# Navigate to public_html
cd public_html

# Create backup of old frontend (if exists)
mkdir -p backups
tar -czf backups/frontend-backup-$(date +%Y%m%d).tar.gz index.html assets/ --ignore-failed-read

# Exit SSH
exit

# From your Mac, upload new build
cd "/Users/apple/Documents/Tech Triggers/tech-triggers"
scp -r dist/* your_username@techtrigger.org:~/public_html/
```

---

## Step 4: Configure .htaccess for React Router

Create/update `.htaccess` in `/public_html/`:

```apache
# React Router - Redirect all requests to index.html
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Don't rewrite files or directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d

  # Don't rewrite API requests
  RewriteCond %{REQUEST_URI} !^/api

  # Rewrite everything else to index.html
  RewriteRule ^ index.html [L]
</IfModule>

# Force HTTPS
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security Headers
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

# Enable Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
  ExpiresByType text/html "access plus 1 hour"
</IfModule>
```

---

## Step 5: Test Production Site

### 1. Test Frontend
Visit: `https://techtrigger.org`

- [ ] Site loads correctly
- [ ] All pages accessible (Home, Services, Products, Contact)
- [ ] Images load properly
- [ ] Styles applied correctly
- [ ] WhatsApp button visible
- [ ] No console errors (F12 > Console)

### 2. Test Forms
- [ ] Contact form submission works
- [ ] Quote/Booking form works
- [ ] Success messages display
- [ ] Check techtrigger76@gmail.com for notifications
- [ ] User receives confirmation email

### 3. Test Responsiveness
- [ ] Mobile view (< 768px)
- [ ] Tablet view (768px - 1024px)
- [ ] Desktop view (> 1024px)
- [ ] All features work on mobile

### 4. Test Performance
- [ ] Page loads in < 3 seconds
- [ ] Images optimized
- [ ] No lag or stuttering

---

## Step 6: DNS & SSL Verification

### DNS Configuration (Should already be done)
Ensure in your domain registrar:
- A Record: `techtrigger.org` → Your Hostinger VPS IP
- A Record: `www.techtrigger.org` → Your Hostinger VPS IP

### SSL Certificate
In Hostinger control panel:
- Navigate to SSL section
- Ensure SSL is active for techtrigger.org
- Force HTTPS enabled

---

## Troubleshooting

### Issue: Site shows Hostinger parking page
**Solution:** Clear browser cache, wait 5-10 minutes for DNS propagation

### Issue: 404 on page refresh (React Router)
**Solution:** Ensure `.htaccess` is present in `/public_html/` with rewrite rules

### Issue: API calls failing (CORS)
**Solution:**
- Check backend `.env`: `CORS_ORIGIN=https://techtrigger.org`
- No trailing slash in URL
- Clear browser cache

### Issue: Mixed content warnings (HTTP/HTTPS)
**Solution:**
- Ensure all API URLs use `https://`
- Force HTTPS in `.htaccess`
- Check browser console for specific URLs

### Issue: Images not loading
**Solution:**
- Verify images uploaded to `/public_html/assets/`
- Check file permissions (644 for files, 755 for directories)
- Clear browser cache

### Issue: Styles not applied
**Solution:**
- Verify CSS files uploaded to `/public_html/assets/`
- Check browser console for 404 errors
- Hard refresh (Cmd+Shift+R on Mac)

---

## Performance Optimization

### 1. Enable Gzip Compression
Already configured in `.htaccess` above

### 2. Browser Caching
Already configured in `.htaccess` above

### 3. Image Optimization
Before building:
```bash
# Install image optimization tools
npm install -D vite-plugin-image-optimizer

# Update vite.config.js (if needed)
```

### 4. Lazy Loading
Already implemented in your React app

---

## Update Workflow (For Future Updates)

```bash
# 1. Make changes to your code
# 2. Test locally
npm run dev

# 3. Build for production
npm run build

# 4. Backup current production (via SSH or FTP)
# 5. Upload new dist/ contents to /public_html/
# 6. Test production site
# 7. Monitor for issues
```

---

## Monitoring & Maintenance

### Regular Checks
- [ ] Check site loads correctly
- [ ] Test form submissions weekly
- [ ] Monitor techtrigger76@gmail.com for notifications
- [ ] Check error logs in Hostinger panel
- [ ] Verify SSL certificate renewal (auto-renews)

### Performance Monitoring
Use tools:
- Google PageSpeed Insights
- GTmetrix
- Pingdom

### Analytics (Optional - Add Later)
- Google Analytics
- Hotjar for user behavior
- Uptime monitoring (UptimeRobot)

---

## Backup Strategy

### Automated (Hostinger)
- Hostinger provides weekly automated backups
- Access via control panel > Backups

### Manual Backup
```bash
# Before major updates, create backup
cd "/Users/apple/Documents/Tech Triggers/tech-triggers"
mkdir -p backups
tar -czf backups/frontend-$(date +%Y%m%d).tar.gz dist/
```

---

## Rollback Procedure

If issues occur after deployment:

1. **Via Hostinger Control Panel:**
   - Go to Backups
   - Restore previous backup

2. **Via FTP:**
   - Download current files as backup
   - Re-upload previous `dist/` contents

3. **Via SSH:**
   ```bash
   cd ~/public_html
   # Extract previous backup
   tar -xzf backups/frontend-backup-YYYYMMDD.tar.gz
   ```

---

## Quick Reference

### Production URLs
- **Website:** https://techtrigger.org
- **API:** https://techtrigger.org/api
- **Contact Endpoint:** https://techtrigger.org/api/contact.php
- **Quote Endpoint:** https://techtrigger.org/api/quotation.php

### Important Files
- **Frontend:** `/public_html/` (root directory)
- **Backend:** `/public_html/api/`
- **Environment:** `.env` (local), `.env.production` (template)
- **Config:** `/public_html/.htaccess`

### Build Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview production build locally
```

---

## Deployment Checklist

- [ ] Backend deployed and tested
- [ ] `.env.production` configured
- [ ] Production build created (`npm run build`)
- [ ] Files uploaded to `/public_html/`
- [ ] `.htaccess` configured
- [ ] SSL certificate active
- [ ] DNS pointing to correct server
- [ ] Frontend loads at https://techtrigger.org
- [ ] All pages accessible
- [ ] Forms working and sending emails
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Performance tested
- [ ] Backup created

---

**Status:** Ready for Deployment
**Domain:** techtrigger.org
**Last Updated:** January 2025
