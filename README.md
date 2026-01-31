# Shine Beauty Salon & Spa Website

A beautiful website for Shine Beauty Salon & Spa located in High Point, NC.

## GitHub Pages Deployment

### Initial Setup 

1. **Push these files to your GitHub repository** - Make sure the `docs` folder is committed and pushed to your `main` branch

2. **Configure GitHub Pages settings:**
   - Go to your repository: https://github.com/shinespanc/Shine.github.io
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: **Deploy from a branch**
     - Branch: **main** (or master)
     - Folder: **/docs**
   - Click **Save**

3. Wait a few minutes for GitHub to deploy, then visit https://shinespanc.github.io/Shine.github.io/

### Updating the Site

**Important:** Every time you make changes to the site in Replit, you'll need to:

1. Run the build command:
   ```bash
   npx vite build --config vite.config.gh-pages.ts
   ```

2. Copy index.html to 404.html (required for client-side routing):
   ```bash
   cp docs/index.html docs/404.html
   ```

3. Push the updated `docs` folder to GitHub
