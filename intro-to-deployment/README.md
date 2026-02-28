# Introduction to Deployment (Vercel)

This repo is a quick guide + reference for deploying a web app from local development (localhost) to a live production URL using **Vercel**.

---

## What is deployment?

Deployment is the process of taking a project that runs on your local machine and making it accessible on the internet.

Deployment gives you:

- Shareable projects
- Real user testing
- Portfolio credibility
- Production experience

---

## Localhost vs production

### Local development (localhost)

- Runs on your machine
- Fast iteration
- Not public

Example:

```
http://localhost:5173
```

### Production environment

- Hosted on cloud servers
- Publicly accessible
- Real users can visit

Example:

```
https://my-app.vercel.app
```

---

## Why Vercel?

Vercel is a cloud platform built for frontend + fullstack apps.

### Core advantages

- Zero-config deployment
- Fast builds
- GitHub integration
- Automatic HTTPS
- Free tier for students

### Why it wins hackathons

- Deploy in ~30 seconds
- Instant previews for every commit
- No server setup
- Works great with React + Next.js

---

## Deployment pipeline

```
Code → GitHub → Vercel → Internet
```

Steps:

1. Push code to GitHub
2. Vercel detects updates
3. Vercel builds your app
4. Vercel deploys globally

---

## GitHub setup (if needed)

```bash
git init
git add .
git commit -m "first commit"
git remote add origin <repo-url>
git push -u origin main
```

---

## Deploying on Vercel

Deploy in 3 steps:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Import your repository

Vercel auto-detects:

- Framework (React, Next.js, etc.)
- Build command
- Output directory

Example configuration:

- Build command: `npm run build`
- Output folder: `dist/` (varies by framework)

After the build finishes, you’ll get a live URL like:

```
https://your-project.vercel.app
```

---

## What happens behind the scenes?

During a Vercel build:

- Install dependencies
- Run build command
- Optimize assets
- Deploy to a CDN

### What is a CDN?

CDN (Content Delivery Network) means your app is copied worldwide so users load it faster.

---

## Continuous deployment and preview URLs

One of the best parts of Vercel:

```
git push → auto redeploy
```

Preview URLs:

- Each pull request gets its own preview deployment (a unique URL)
- Great for team collaboration and testing before merging

---

## Environment variables (important)

Never hardcode secrets.

Bad:

```js
API_KEY = "123456"
```

Good:

- Vercel dashboard → **Settings → Environment Variables**
- Add values like:
  - `DATABASE_URL`
  - `OPENAI_API_KEY`
  - Any other secret keys

---

## Frontend vs backend deployment

### Frontend

- Static assets
- Delivered fast via CDN

### Backend

- Functions / APIs
- Runs on servers

---

## Fullstack deployment on Vercel

Common repo structure:

```
/src  → UI (frontend)
/api  → backend (API routes / serverless functions)
```

---

## Common pitfalls

- Missing environment variables
- Wrong build output folder
- Import path errors
- Node version mismatch

---

## Demo video

https://drive.google.com/file/d/18nvZ_LOPDEVI2CSPH8d4Zmwxhf4yCqa2/view

---

## Workshop resources

Slides: https://tinyurl.com/hoth-xiii-deployment

---

## Happy hacking

If deployment feels overwhelming, that’s normal. Follow the pipeline step-by-step and you’ll have a live app that anyone can access.
