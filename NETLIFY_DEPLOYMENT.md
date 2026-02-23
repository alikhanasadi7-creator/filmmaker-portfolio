# Netlify Deployment Guide

This is a production-ready static portfolio website optimized for Netlify deployment.

## Quick Start

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/filmmaker-portfolio.git
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select your GitHub repository
   - Build settings should auto-detect:
     - **Build command:** `pnpm run build`
     - **Publish directory:** `dist/public`
   - Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
pnpm run build

# Deploy
netlify deploy --prod --dir=dist/public
```

## Build Configuration

The `netlify.toml` file contains all deployment settings:

```toml
[build]
  command = "pnpm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Key Settings

- **Build command:** Compiles React + Tailwind CSS
- **Publish directory:** `dist/public` (contains optimized static files)
- **Redirects:** All routes redirect to `/index.html` for client-side routing

## Environment Variables (if needed)

If you add environment variables in the future:

1. Go to **Site settings → Build & deploy → Environment**
2. Add your variables
3. Redeploy the site

## Performance Optimization

The build output includes:

- **Minified HTML/CSS/JS** for fast loading
- **Asset hashing** for cache busting
- **Gzip compression** (handled by Netlify)
- **Static file serving** with aggressive caching

## Custom Domain

1. Go to **Site settings → Domain management**
2. Click "Add custom domain"
3. Follow DNS configuration steps

## Troubleshooting

### Build Fails

- Check that `pnpm` is installed: `pnpm --version`
- Verify Node.js version compatibility
- Check build logs in Netlify dashboard

### Pages Not Loading

- Ensure `netlify.toml` has correct `publish` directory
- Clear Netlify cache: **Site settings → Build & deploy → Clear cache and redeploy**

### Images Not Displaying

- All images must use absolute URLs (CDN links)
- Do not use relative paths for external assets

## Next Steps

1. Update content in `client/src/pages/` files
2. Replace placeholder images with your actual work
3. Update contact email in `client/src/pages/About.tsx`
4. Test locally: `pnpm run dev`
5. Deploy to Netlify

---

For more information, visit [Netlify Docs](https://docs.netlify.com/)
