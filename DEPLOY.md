# Deploy Your Portfolio

## Run locally (on your PC)

1. **Open a terminal** (PowerShell or Command Prompt).
2. **Go to the portfolio folder:**
   ```powershell
   cd "c:\Users\Tsuki No Me\Downloads\Clinic-Portal-main\Project Discovery\samarth-portfolio"
   ```
3. **Install dependencies** (first time only):
   ```powershell
   npm install
   ```
4. **Start the dev server:**
   ```powershell
   npm run dev
   ```
5. Open **http://localhost:3000** in your browser.

If you get errors, **close Cursor and reopen it without “Run as administrator”**—then try again.

---

## Deploy to Vercel (live website)

### Option A: Deploy with Vercel CLI

1. Install Vercel CLI (one time):
   ```powershell
   npm install -g vercel
   ```
2. In the portfolio folder, run:
   ```powershell
   cd "c:\Users\Tsuki No Me\Downloads\Clinic-Portal-main\Project Discovery\samarth-portfolio"
   vercel
   ```
3. Log in or sign up when asked. Accept the defaults (Vercel will detect Next.js).
4. You’ll get a live URL like `https://your-project.vercel.app`. To use **siddhsamarth.in**, add your domain in the Vercel project **Settings → Domains**.

### Option B: Deploy from GitHub

1. Push this project to GitHub (e.g. put only the `samarth-portfolio` folder in a new repo, or push the whole “Project Discovery” repo).
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import** your repo.
3. If the repo root is **Project Discovery**, set **Root Directory** to `samarth-portfolio`. Leave **Framework** as Next.js.
4. Click **Deploy**. Vercel will build and give you a URL.
5. To use **siddhsamarth.in**, go to project **Settings → Domains** and add your domain.

After deployment, your site will be live and `sitemap.xml` and `robots.txt` will work at `https://siddhsamarth.in/sitemap.xml` and `https://siddhsamarth.in/robots.txt`.
