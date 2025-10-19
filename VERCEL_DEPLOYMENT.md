# Vercel Deployment Guide

## Mindscape Global Formations - LLC Formation Website

This guide provides step-by-step instructions for deploying the LLC Formation website to Vercel.

---

## 🚀 Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=YOUR_REPO_URL)

---

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **Git Repository**: Push your code to GitHub, GitLab, or Bitbucket
3. **pnpm** (optional): Vercel auto-detects package manager

---

## 🔧 Configuration Files

The following files are configured for optimal Vercel deployment:

### 1. `vercel.json`
- Build and install commands
- Function configuration
- Security headers
- Caching rules
- Rewrites for sitemap and robots.txt

### 2. `next.config.mjs`
- Image optimization enabled
- Remote image patterns (Unsplash)
- Performance optimizations
- Security headers
- React Strict Mode
- SWC minification

### 3. `.vercelignore`
- Excludes unnecessary files from deployment
- Reduces deployment size
- Speeds up build process

### 4. `.env.example`
- Template for environment variables
- Use as reference for Vercel environment setup

---

## 📝 Step-by-Step Deployment

### Method 1: Vercel Dashboard (Recommended)

1. **Push to Git**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your Git repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `pnpm build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `pnpm install` (auto-detected)

4. **Environment Variables** (Optional)
   Add these in Vercel Dashboard → Settings → Environment Variables:
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   NEXT_PUBLIC_SITE_NAME=Mindscape Global Formations
   NEXT_PUBLIC_MINDSCAPE_URL=https://mindscapeanalytics.com
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build completion
   - Your site is live! 🎉

### Method 2: Vercel CLI

1. **Install Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # Development preview
   vercel
   
   # Production deployment
   vercel --prod
   ```

---

## 🌐 Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `mindscapeglobal.com`)

2. **Update DNS Records**
   
   **For Apex Domain (example.com):**
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   
   **For WWW Subdomain (www.example.com):**
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`

3. **SSL Certificate**
   - Vercel automatically provisions SSL
   - Usually ready within 24 hours
   - HTTPS enforced automatically

---

## ⚙️ Performance Optimizations

### Enabled Features:
✅ **Next.js Image Optimization** - Automatic WebP/AVIF conversion
✅ **Edge Runtime** - Middleware runs on Edge Network
✅ **Automatic Code Splitting** - Faster page loads
✅ **SWC Minification** - Faster builds, smaller bundles
✅ **Static Asset Caching** - 1-year cache for fonts/images
✅ **Compression** - Gzip/Brotli enabled
✅ **React Strict Mode** - Better development warnings

### Expected Performance:
- **Lighthouse Score**: 90-100
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Largest Contentful Paint**: < 2.5s

---

## 🔒 Security Headers

All pages include security headers:

- `Strict-Transport-Security` - Force HTTPS
- `X-Content-Type-Options` - Prevent MIME sniffing
- `X-Frame-Options` - Prevent clickjacking
- `X-XSS-Protection` - XSS protection
- `Referrer-Policy` - Control referrer information
- `X-DNS-Prefetch-Control` - DNS prefetching

---

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Get GA4 Measurement ID
2. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
3. Add tracking code to `app/layout.tsx`

### Vercel Analytics
1. Go to Project Settings → Analytics
2. Click "Enable"
3. Free tier: 100k events/month
4. Real-time performance metrics

---

## 🔄 Continuous Deployment

Vercel automatically deploys on:

- **Production**: Push to `main` branch
- **Preview**: Pull requests and other branches
- **Instant Rollback**: Previous deployments always accessible

### Workflow:
```
git push origin main
  ↓
Vercel detects push
  ↓
Runs build & tests
  ↓
Deploys to production
  ↓
Site live in ~2 minutes
```

---

## 🐛 Troubleshooting

### Build Fails

**Problem**: TypeScript errors
```bash
# Fix locally first
pnpm build

# If successful, commit and push
git add .
git commit -m "Fix build errors"
git push
```

**Problem**: Out of memory
- Contact Vercel support for increased limits
- Or optimize bundle size with `next-bundle-analyzer`

### Images Not Loading

**Problem**: Remote images blocked
- Check `next.config.mjs` → `remotePatterns`
- Add image domain to allowed list

### Environment Variables Not Working

**Problem**: Variables undefined
- Prefix with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding variables
- Check spelling and case sensitivity

### Edge Runtime Errors

**Problem**: "Module not found" in Edge Runtime
- Edge Runtime doesn't support all Node.js APIs
- Use Edge-compatible alternatives
- Check middleware compatibility

---

## 📈 Monitoring

### Built-in Vercel Features:
1. **Real User Monitoring** - Actual user metrics
2. **Deployment Logs** - Build and runtime logs
3. **Error Tracking** - Automatic error alerts
4. **Performance Insights** - Core Web Vitals

### Access Monitoring:
- Dashboard → Your Project → Analytics
- Dashboard → Your Project → Deployments → Logs

---

## 🔐 Environment Variables Reference

### Required (None - all optional)

### Recommended:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_SITE_NAME=Mindscape Global Formations
```

### Optional (Future Features):
```bash
# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Payment (if adding Stripe)
STRIPE_SECRET_KEY=sk_live_...
STRIPE_PUBLISHABLE_KEY=pk_live_...
```

---

## 🌟 Post-Deployment Checklist

After successful deployment:

- [ ] Test all pages load correctly
- [ ] Verify contact forms work
- [ ] Check WhatsApp integration
- [ ] Test navigation dropdown
- [ ] Verify chatbot functionality
- [ ] Check sticky banner rotation
- [ ] Test mobile responsiveness
- [ ] Verify popup contact form
- [ ] Test all external links (Mindscape Analytics)
- [ ] Check images load from Unsplash
- [ ] Verify SSL certificate active
- [ ] Test custom domain (if configured)
- [ ] Check Lighthouse scores
- [ ] Review Vercel Analytics
- [ ] Test on different devices/browsers

---

## 📞 Support

### Vercel Support:
- [Documentation](https://vercel.com/docs)
- [Discord Community](https://vercel.com/discord)
- [GitHub Discussions](https://github.com/vercel/next.js/discussions)

### Project Contact:
- Email: zeeshan.keerio@mindscapeanalytics.com
- WhatsApp: +1-307-210-6155

---

## 🔄 Updating the Site

To update your live site:

```bash
# Make changes locally
# Test locally
pnpm dev

# Build and test
pnpm build

# Commit changes
git add .
git commit -m "Update: description of changes"

# Push to production
git push origin main

# Vercel auto-deploys in ~2 minutes
```

---

## 📝 Notes

- **Build Time**: ~2-3 minutes
- **Cold Start**: < 1 second (Edge Runtime)
- **Bandwidth**: Unlimited on Pro plan
- **CDN**: Global Edge Network (300+ locations)
- **Automatic Scaling**: Handles traffic spikes
- **Zero Downtime**: Atomic deployments

---

## 🎯 Production URLs

After deployment, your site will be available at:

- **Vercel URL**: `your-project.vercel.app`
- **Custom Domain**: `your-domain.com` (if configured)
- **Preview URLs**: Unique URL for each deployment

---

## ✅ Deployment Complete!

Your LLC Formation website is now live on Vercel! 🚀

Next steps:
1. Configure custom domain
2. Set up analytics
3. Monitor performance
4. Collect user feedback
5. Iterate and improve

---

**Last Updated**: October 19, 2025
**Framework**: Next.js 15.2.4
**Deployment Platform**: Vercel
