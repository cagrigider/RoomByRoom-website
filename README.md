# RoomByRoom Website

A dungeon-themed Next.js website for the RoomByRoom iOS game, featuring privacy policy, terms of service, AdMob integration, and an admin dashboard.

## 🎮 Features

- **Stunning Dungeon Theme**: Medieval fonts, dark color palette, glassmorphism effects, and smooth animations
- **SEO Optimized**: Complete meta tags, Open Graph, and Twitter Card support
- **Privacy & Legal Pages**: Comprehensive privacy policy and terms of service
- **AdMob Integration**: `app-ads.txt` file with publisher ID `pub-9244295681050567`
- **Admin Dashboard**: Manage AdMob configuration with password protection
- **Responsive Design**: Works beautifully on mobile, tablet, and desktop
- **Cloudflare Pages Ready**: Static export optimized for Cloudflare Pages deployment

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Navigate to the website directory
cd website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
website/
├── public/
│   └── app-ads.txt          # AdMob verification file
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with SEO
│   │   ├── page.tsx         # Landing page
│   │   ├── globals.css      # Dungeon-themed global styles
│   │   ├── privacy/         # Privacy policy page
│   │   ├── terms/           # Terms of service page
│   │   └── admin/           # Admin dashboard
│   └── components/
│       ├── Navigation.tsx   # Site navigation
│       ├── Footer.tsx       # Site footer
│       └── ui/              # Reusable UI components
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🔧 Admin Dashboard

Access the admin dashboard at `/admin` with the password: `dungeon2025`

Features:
- Manage AdMob ad unit IDs
- Export configuration as JSON
- Save settings to localStorage

**Note**: For production, integrate with Cloudflare KV or a database for persistent storage.

## 📦 Build for Production

```bash
# Build static export
npm run build

# The output will be in the 'out' directory
```

## 🌐 Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Connect your GitHub repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `website`
6. Click "Save and Deploy"

### Option 2: Direct Upload

```bash
# Build the site
npm run build

# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
wrangler pages deploy out --project-name=roombyroom
```

## 🎨 Customization

### Update AdMob Publisher ID

Already configured with your publisher ID: `pub-9244295681050567`

To update, edit `/public/app-ads.txt`

### Change Theme Colors

Edit CSS variables in `/src/app/globals.css`:

```css
:root {
  --stone-dark: #1a1612;
  --gold: #d4af37;
  --mystic-purple: #8b5cf6;
  /* ... and more */
}
```

### Update App Store Link

Replace `#` placeholders in components with your actual App Store URL:

```tsx
<Button href="YOUR_APP_STORE_URL">
  Download on App Store
</Button>
```

## 📝 Important Files

- **app-ads.txt**: Located at `/public/app-ads.txt` - Required by AdMob, accessible at `yourwebsite.com/app-ads.txt`
- **Privacy Policy**: `/src/app/privacy/page.tsx` - Update contact email
- **Terms of Service**: `/src/app/terms/page.tsx` - Update jurisdiction and contact details

## 🔒 Admin Password

Default password: `dungeon2025`

To change, edit the password check in `/src/app/admin/page.tsx`:

```tsx
if (password === 'YOUR_NEW_PASSWORD') {
  setIsAuthenticated(true)
}
```

For production, implement proper authentication with Cloudflare Workers.

## 📱 Testing

- **Development**: `npm run dev` - Test locally
- **Build**: `npm run build` - Verify production build
- **Type Check**: `npm run type-check` - Check TypeScript errors
- **Lint**: `npm run lint` - Check code quality

## 🐛 Troubleshooting

**Build fails**: Ensure Node.js 18+ is installed
**app-ads.txt not accessible**: Verify file is in `/public/` directory
**Styles not loading**: Clear browser cache and rebuild

## 📄 License

Copyright © 2025 RoomByRoom. All rights reserved.

## 📧 Support

For questions or support:
- Email: support@roombyroom.com
- Privacy: privacy@roombyroom.com
