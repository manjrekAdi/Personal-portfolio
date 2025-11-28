# Free Hosting Guide for Personal Portfolio

## Option 1: Vercel (Recommended) ⭐

### Why Vercel?
- ✅ Already configured with `vercel.json`
- ✅ Free tier with generous limits
- ✅ Automatic deployments from GitHub
- ✅ Supports full-stack apps (Express + React)
- ✅ Custom domains
- ✅ SSL certificates included

### Quick Deploy Steps:

#### Method A: Deploy via GitHub (Easiest)
1. Push your code to GitHub (already done ✅)
2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "Add New Project"
4. Import your GitHub repository: `manjrekAdi/Personal-portfolio`
5. Vercel will auto-detect settings:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist/public`
   - Install Command: `npm install`
6. Add Environment Variables (if needed):
   - `EMAIL_USER` - Your email for contact form
   - `EMAIL_PASS` - Your email password/app password
   - `NODE_ENV=production`
7. Click "Deploy"
8. Your site will be live at: `your-project-name.vercel.app`

#### Method B: Deploy via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

### Vercel Configuration
Your `vercel.json` is already set up! It will:
- Build your app with `npm run build`
- Serve static files from `dist/public`
- Handle routing for React app
- Support API routes

### Environment Variables Setup
1. Go to your project on Vercel dashboard
2. Settings → Environment Variables
3. Add:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   NODE_ENV=production
   ```

---

## Option 2: Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com) and sign up
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist/public`
5. Add environment variables (same as Vercel)
6. Deploy!

### Netlify Configuration File
Create `netlify.toml` in root:
```toml
[build]
  command = "npm run build"
  publish = "dist/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## Option 3: Render

### Steps:
1. Go to [render.com](https://render.com) and sign up
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - Name: `personal-portfolio`
   - Environment: `Node`
   - Build Command: `npm run build`
   - Start Command: `npm start`
   - Plan: Free
5. Add environment variables
6. Deploy!

**Note:** Free tier spins down after 15 minutes of inactivity (cold starts)

---

## Option 4: Railway

### Steps:
1. Go to [railway.app](https://railway.app) and sign up
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway auto-detects Node.js
5. Add environment variables
6. Deploy!

**Note:** Free tier includes $5 credit/month

---

## Option 5: GitHub Pages (Frontend Only)

If you want to host just the frontend:

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/Personal-portfolio/', // Your repo name
  // ... rest of config
})
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add to `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist/public"
  }
}
```

4. Deploy:
```bash
npm run deploy
```

**Note:** This only works for frontend. Backend API won't work.

---

## Recommended: Vercel Setup

Since you already have `vercel.json`, here's the complete setup:

### 1. Update vercel.json for API routes:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 2. Create `api/` folder structure for Vercel serverless functions:
- Move API routes to `api/` folder
- Or use Vercel's serverless functions

### 3. Deploy:
- Connect GitHub repo to Vercel
- Add environment variables
- Deploy!

---

## Environment Variables Needed

Make sure to set these in your hosting platform:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password  # Use App Password for Gmail
NODE_ENV=production
```

### Gmail App Password Setup:
1. Go to Google Account → Security
2. Enable 2-Step Verification
3. Go to App Passwords
4. Generate password for "Mail"
5. Use that password in `EMAIL_PASS`

---

## Custom Domain (Free)

All platforms support custom domains:
1. Buy domain (Namecheap, Google Domains, etc.)
2. Add domain in hosting platform settings
3. Update DNS records as instructed
4. SSL certificate auto-generated

---

## Quick Comparison

| Platform | Free Tier | Backend Support | Auto Deploy | Best For |
|----------|-----------|-----------------|-------------|----------|
| **Vercel** | ✅ Excellent | ✅ Serverless | ✅ Yes | **Full-stack apps** |
| Netlify | ✅ Good | ✅ Functions | ✅ Yes | Static + Functions |
| Render | ⚠️ Limited | ✅ Yes | ✅ Yes | Full-stack (cold starts) |
| Railway | ⚠️ $5 credit | ✅ Yes | ✅ Yes | Full-stack apps |
| GitHub Pages | ✅ Free | ❌ No | ✅ Yes | Frontend only |

---

## Recommended Next Steps

1. **Deploy to Vercel** (easiest, already configured)
2. Set up environment variables
3. Test the contact form
4. Add custom domain (optional)
5. Set up automatic deployments from GitHub

---

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are in `package.json`
- Check build logs in hosting platform

### API Routes Not Working
- Verify environment variables are set
- Check API endpoint URLs
- Ensure serverless functions are configured correctly

### Contact Form Not Sending Emails
- Verify `EMAIL_USER` and `EMAIL_PASS` are correct
- Use App Password for Gmail (not regular password)
- Check email service logs

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Render Docs: https://render.com/docs

