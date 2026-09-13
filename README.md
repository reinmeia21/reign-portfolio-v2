# Reign Mejia — Portfolio Website

A distinctive, hand-touched personal portfolio celebrating Reign's journey as an IT student, systems developer, youth leader, and community advocate. Built with React + Vite, designed around the concept of "ideas that switch on."

---

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
The site will open at `http://localhost:5173`

### 3. Build for Production
```bash
npm run build
```
Output goes to `dist/` — this is what you deploy.

---

## Project Structure

```
reign-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with mobile menu state
│   │   ├── Hero.jsx             # Large asymmetric hero with headshot
│   │   ├── ProjectCard.jsx      # Expandable project card (props demo)
│   │   ├── ProjectCarousel.jsx  # Glass-like carousel (state + events)
│   │   ├── AdvocacyCard.jsx     # Leadership/advocacy card with rotation
│   │   ├── SkillList.jsx        # Skills grid component
│   │   ├── Timeline.jsx         # Career direction timeline
│   │   ├── ContactForm.jsx      # Contact form with mailto handling
│   │   ├── Smiley.jsx           # Playful SVG illustration
│   │   └── Footer.jsx           # Footer links
│   │
│   ├── pages/
│   │   ├── Home.jsx             # Landing page with hero + featured projects
│   │   ├── Projects.jsx         # Full project list + carousel
│   │   ├── About.jsx            # Identity, skills, timeline, advocacy stack
│   │   └── Contact.jsx          # Contact form + direct contact info
│   │
│   ├── data/
│   │   ├── portfolio.js         # Core identity, skills, direction data
│   │   ├── projects.js          # 4 real projects with problem→idea→built→learned
│   │   └── advocacy.js          # 8 leadership/advocacy cards
│   │
│   ├── assets/
│   │   └── profile/
│   │       └── headshot-transparent.png  # Your cutout photo
│   │
│   ├── styles/
│   │   ├── variables.css        # Design tokens (colors, typography, spacing)
│   │   ├── global.css           # Base styles + warm paper aesthetic
│   │   ├── components.css       # All component styles
│   │   └── responsive.css       # Mobile/tablet breakpoints
│   │
│   ├── App.jsx                  # Router setup (HashRouter for GitHub Pages)
│   └── main.jsx                 # React entry point
│
├── index.html                   # HTML template with Google Fonts
├── vite.config.js              # Vite configuration + GitHub Pages base path
├── package.json                 # Dependencies + build scripts
└── README.md                    # This file
```

---

## React Requirements Demonstration

This project intentionally demonstrates core React patterns:

### **Props** (passing data to components)
- `ProjectCard` receives `project` prop with full project object
- `AdvocacyCard` receives `item` (advocacy card data) and `index` (for numbering)
- `Timeline` receives `items` array for rendering multiple timeline entries
- `SkillList` receives `skills` object organized by category

**Example:** In `About.jsx`:
```jsx
<ProjectCard project={projects[0]} />
<AdvocacyCard item={advocacy[0]} index={0} />
```

### **State** (managing interactive behavior)
- `Hero.jsx`: `ideaOn` state toggles the light bulb and glow effect
- `ProjectCard.jsx`: `open` state expands/collapses the problem→idea→built→learned detail
- `ProjectCarousel.jsx`: `index` state tracks which project to display
- `Navbar.jsx`: `open` state manages mobile menu visibility
- `ContactForm.jsx`: `form` state captures input values, `sent` state shows confirmation

**Example:** In `Hero.jsx`:
```jsx
const [ideaOn, setIdeaOn] = useState(false);
<button onClick={() => setIdeaOn((v) => !v)}>Switch idea on</button>
```

### **Event Handling** (responding to user interactions)
- `onClick`: Bulb toggle, carousel navigation, card expansion, menu toggle
- `onChange`: Form inputs (name, email, reason, message)
- `onSubmit`: Contact form redirects to mailto instead of backend

**Example:** In `ProjectCarousel.jsx`:
```jsx
const go = (delta) => {
  setIndex((prev) => (prev + delta + projects.length) % projects.length);
};
<button onClick={() => go(-1)}>← Prev</button>
```

---

## Design System

### Color Palette
- **--color-paper**: `#fffbf5` (warm, light background)
- **--color-ink**: `#1e2a38` (dark text)
- **--color-amber**: `#f2a93b` (accent for highlights, buttons, links)
- **--color-moss**: `#6b8f71` (secondary accent for labels, tags)
- **--color-clay**: `#c86d3a` (calls-to-action, hover states)

### Typography
- **Display**: Fraunces (serif, personality-driven headlines)
- **Body**: Inter (clean, readable body text)
- **Accent**: Caveat (handwritten, used for playful labels like "joyous")

### Spacing Scale
- `--space-xs`: 0.5rem | `--space-sm`: 1rem | `--space-md`: 1.75rem
- `--space-lg`: 3rem | `--space-xl`: 5rem | `--space-2xl`: 8rem

---

## Key Features

