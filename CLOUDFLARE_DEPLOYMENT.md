# Deploying RoomByRoom Website to Cloudflare Pages

This guide will help you deploy your RoomByRoom website to Cloudflare Pages.

## ✅ Pre-Deployment Checklist

Your website structure has been verified and is **ready for deployment**:
- ✅ Next.js static export configured
- ✅ Build output directory: `out/`
- ✅ `app-ads.txt` file properly included
- ✅ All pages generated successfully
- ✅ SEO metadata configured

## 🚀 Deployment Options

### Option 1: Direct Upload (Quickest - Recommended for First Time)

This method uploads the built files directly to Cloudflare without needing Git.

#### Step 1: Build Your Website
```bash
cd /Users/cagri.gider/Documents/Xcode/Personal/RoomByRoomWebsite
npm run build
```

#### Step 2: Install Wrangler CLI (if not already installed)
```bash
npm install -g wrangler
```

#### Step 3: Login to Cloudflare
```bash
wrangler login
```
This will open your browser to authenticate with Cloudflare.

#### Step 4: Deploy to Cloudflare Pages
```bash
wrangler pages deploy out --project-name=roombyroom
```

**First deployment**: Wrangler will create a new project called "roombyroom" automatically.

**Subsequent deployments**: Use the same command to update your site.

---

### Option 2: Git Integration (Recommended for Long-Term)

This method connects your GitHub repository to Cloudflare Pages for automatic deployments.

#### Step 1: Push to GitHub

1. Create a new repository on GitHub (e.g., `roombyroom-website`)
2. Push your code:
```bash
cd /Users/cagri.gider/Documents/Xcode/Personal/RoomByRoomWebsite
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/roombyroom-website.git
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Select your account
3. Navigate to **Workers & Pages** → **Pages**
4. Click **Create a project** → **Connect to Git**
5. Select your GitHub repository `roombyroom-website`

#### Step 3: Configure Build Settings

Use these exact settings:

| Setting | Value |
|---------|-------|
| **Framework preset** | Next.js (Static HTML Export) |
| **Build command** | `npm run build` |
| **Build output directory** | `out` |
| **Node version** | 18 or higher |

#### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at `https://roombyroom.pages.dev`

---

## 🌐 Custom Domain Setup (Optional)

After deployment, you can add a custom domain:

1. In Cloudflare Pages, go to your project
2. Click **Custom domains**
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `roombyroom.com` or `www.roombyroom.com`)
5. Follow the DNS configuration instructions

---

## 📋 Post-Deployment Verification

After deployment, verify these URLs work correctly:

- **Homepage**: `https://your-site.pages.dev/`
- **Privacy Policy**: `https://your-site.pages.dev/privacy/`
- **Terms of Service**: `https://your-site.pages.dev/terms/`
- **Admin Dashboard**: `https://your-site.pages.dev/admin/`
- **AdMob File**: `https://your-site.pages.dev/app-ads.txt`

### Verify app-ads.txt

This is **critical** for AdMob verification. Ensure:
```
https://your-site.pages.dev/app-ads.txt
```
Returns:
```
google.com, pub-9244295681050567, DIRECT, f08c47fec0942fa0
```

---

## 🔄 Updating Your Website

### If Using Direct Upload (Option 1):
```bash
# Make your changes, then:
npm run build
wrangler pages deploy out --project-name=roombyroom
```

### If Using Git Integration (Option 2):
```bash
# Make your changes, then:
git add .
git commit -m "Your commit message"
git push
# Cloudflare will automatically rebuild and deploy
```

---

## ⚙️ Environment Variables (If Needed Later)

If you need to add environment variables:

1. Go to your project in Cloudflare Pages
2. Navigate to **Settings** → **Environment variables**
3. Add variables for production and preview environments

---

## 🔑 Admin Dashboard Password

Default password: `dungeon2025`

⚠️ **Important**: For production security, consider:
- Using Cloudflare Access for authentication
- Implementing a more secure password system
- Moving to server-side authentication

---

## 📊 Build Information

Your website currently includes:

- **Pages**: 5 routes (/, /admin, /privacy, /terms, /404)
- **Total Size**: ~106 kB first load
- **Framework**: Next.js 15.1.0
- **React Version**: 19.0.0

---

## 🐛 Troubleshooting

### Build Fails on Cloudflare
- Ensure Node.js version is set to 18+ in build settings
- Check build logs for specific errors

### app-ads.txt Not Found
- Verify the file exists in `/public/app-ads.txt`
- Run `npm run build` locally and check `out/app-ads.txt` exists
- Clear Cloudflare cache after deployment

### 404 Errors
- Cloudflare Pages serves `/index.html` automatically for routes
- Check that `trailingSlash: true` is in `next.config.js`

### Admin Dashboard Not Working
- Verify JavaScript is enabled
- Check browser console for errors
- Ensure localStorage is not blocked

---

## 📞 Support

- **Cloudflare Docs**: https://developers.cloudflare.com/pages/
- **Next.js Docs**: https://nextjs.org/docs
- **Wrangler CLI**: https://developers.cloudflare.com/workers/wrangler/

---

## 🎉 You're Ready!

Your website is ready for deployment. Choose Option 1 for quick deployment or Option 2 for automatic deployments from Git. Good luck! 🚀
