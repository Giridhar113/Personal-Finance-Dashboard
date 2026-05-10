# Personal Finance Dashboard — v1.0 Release

Release version: **Finance Dashboard v1.0**

A strong JavaScript logic project for tracking income, expenses, balance, categories, and monthly summaries with persistent browser storage.

## Portfolio Description

Personal Finance Dashboard is a responsive finance tracker built with HTML, CSS, and JavaScript. It allows users to add income and expense transactions, delete records, view live balance totals, and analyze spending by category and month. Transaction data is saved in `localStorage`, making the dashboard persistent without a backend. The project focuses on practical JavaScript logic, DOM rendering, state management, data summaries, and polished dashboard UI.

## Features

- Login and local session flow
- Add income
- Add expense
- Show total balance
- Delete transaction
- Save data in `localStorage`
- Category summary
- Month summary
- Improved dashboard UI
- Home dashboard with this-month and last-month controls
- Wallet cards with animated allocation progress bars
- Analytics with monthly KPI, donut, category summary, and insights
- Transactions table with animated summary cards and row effects
- Invoice dashboard with dark hero styling and bill cards
- Black theme with responsive desktop and mobile layouts

## Release Goal

Make it strong for portfolio by demonstrating JavaScript fundamentals:

- Data modeling
- DOM updates
- Form handling
- Persistent storage
- Derived totals and summaries
- Add/delete CRUD behavior
- Responsive dashboard UI

## Run Locally

Open `index.html` directly in a browser.

No build step or package install is required.


## Files

- `index.html` - app markup and modal structure
- `styles.css` - layout, animations, responsive design, and black theme
- `app.js` - auth/session logic, chart rendering, dropdown behavior, and UI interactions
- `.github/workflows/pages.yml` - GitHub Pages deployment workflow
- `.nojekyll` - serves static files without Jekyll processing

## Notes

The app stores demo login/session data in `localStorage`. Generated screenshot files are ignored by Git.