### 1. **Hero Section**
- Large, asymmetric headshot positioned on the left
- Light bulb interaction: click the bulb to "switch on" the idea
- Text and headshot respond to the bulb state with subtle animations
- Mobile-responsive: stacks vertically on smaller screens

### 2. **Project Carousel**
- Glass-like aesthetic with subtle gradient overlay
- Navigate with Prev/Next buttons (state-driven)
- Shows problem, idea, what was built, what was learned
- Carousel count displays current position

### 3. **Advocacy Stack**
- 8 leadership/advocacy cards
- Playful hand-touched aesthetic with subtle rotation
- Highlights key phrases (e.g., "Joyous Youth" with "Youth" in red)
- Organized chronologically from childhood ministry to entrepreneurship

### 4. **Contact Form**
- No backend — form opens your email client when submitted
- Honest about this limitation in the UI
- Captures name, email, reason, and message
- All data is pre-filled in the mailto link

### 5. **Skills & Timeline**
- Skills organized by category in a responsive grid
- Career timeline: 2026 (Learn) → 2027 (Build) → 2028 (Expand)
- Playful smiley illustration in About section

---

## Editing Content

### Change Your Name & Contact Info
**File:** `src/data/portfolio.js`
```javascript
const portfolio = {
  name: "Your Name",
  email: "your.email@example.com",
  github: "https://github.com/yourusername",
  // ... etc
};
```

### Update Projects
**File:** `src/data/projects.js`
Each project has: `title`, `category`, `problem`, `idea`, `built`, `learned`, `technologies`, `result`, `image`, `role`

### Edit Leadership/Advocacy Cards
**File:** `src/data/advocacy.js`
Each card has: `headline`, `tagline`, `role`, `copy`, `highlightWord`

### Change Your Photo
Replace the image at: `src/assets/profile/headshot-transparent.png`
The component (`Hero.jsx`) automatically uses it. No code changes needed.

---

## Deployment to GitHub Pages

### 1. Update `vite.config.js`
Change the `base` path to match your repository name:
```javascript
base: "/your-repo-name/",
```
(If you're deploying to `github.com/yourusername/my-portfolio`, use `/my-portfolio/`)

### 2. Build the Site
```bash
npm run build
```

### 3. Push `dist/` to GitHub Pages
**Option A: Using git subtree**
```bash
git add dist -f
git commit -m "Deploy to GitHub Pages"
git subtree push --prefix dist origin gh-pages
```

**Option B: Using GitHub CLI**
```bash
gh pages deploy dist
```

**Option C: Upload manually**
1. Go to your GitHub repo Settings → Pages
2. Set source to "Deploy from a branch"
3. Select `gh-pages` branch and `/` (root) folder
4. Upload the contents of `dist/` to that branch

### 4. Verify
Your site will be live at `https://yourusername.github.io/your-repo-name/`

---

## Customization Guide

### Change the Bulb Interaction
Edit `src/components/Hero.jsx` and the bulb SVG, or replace the interaction logic:
```jsx
const [ideaOn, setIdeaOn] = useState(false);
<button onClick={() => setIdeaOn((v) => !v)}>
```

### Add Your Own Projects
1. Add to `src/data/projects.js`
2. Optionally add project images to `src/assets/projects/`
3. Reference images in the project object: `image: "projects/my-project.png"`

### Customize Colors
Edit `src/styles/variables.css`:
```css
--color-amber: #f2a93b;  /* Change this to your preferred accent color */
```

### Adjust Typography
Update `src/styles/variables.css` font sizes:
```css
--fs-3xl: 4.2rem;  /* Increase or decrease as needed */
```

---

## Accessibility

✓ Semantic HTML (`<button>`, `<form>`, `<nav>`)
✓ Keyboard navigation (Tab through all interactive elements)
✓ Focus states (visible outlines on all focusable elements)
✓ Alt text on images
✓ Color contrast meets WCAG AA standards
✓ Respects `prefers-reduced-motion` setting

---

## Performance

- **Minified build**: ~186 KB JavaScript + 12.5 KB CSS
- **Headshot image**: 656 KB PNG (one large asset)
- **No external APIs** or backend calls
- **Fast time-to-interactive**: HashRouter ensures instant routing

---

## Troubleshooting

### Site is blank after deploying to GitHub Pages
**Solution:** Check your `vite.config.js` `base` path matches your repository name.

### Images not loading after deploy
**Solution:** Verify all image paths start with `/` (absolute, relative to the base path set in `vite.config.js`).

### Form doesn't send
**Solution:** This is intentional — it opens your email client instead. Check your browser's security settings or try a different browser.

### Styles look wrong on mobile
**Solution:** Clear your browser cache (`Ctrl+Shift+Delete` or `Cmd+Shift+Delete`) and hard-refresh (`Ctrl+F5` or `Cmd+Shift+R`).

---

## License

This portfolio is your personal project. Feel free to customize and deploy it however you like. The code is yours.

---

## Questions?

- Check the component files for inline comments explaining the React patterns
- Review `src/data/` files to understand the data structure
- Test locally with `npm run dev` before deploying

