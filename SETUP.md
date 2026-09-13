# Setup Instructions

## First Time Setup (5 minutes)

### 1. Extract the Project
Unzip `reign-portfolio.zip` and open the folder in your terminal.

### 2. Install Dependencies
```bash
npm install
```
This downloads React, Vite, and router libraries. Takes ~1-2 minutes.

### 3. Start Development Server
```bash
npm run dev
```
Your site opens at `http://localhost:5173` — live editing enabled.

---

## Before Deploying to GitHub Pages

### Step 1: Update Your GitHub Repository Name
Edit `vite.config.js`:
```javascript
base: "/reign-portfolio/",  // Change to your actual repo name
```

**Example:**
- If your repo is `github.com/reinmeia/my-portfolio` → use `/my-portfolio/`
- If your repo is `github.com/reinmeia/portfolio-2024` → use `/portfolio-2024/`

### Step 2: Update Content (optional but recommended)
- `src/data/portfolio.js` — your name, email, GitHub, bio
- `src/data/projects.js` — your projects
- `src/data/advocacy.js` — your leadership cards
- `src/assets/profile/headshot-transparent.png` — replace with your photo

### Step 3: Build the Site
```bash
npm run build
```
Creates optimized files in `dist/` folder.

### Step 4: Deploy to GitHub Pages
Choose ONE of these methods:

#### **Method A: Using Git Subtree** (recommended for beginners)
```bash
# Add dist folder to git
git add dist -f
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git subtree push --prefix dist origin gh-pages
```

#### **Method B: Using GitHub CLI**
```bash
gh pages deploy dist
```

#### **Method C: Manual Upload**
1. Go to your GitHub repo → Settings → Pages
2. Select source: "Deploy from a branch"
3. Branch: `gh-pages` | Folder: `/ (root)`
4. Wait 30 seconds for deployment

### Step 5: Verify
Your site is live at:
```
https://yourusername.github.io/your-repo-name/
```

---

## Editing Your Portfolio

### Edit Homepage Copy
**File:** `src/pages/Home.jsx`

### Edit About Section
**File:** `src/pages/About.jsx` and `src/data/portfolio.js`

### Change Colors
**File:** `src/styles/variables.css`
```css
--color-amber: #f2a93b;  /* Change to your brand color */
```

### Update Your Photo
Replace: `src/assets/profile/headshot-transparent.png`
No code changes needed — the component automatically uses it.

---

## Common Configuration

### Change the Base URL (IMPORTANT!)
This is the #1 reason sites go blank after deploying.

**File:** `vite.config.js`
```javascript
base: "/reign-portfolio/",
```

Match this to your GitHub repository name exactly.

### Change the Navigation Links
**File:** `src/components/Navbar.jsx`
```javascript
const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];
```

### Update Fonts
**File:** `index.html` (already set up with Google Fonts)
**Backup:** `src/styles/variables.css` contains font family variables

---

## Daily Workflow

### Develop Locally
```bash
npm run dev
```
This starts a live-reload server. Edit any file and see changes instantly.

### Build for Production
```bash
npm run build
```
Creates optimized `dist/` folder ready for deployment.

### Preview Production Build
```bash
npm run preview
```
Simulates how your site looks after deployment.

---

## Project Structure at a Glance

```
your-site/
├── src/
│   ├── components/        # React components (buttons, cards, forms, etc.)
│   ├── pages/            # Full pages (Home, Projects, About, Contact)
│   ├── data/             # Your actual content (portfolio.js, projects.js, advocacy.js)
│   ├── assets/           # Your photos and images
│   └── styles/           # CSS (colors, fonts, layouts)
├── dist/                 # Production build (created by npm run build)
├── package.json          # Dependencies and scripts
├── vite.config.js        # Build configuration (IMPORTANT: update base path)
└── index.html            # Main HTML file
```

---

## Deployment Checklist

Before going live:

- [ ] Updated `vite.config.js` with your GitHub repo name
- [ ] Customized content in `src/data/` files
- [ ] Replaced your headshot in `src/assets/profile/`
- [ ] Tested locally with `npm run dev`
- [ ] Built with `npm run build`
- [ ] Deployed with git subtree / GitHub CLI / manual upload
- [ ] Verified site is live at `https://yourusername.github.io/your-repo/`

---

## Need Help?

### Site is blank after deploying?
→ Check `vite.config.js` `base` path matches your repo name exactly.

### "npm: command not found"?
→ Install Node.js from `nodejs.org`

### Changes not showing up?
→ Hard refresh your browser: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)

### Form not working?
→ It's designed to open your email client. That's intentional! Check `src/components/ContactForm.jsx`.

---

## Next Steps

1. ✅ Extract and install
2. ✅ Run `npm run dev` and explore locally
3. ✅ Update content in `src/data/`
4. ✅ Update `vite.config.js` base path
5. ✅ Build with `npm run build`
6. ✅ Deploy to GitHub Pages
7. ✅ Share your portfolio!

You've got this. 🚀
