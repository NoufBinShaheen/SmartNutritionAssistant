# GitHub Pages Publishing Guide

## ✅ Step 1: Fixed Path Issues
All absolute paths have been fixed in:
- `index.html` (footer link)
- `privacy.html` (navigation links)
- `terms.html` (navigation links)

## 📦 Step 2: Choose Your Publishing Method

You have **two options** for publishing on GitHub Pages:

### **Option A: Serve from `/docs` folder (Recommended - Keeps current structure)**

This keeps your files in `smart-nutrition-assistant/` and uses GitHub Pages `/docs` folder feature.

1. **Move files to `/docs` folder:**
   ```powershell
   # Create docs folder
   mkdir docs
   
   # Copy all files from smart-nutrition-assistant to docs
   Copy-Item -Path "smart-nutrition-assistant\*" -Destination "docs\" -Recurse
   ```

2. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Prepare app for GitHub Pages - move to docs folder"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository: `https://github.com/YOUR_USERNAME/N-SNA`
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/docs`
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/N-SNA/`

---

### **Option B: Serve from root (Simpler URL structure)**

This moves your app files to the repository root.

1. **Move files to root:**
   ```powershell
   # Move all files from smart-nutrition-assistant to root
   Move-Item -Path "smart-nutrition-assistant\*" -Destination "." -Force
   
   # Remove empty folder (optional)
   Remove-Item "smart-nutrition-assistant" -Recurse -Force
   ```

2. **Commit and push:**
   ```powershell
   git add .
   git commit -m "Prepare app for GitHub Pages - move to root"
   git push origin main
   ```

3. **Enable GitHub Pages:**
   - Go to your GitHub repository: `https://github.com/YOUR_USERNAME/N-SNA`
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select:
     - **Branch**: `main`
     - **Folder**: `/ (root)`
   - Click **Save**
   - Your site will be live at: `https://YOUR_USERNAME.github.io/N-SNA/`

---

## 🚀 Step 3: Commit Current Changes First

Before choosing an option above, commit the path fixes:

```powershell
# Add the fixed files
git add smart-nutrition-assistant/index.html
git add smart-nutrition-assistant/privacy.html
git add smart-nutrition-assistant/terms.html

# Commit
git commit -m "Fix absolute paths for GitHub Pages compatibility"

# Push
git push origin main
```

---

## ⚙️ Step 4: Enable GitHub Pages (After moving files)

1. Go to: `https://github.com/YOUR_USERNAME/N-SNA/settings/pages`
2. Under **Source**:
   - **Branch**: Select `main`
   - **Folder**: Select `/docs` (Option A) or `/ (root)` (Option B)
3. Click **Save**
4. Wait 1-2 minutes for GitHub to build your site
5. Your site URL will be: `https://YOUR_USERNAME.github.io/N-SNA/`

---

## 🔍 Step 5: Verify Your Site

1. Visit your GitHub Pages URL
2. Check that:
   - ✅ Page loads correctly
   - ✅ CSS styles are applied
   - ✅ JavaScript works (try the demo chat)
   - ✅ Images load
   - ✅ Navigation links work
   - ✅ Privacy and Terms pages load

---

## 🐛 Troubleshooting

**If styles/images don't load:**
- Make sure all paths are relative (start with `assets/` not `/assets/`)
- Check browser console (F12) for 404 errors
- Verify files are in the correct location

**If GitHub Pages shows 404:**
- Wait 2-3 minutes after enabling Pages
- Check that you selected the correct branch and folder
- Verify `index.html` exists in the selected folder

**If service worker errors:**
- Service workers work on GitHub Pages (https://)
- Clear browser cache if you see old errors

---

## 📝 Notes

- GitHub Pages uses HTTPS, so service workers will work correctly
- Your site updates automatically when you push to the `main` branch
- Custom domain: If you have a `CNAME` file, you can configure a custom domain in GitHub Pages settings


