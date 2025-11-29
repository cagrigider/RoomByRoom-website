# Deploying RoomByRoom Website to GitHub Pages

## ✅ What I Fixed

### 1. **GitHub Pages Configuration**
- Added `basePath: '/RoomByRoom-website'` to `next.config.js`
- Added `assetPrefix` for proper asset loading
- Created `.nojekyll` file to prevent Jekyll processing

### 2. **Navigation Updates**
- Removed Admin dashboard link (not needed for App Store Connect)
- Kept essential pages: Home, Privacy, Terms

### 3. **Critical Files Verified**
- ✅ `app-ads.txt` at root (required for AdMob)
- ✅ Privacy Policy page (required for App Store)
- ✅ Terms of Service page (required for App Store)

---

## 🚀 How to Deploy to GitHub Pages

### Step 1: Push the Updated Build to GitHub

```bash
# Navigate to your project
cd /Users/cagri.gider/Documents/Xcode/Personal/RoomByRoomWebsite

# Add all changes
git add .

# Commit the changes
git commit -m "Fix GitHub Pages deployment configuration"

# Push to your repository
git push origin main
```

### Step 2: Configure GitHub Pages Settings

1. Go to your repository: **https://github.com/cagrigider/RoomByRoom-website**
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under "Build and deployment":
   - **Source**: Deploy from a branch
   - **Branch**: Select `main` (or `master`)
   - **Folder**: Select `/root` or `/` 
5. Click **Save**

### Step 3: Deploy the Built Files

You have two options:

#### Option A: Use GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```bash
mkdir -p .github/workflows
```

Then create the workflow file with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "18"
          cache: "npm"
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Then update GitHub Pages settings to use **GitHub Actions** as the source.

#### Option B: Manual Deploy (Quick)

```bash
# Build locally
npm run build

# Install gh-pages package
npm install -g gh-pages

# Deploy the 'out' directory to gh-pages branch
gh-pages -d out -t true
```

The `-t true` flag ensures dotfiles like `.nojekyll` are included.

---

## 📋 Verify Your Deployment

After deployment (usually takes 2-3 minutes), verify these URLs:

### Required for App Store Connect:
1. **Privacy Policy**: https://cagrigider.github.io/RoomByRoom-website/privacy/
2. **Terms of Service**: https://cagrigider.github.io/RoomByRoom-website/terms/

### Required for AdMob:
3. **app-ads.txt**: https://cagrigider.github.io/RoomByRoom-website/app-ads.txt
   - Should return: `google.com, pub-9244295681050567, DIRECT, f08c47fec0942fa0`

### General:
4. **Homepage**: https://cagrigider.github.io/RoomByRoom-website/

---

## 🔧 What Changed in the Configuration

### `next.config.js`
```javascript
basePath: '/RoomByRoom-website',    // ← Added
assetPrefix: '/RoomByRoom-website/', // ← Added
```

This tells Next.js that the site is hosted at a subdirectory, not the root domain.

### `.nojekyll` File
Created in `/public/.nojekyll` (copies to `/out/.nojekyll`)
- Prevents GitHub Pages from processing the site with Jekyll
- Ensures files starting with `_` (like `_next/`) are served correctly

### Navigation
Removed the Admin link - not needed for App Store requirements.

---

## 📱 For App Store Connect

When submitting your app to the App Store, use these URLs:

| Field | URL |
|-------|-----|
| **Privacy Policy URL** | `https://cagrigider.github.io/RoomByRoom-website/privacy/` |
| **Terms of Service URL** | `https://cagrigider.github.io/RoomByRoom-website/terms/` |
| **Support URL** | `https://cagrigider.github.io/RoomByRoom-website/` |

### For AdMob Setup:

In your AdMob account:
1. Go to **Apps** → **App settings**
2. Under **app-ads.txt**, verify the URL:
   ```
   https://cagrigider.github.io/RoomByRoom-website/app-ads.txt
   ```

---

## 🔄 Updating Your Website

Every time you make changes:

```bash
# 1. Make your changes to source files

# 2. Rebuild
npm run build

# 3. Deploy
gh-pages -d out -t true

# OR if using GitHub Actions, just push:
git add .
git commit -m "Update content"
git push origin main
```

---

## 🐛 Troubleshooting

### Site Shows Blank Page
- **Cause**: Assets not loading due to incorrect base path
- **Fix**: Verify `basePath` in `next.config.js` matches your repo name
- **Check**: Browser console for 404 errors

### CSS Not Loading
- **Cause**: Missing `.nojekyll` file
- **Fix**: Ensure `.nojekyll` exists in `out/` directory after build
- **Verify**: `ls -la out/ | grep nojekyll`

### app-ads.txt Returns 404
- **Cause**: File not copied to output or GitHub Pages caching
- **Fix**: Clear GitHub Pages cache by making a new commit
- **Verify**: Check `out/app-ads.txt` exists locally

### Privacy/Terms Pages Not Found
- **Cause**: Trailing slash issue
- **Fix**: Ensure `trailingSlash: true` in `next.config.js`
- **Access**: Always use URLs with trailing slash: `/privacy/` not `/privacy`

---

## ✅ Checklist Before Deploying

- [ ] Run `npm run build` successfully
- [ ] Verify `out/app-ads.txt` exists and contains correct AdMob ID
- [ ] Verify `out/.nojekyll` exists
- [ ] Check `out/privacy/index.html` exists
- [ ] Check `out/terms/index.html` exists
- [ ] Git commit and push all changes
- [ ] Deploy to GitHub Pages
- [ ] Wait 2-3 minutes for deployment
- [ ] Test all URLs listed above

---

## 📝 Important Notes

1. **app-ads.txt is critical** - AdMob won't show ads without it
2. **Privacy & Terms are required** - App Store will reject without them
3. **Use HTTPS URLs** - Always use `https://` when submitting to App Store
4. **Trailing slashes** - Always include trailing slash in URLs: `/privacy/` not `/privacy`

---

## 🎉 You're Ready!

Your website is now configured for GitHub Pages deployment with all the required files for:
- ✅ App Store Connect (Privacy Policy, Terms of Service)
- ✅ AdMob verification (app-ads.txt)

Deploy using the steps above and verify all URLs work before submitting to the App Store!
