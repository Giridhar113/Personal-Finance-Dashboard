# Personal Finance Dashboard - v1.1 Release

Release version: **Finance Dashboard v1.1**

A stronger JavaScript finance application for tracking income, expenses, balance, categories, analytics, and monthly summaries with persistent browser storage and backend-ready API planning.

## Portfolio Description

Personal Finance Dashboard is a responsive finance tracker built with HTML, CSS, and JavaScript. It allows users to add income and expense transactions, delete records, view live balance totals, and analyze spending by category and month. Transaction data is saved in `localStorage`, while the v1.1 release also prepares the project for future backend APIs. The project focuses on practical JavaScript logic, DOM rendering, state management, data summaries, polished dashboard UI, and app-like responsive behavior.

## Features

- Login and local session flow
- Add income
- Add expense
- Show total balance
- Delete transaction
- Save data in `localStorage`
- Category system for income and expense records
- Category filters for Income, Food, Travel, Shopping, Bills, and more
- Category summary
- Month summary
- Improved dashboard UI
- Cleaner v1.1 card spacing, hover states, and smoother button transitions
- Home dashboard with this-month and last-month controls
- Wallet cards with animated allocation progress bars
- Analytics with monthly KPI, improved chart polish, donut, category summary, and insights
- Upcoming month prediction for expected income, expenses, savings, and top risk category
- Transactions table with animated summary cards and row effects
- Backend API connected card for transaction endpoints
- Connected local Node backend with JSON-file persistence
- Invoice dashboard with dark hero styling and bill cards
- Black theme with responsive desktop, tablet, and mobile layouts

## V1.1 Release Goal

Move toward a real finance application while keeping the project strong for a portfolio:

- Data modeling
- DOM updates
- Form handling
- Persistent storage
- Derived totals and summaries
- Add/delete CRUD behavior
- Responsive dashboard UI
- API contract preparation

## Planned Backend APIs

These endpoints are implemented in `local-server.cjs` for local development:

- `POST /transactions` - create an income or expense transaction
- `GET /transactions` - fetch saved transaction history
- `DELETE /transactions/:id` - delete a transaction by id

## Run Locally

Open `index.html` directly in a browser.

For the connected backend API, run:

```bash
npm start
```

Then open:

```text
http://localhost:8080
```

Or run with Vite:

```bash
npm install
npm run dev
```

Build for deployment:

```bash
npm run build
```

The production output is generated in `dist/`.

## Vercel Deployment

Use these settings on Vercel:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: the folder that contains `index.html`

Important: make sure `index.html`, `styles.css`, `app.js`, and `package.json` are committed to the repository root. Release assets are not used for deployment.

## GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml`.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, choose `GitHub Actions`.
4. Push to the `main` branch.
5. Open the completed `Deploy static site to GitHub Pages` action to find the live URL.

The live link usually looks like:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## Files

- `index.html` - app markup, dashboard sections, API connected card, and modal structure
- `styles.css` - layout, animations, responsive design, chart polish, and black theme
- `app.js` - auth/session logic, transaction CRUD, backend fetch calls, chart rendering, dropdown behavior, and UI interactions
- `local-server.cjs` - static local server plus `GET`, `POST`, and `DELETE` transaction APIs
- `copy-vercel-assets.cjs` - copies required static JavaScript into `dist/` for Vercel builds
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow
- `.nojekyll` - serves static files without Jekyll processing

## Notes

The app stores demo login/session data in `localStorage`. Generated screenshot files are ignored by Git.
