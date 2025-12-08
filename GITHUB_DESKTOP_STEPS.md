# Step-by-Step: Push Using GitHub Desktop

## Step 1: Open GitHub Desktop

### How to find GitHub Desktop:

**Option A: From Start Menu**
1. Press the **Windows key** (⊞) on your keyboard
2. Type: `GitHub Desktop`
3. Click on "GitHub Desktop" when it appears

**Option B: From Desktop/Taskbar**
- Look for the GitHub Desktop icon on your desktop or taskbar
- It looks like a black cat icon (GitHub's mascot)

**Option C: If you don't have it installed**
- Download from: https://desktop.github.com/
- Install it, then sign in with your GitHub account

---

## Step 2: Check Your Repository

1. Once GitHub Desktop opens, you should see your repository listed
2. Look for: **"N-SNA"** or **"N-SNA (NoufBinShaheen)"**
3. Click on it to select it

**If you don't see your repository:**
- Click **File** → **Add Local Repository**
- Navigate to: `C:\Users\nouf_\OneDrive\Documents\GitHub\N-SNA`
- Click **Add repository**

---

## Step 3: Check for Pending Commits

Look at the bottom-left or center of the GitHub Desktop window. You should see:

**"2 commits ahead of origin/main"** or similar text

This means you have 2 commits ready to push:
- "Fix absolute paths for GitHub Pages compatibility"
- "Prepare app for GitHub Pages - move to docs folder"

---

## Step 4: Push Your Changes

1. Look at the **top toolbar** in GitHub Desktop
2. You'll see buttons like: **Fetch origin**, **Pull origin**, **Push origin**
3. Click the **"Push origin"** button (it may show a number like "Push origin (2)")

**What happens:**
- GitHub Desktop will authenticate (if needed)
- It will upload your 2 commits to GitHub
- You'll see a progress indicator
- When done, you'll see "No local changes" or "Up to date with origin/main"

---

## Step 5: Verify the Push

After pushing, check:
1. The status should change from "2 commits ahead" to "Up to date"
2. You can verify on GitHub.com:
   - Go to: https://github.com/NoufBinShaheen/N-SNA
   - You should see the `/docs` folder with all your files

---

## Step 6: Enable GitHub Pages (After Push)

1. Go to: https://github.com/NoufBinShaheen/N-SNA/settings/pages
2. Scroll to **"Source"** section
3. Under **"Branch"**: Select `main`
4. Under **"Folder"**: Select `/docs`
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be live at: **https://noufbinshaheen.github.io/N-SNA/**

---

## Troubleshooting

**If "Push origin" button is grayed out:**
- Make sure you're signed in (File → Options → Accounts)
- Check your internet connection

**If you see authentication errors:**
- Go to File → Options → Accounts
- Sign out and sign back in

**If you don't see the repository:**
- File → Add Local Repository
- Browse to: `C:\Users\nouf_\OneDrive\Documents\GitHub\N-SNA`


