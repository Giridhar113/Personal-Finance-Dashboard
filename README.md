<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Finance Dashboard</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
<main class="app-shell">

  <!-- LOGIN -->
  <section id="loginView" class="login-wrapper" aria-labelledby="loginTitle">
    <div class="login-left" aria-hidden="true">
      <div class="login-left-inner">
        <div class="login-logo"><div class="login-logo-mark">₹</div></div>
        <div class="login-hero-art">
          <div class="art-ring r1"></div><div class="art-ring r2"></div><div class="art-ring r3"></div>
          <div class="art-card ac1">
            <span class="ac-label">Total Balance</span>
            <span class="ac-value">₹14,000</span>
            <span class="ac-trend">↑ +6.8%</span>
          </div>
          <div class="art-card ac2">
            <span class="ac-label">Monthly Saved</span>
            <span class="ac-value">48%</span>
          </div>
          <div class="art-card ac3">
            <span class="ac-label">Income</span>
            <span class="ac-value">₹29,000</span>
          </div>
        </div>
        <div class="login-tagline"><p>Track every rupee,</p><p>grow every dream.</p></div>
        <div class="login-dots"><span class="dot active"></span><span class="dot"></span><span class="dot"></span></div>
      </div>
    </div>

    <div class="login-right">
      <div class="login-form-wrap">
        <div class="login-form-header">
          <h1 id="loginTitle">Create your login</h1>
          <p id="loginSubtitle">Set up your account to keep your finance dashboard private.</p>
        </div>
        <form id="loginForm" class="login-form" novalidate>
          <label class="lf-field" for="email">
            <span class="lf-label">Email address</span>
            <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
          </label>
          <label class="lf-field" for="password">
            <span class="lf-label">Password</span>
            <div class="lf-input-wrap">
              <input id="password" name="password" type="password" autocomplete="current-password" placeholder="At least 6 characters" required>
              <button class="lf-eye" id="togglePassword" type="button" aria-label="Show password">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              </button>
            </div>
          </label>
          <div id="confirmPasswordGroup">
            <label class="lf-field" for="confirmPassword">
              <span class="lf-label">Confirm password</span>
              <input id="confirmPassword" name="confirmPassword" type="password" autocomplete="new-password" placeholder="Re-enter password">
            </label>
          </div>
          <a id="forgotPassword" class="lf-forgot" href="#">Forgot password?</a>
          <p id="loginError" class="lf-error" role="alert" aria-live="polite"></p>
          <button id="submitButton" type="submit">Create Account</button>
          <div class="lf-divider"><span>or continue with</span></div>
          <div class="lf-social">
            <button type="button" class="lf-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>
            <button type="button" class="lf-social-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Apple
            </button>
          </div>
          <p class="lf-switch" id="authSwitchText">Already have an account? <a href="#" id="authSwitchLink">Log in</a></p>
        </form>
      </div>
    </div>
  </section>

  <!-- DASHBOARD -->
  <section id="dashboardView" class="dashboard-view" hidden>
    <aside class="sidebar">
      <div class="sidebar-brand"><div class="brand-mark">₹</div></div>

      <label class="search-box">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="search" placeholder="Search…">
      </label>

      <nav class="side-nav" aria-label="Main Menu">
        <p class="nav-label">Main Menu</p>
        <a class="nav-item active" href="#overview" data-view="overview">
          <span class="nav-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></span>Home
        </a>
        <a class="nav-item" href="#wallets" data-view="wallets">
          <span class="nav-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 12h2"/></svg></span>Wallets
        </a>
        <a class="nav-item" href="#analytics" data-view="analytics">
          <span class="nav-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg></span>Analytics
        </a>
        <a class="nav-item" href="#transactions" data-view="transactions">
          <span class="nav-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M17 1l4 4-4 4M3 11V9a4 4 0 0 1 4-4h14M7 23l-4-4 4-4M21 13v2a4 4 0 0 1-4 4H3"/></svg></span>Transactions
        </a>
        <a class="nav-item" href="#invoices" data-view="invoices">
          <span class="nav-icon"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg></span>Invoices
        </a>
      </nav>

      <button id="logoutButton" type="button" class="logout-link">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16,17 21,12 16,7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Log out
      </button>
    </aside>

    <div class="dashboard-main">
      <header class="dashboard-topbar">
        <h1 id="welcomeMessage">Welcome back</h1>
        <div class="topbar-actions">
          <button type="button" class="icon-btn" aria-label="Help">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><circle cx="12" cy="17" r=".5" fill="currentColor"/></svg>
          </button>
          <button type="button" class="icon-btn notif-btn" aria-label="Notifications">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            <span class="notif-dot"></span>
          </button>
          <div class="user-chip">
            <div class="avatar">U</div>
            <div><strong id="profileName">User</strong><span id="profileEmail">user@example.com</span></div>
          </div>
        </div>
      </header>

      <!-- OVERVIEW -->
      <div class="dashboard-grid dashboard-section active-section" data-section="overview">
        <section class="panel earning-card">
          <div class="panel-head">
            <p>Earning Overview</p>
            <select id="incomePeriod" aria-label="Income period"><option value="this">This Month</option><option value="last">Last Month</option></select>
          </div>
          <div class="metric-row">
            <strong id="monthlyIncome">₹0</strong>
            <span class="trend-up">↑ +6.8%</span>
          </div>
          <div class="mini-chart-wrap"><canvas id="moneyFlowChart"></canvas></div>
        </section>

        <section class="panel spending-card">
          <div class="panel-head">
            <p>Spending Overview</p>
            <select id="expensePeriod" aria-label="Expense period"><option value="this">This Month</option><option value="last">Last Month</option></select>
          </div>
          <div class="metric-row">
            <strong id="monthlyExpenses">₹0</strong>
            <span class="trend-down">↓ −₹15k</span>
          </div>
          <h2 id="homeExpenseKind">Rent / Home is the highest expense this month</h2>
          <div class="spending-legend">
            <span><b class="blue-dot"></b>Rent <em>₹6k</em></span>
            <span><b class="soft-dot"></b>Food <em>₹4k</em></span>
            <span><b class="gray-dot"></b>Others <em>₹5k</em></span>
          </div>
          <div class="breakdown-bar">
            <span class="rent-bar"></span><span class="food-bar"></span><span class="other-bar"></span>
          </div>
        </section>

        <section class="panel cashflow-card">
          <div class="panel-head">
            <p>Cash Flow</p>
            <select id="cashFlowPeriod" aria-label="Cash flow period"><option value="this">This Month</option><option value="last">Last Month</option></select>
          </div>
          <div class="metric-row">
            <strong id="totalBalance">₹0</strong>
            <span id="netFlowBadge" class="saving-pill">Saving</span>
          </div>
          <div class="segment-tabs">
            <button class="active" type="button">Income</button>
            <button type="button">Expense</button>
            <button type="button">Savings</button>
          </div>
          <div class="bar-chart-wrap"><canvas id="cashFlowChart"></canvas></div>
        </section>

        <aside class="panel bills-card">
          <div class="panel-head"><p>Upcoming Bills</p><button type="button" style="width:28px;height:28px;font-size:1.1rem">+</button></div>
          <div class="bill-list">
            <article class="bill-item"><span class="bill-av">N</span><div><strong>Netflix</strong><p>June 28, 2026</p></div><em>₹499</em></article>
            <article class="bill-item"><span class="bill-av">S</span><div><strong>Spotify</strong><p>June 30, 2026</p></div><em>₹119</em></article>
            <article class="bill-item"><span class="bill-av">E</span><div><strong>Electricity</strong><p>July 04, 2026</p></div><em>₹1,200</em></article>
          </div>
          <button class="view-all" type="button" id="viewAllBills">View All</button>
        </aside>

        <section class="panel transaction-card">
          <div class="panel-head"><p>Recent Transactions</p></div>
          <table>
            <thead><tr><th>Activity</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>Salary Credited</td><td>This Month</td><td class="amount-pos">+₹29,000</td><td><span class="status success">Success</span></td></tr>
              <tr><td>Monthly Expenses</td><td>This Month</td><td class="amount-neg">−₹15,000</td><td><span class="status scheduled">Tracked</span></td></tr>
            </tbody>
          </table>
        </section>

        <section class="panel month-comparison-card">
          <div class="panel-head"><p>This Month vs Last Month</p></div>
          <div class="month-snapshot-grid">
            <article>
              <span>This Month</span>
              <strong id="homeThisMonthSpend">₹15,000</strong>
              <p id="homeThisMonthKind">Top: Rent / Home</p>
            </article>
            <article>
              <span>Last Month</span>
              <strong id="homeLastMonthSpend">₹18,000</strong>
              <p id="homeLastMonthKind">Top: Food & Groceries</p>
            </article>
            <article>
              <span>Last 3 Months</span>
              <strong id="homeThreeMonthSpend">₹49,000</strong>
              <p>Average monthly spend: ₹16,333</p>
            </article>
          </div>
        </section>

        <!-- 3-Month Trend -->
        <section class="panel three-month-card">
          <div class="panel-head">
            <p>3-Month Overview</p>
            <div class="trend-inline-legend">
              <span><i style="background:#7c5cfc"></i>Income</span>
              <span><i style="background:#ef476f"></i>Expenses</span>
              <span><i style="background:#06d6a0"></i>Savings</span>
            </div>
          </div>
          <div id="threeMonthGrid" class="three-month-grid"></div>
        </section>
      </div>

      <!-- WALLETS -->
      <section class="dashboard-section page-section" data-section="wallets" hidden>
        <div class="section-head">
          <div><p class="eyebrow">Wallets</p><h2>Your Money Accounts</h2></div>
          <button type="button" class="primary-action" id="addWalletBtn">+ Add Wallet</button>
        </div>
        <div class="wallet-grid" id="walletGrid">
          <article class="wallet-card main-wallet"><p>Main Savings</p><strong>₹14,000</strong><span>Remaining this month</span></article>
          <article class="wallet-card"><p>Salary Account</p><strong>₹29,000</strong><span>Monthly income received</span></article>
          <article class="wallet-card"><p>Expense Wallet</p><strong>₹15,000</strong><span>Monthly spending limit used</span></article>
        </div>
        <div class="panel wallet-detail">
          <div class="panel-head"><p>Wallet Allocation</p></div>
          <div class="alloc-list">
            <div class="alloc-row"><span>Rent / Home</span><strong>₹6,000</strong><div class="alloc-track"><div class="alloc-fill" style="--p:40%;--c:#7c5cfc"></div></div></div>
            <div class="alloc-row"><span>Food &amp; Groceries</span><strong>₹4,000</strong><div class="alloc-track"><div class="alloc-fill" style="--p:27%;--c:#5b8dee"></div></div></div>
            <div class="alloc-row"><span>Travel</span><strong>₹2,000</strong><div class="alloc-track"><div class="alloc-fill" style="--p:13%;--c:#06d6a0"></div></div></div>
            <div class="alloc-row"><span>Bills &amp; Recharge</span><strong>₹2,000</strong><div class="alloc-track"><div class="alloc-fill" style="--p:13%;--c:#ffd166"></div></div></div>
            <div class="alloc-row"><span>Other Spending</span><strong>₹1,000</strong><div class="alloc-track"><div class="alloc-fill" style="--p:7%;--c:#ef476f"></div></div></div>
          </div>
        </div>
      </section>

      <!-- ANALYTICS -->
      <section class="dashboard-section page-section" data-section="analytics" hidden>
        <div class="section-head">
          <div><p class="eyebrow">Analytics</p><h2>Monthly Financial Health</h2></div>
          <div class="period-toggle">
            <button class="period-btn active" data-period="this" type="button">This Month</button>
            <button class="period-btn" data-period="last" type="button">Last Month</button>
          </div>
        </div>

        <!-- KPI row -->
        <div class="kpi-row">
          <article class="panel kpi-card">
            <div class="kpi-icon income-ic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            </div>
            <div class="kpi-body"><p>Income</p><strong id="analyticsIncome">₹29,000</strong><span id="analyticsIncomeChange" class="kpi-badge pos">+7.4%</span></div>
          </article>
          <article class="panel kpi-card">
            <div class="kpi-icon expense-ic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
            </div>
            <div class="kpi-body"><p>Expenses</p><strong id="analyticsExpenses">₹15,000</strong><span id="analyticsExpChange" class="kpi-badge neg">−16.7%</span></div>
          </article>
          <article class="panel kpi-card">
            <div class="kpi-icon savings-ic">
              <span class="rupee-icon">₹</span>
            </div>
            <div class="kpi-body"><p>Savings</p><strong id="analyticsSavings">₹14,000</strong><span id="analyticsSavPct" class="saving-pill">48% saved</span></div>
          </article>
        </div>

        <!-- Charts row -->
        <div class="analytics-charts-row">
          <div class="panel donut-panel">
            <div class="panel-head"><p id="donutTitle">Spending — This Month</p></div>
            <div class="donut-outer">
              <div class="donut-canvas-wrap">
                <canvas id="analyticsDonutChart"></canvas>
                <div class="donut-center-text"><span id="donutTotal">₹15,000</span><small>total spent</small></div>
              </div>
              <div class="donut-legend" id="donutLegend"></div>
            </div>
          </div>
          <div class="panel breakdown-panel">
            <div class="panel-head"><p id="breakdownTitle">Category Breakdown</p></div>
            <div id="breakdownList" class="breakdown-list"></div>
          </div>
        </div>

        <!-- Insights -->
        <div class="panel">
          <div class="panel-head"><p id="insightsTitle">Financial Insights</p></div>
          <div class="analysis-list" id="analyticsList"></div>
        </div>
      </section>

      <!-- TRANSACTIONS -->
      <section class="dashboard-section page-section" data-section="transactions" hidden>
        <div class="section-head">
          <div><p class="eyebrow">Transactions</p><h2>All Money Movement</h2></div>
          <button type="button" class="primary-action" id="addTransactionBtn">+ Add Transaction</button>
        </div>
        <div class="tx-pulse-grid">
          <article><span>Income</span><strong>₹29,000</strong><p>Salary credited</p></article>
          <article><span>Expenses</span><strong>₹15,000</strong><p>6 tracked payments</p></article>
          <article><span>Net Flow</span><strong>₹14,000</strong><p>Positive this month</p></article>
        </div>
        <div class="panel transaction-card full-table">
          <div class="panel-head"><p>Transaction History</p></div>
          <table id="transactionTable">
            <thead><tr><th>Activity</th><th>Category</th><th>Date</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody id="transactionBody">
              <tr><td>Salary Credited</td><td>Income</td><td>May 01</td><td class="amount-pos">+₹29,000</td><td><span class="status success">Success</span></td></tr>
              <tr><td>House Rent</td><td>Rent / Home</td><td>May 03</td><td class="amount-neg">−₹6,000</td><td><span class="status scheduled">Paid</span></td></tr>
              <tr><td>Groceries</td><td>Food</td><td>May 08</td><td class="amount-neg">−₹4,000</td><td><span class="status scheduled">Tracked</span></td></tr>
              <tr><td>Commute</td><td>Travel</td><td>May 12</td><td class="amount-neg">−₹2,000</td><td><span class="status scheduled">Tracked</span></td></tr>
              <tr><td>Phone &amp; Internet</td><td>Bills</td><td>May 16</td><td class="amount-neg">−₹2,000</td><td><span class="status scheduled">Tracked</span></td></tr>
              <tr><td>Shopping</td><td>Other</td><td>May 21</td><td class="amount-neg">−₹1,000</td><td><span class="status scheduled">Tracked</span></td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- INVOICES -->
      <section class="dashboard-section page-section" data-section="invoices" hidden>
        <div class="section-head">
          <div><p class="eyebrow">Invoices</p><h2>Bills &amp; Payment Records</h2></div>
        </div>
        <div class="invoice-hero panel">
          <div>
            <p>Invoice Control</p>
            <h3>₹2,498 tracked across recurring payments</h3>
            <span>Due, paid, and scheduled bills are separated for quick scanning.</span>
          </div>
          <div class="invoice-orbit" aria-hidden="true"><span></span><b></b><i></i></div>
        </div>
        <div class="invoice-grid" id="invoiceGrid">
          <article class="panel invoice-card"><span class="invoice-status due">Due</span><h3>Electricity Bill</h3><p>Due July 04, 2026</p><strong>₹1,200</strong></article>
          <article class="panel invoice-card"><span class="invoice-status paid">Paid</span><h3>Phone Recharge</h3><p>Paid this month</p><strong>₹799</strong></article>
          <article class="panel invoice-card"><span class="invoice-status scheduled">Scheduled</span><h3>Netflix Subscription</h3><p>June 28, 2026</p><strong>₹499</strong></article>
        </div>
        <div class="panel invoice-summary">
          <div class="panel-head"><p>Invoice Summary</p></div>
          <p>Your recurring bills are under control. Upcoming invoice value is ₹1,699, while already-paid recharge spending is ₹799.</p>
        </div>
      </section>

    </div>
  </section>
</main>

<!-- MODALS -->
<div id="modalViewAllBills" class="modal-overlay" hidden aria-modal="true" role="dialog">
  <div class="modal-box">
    <div class="modal-head"><h2>All Upcoming Bills</h2><button class="modal-close" type="button">✕</button></div>
    <div class="modal-body">
      <div class="bill-list">
        <article class="bill-item"><span class="bill-av">N</span><div><strong>Netflix Subscription</strong><p>June 28, 2026</p></div><em>₹499</em></article>
        <article class="bill-item"><span class="bill-av">S</span><div><strong>Spotify Premium</strong><p>June 30, 2026</p></div><em>₹119</em></article>
        <article class="bill-item"><span class="bill-av">E</span><div><strong>Electricity Bill</strong><p>July 04, 2026</p></div><em>₹1,200</em></article>
        <article class="bill-item"><span class="bill-av">P</span><div><strong>Phone Recharge</strong><p>July 16, 2026</p></div><em>₹799</em></article>
      </div>
    </div>
  </div>
</div>

<div id="modalAddWallet" class="modal-overlay" hidden aria-modal="true" role="dialog">
  <div class="modal-box">
    <div class="modal-head"><h2>Add New Wallet</h2><button class="modal-close" type="button">✕</button></div>
    <div class="modal-body">
      <form id="addWalletForm" class="modal-form">
        <label class="mf-field"><span>Wallet Name</span><input type="text" name="walletName" placeholder="e.g. Emergency Fund" required></label>
        <label class="mf-field"><span>Balance (₹)</span><input type="number" name="walletBalance" placeholder="e.g. 5000" min="0" required></label>
        <label class="mf-field"><span>Description</span><input type="text" name="walletDesc" placeholder="Short description"></label>
        <div class="mf-actions"><button type="button" class="mf-cancel modal-close">Cancel</button><button type="submit" class="mf-submit">Add Wallet</button></div>
      </form>
    </div>
  </div>
</div>

<div id="modalAddTransaction" class="modal-overlay" hidden aria-modal="true" role="dialog">
  <div class="modal-box">
    <div class="modal-head"><h2>Add Transaction</h2><button class="modal-close" type="button">✕</button></div>
    <div class="modal-body">
      <form id="addTransactionForm" class="modal-form">
        <label class="mf-field"><span>Activity</span><input type="text" name="txActivity" placeholder="e.g. Grocery Shopping" required></label>
        <label class="mf-field"><span>Category</span><select name="txCategory"><option>Income</option><option>Rent / Home</option><option>Food</option><option>Travel</option><option>Bills</option><option>Other</option></select></label>
        <label class="mf-field"><span>Amount (₹)</span><input type="number" name="txAmount" placeholder="e.g. 2500" min="1" required></label>
        <label class="mf-field"><span>Type</span><select name="txType"><option value="credit">Credit (+)</option><option value="debit">Debit (−)</option></select></label>
        <label class="mf-field"><span>Date</span><input type="date" name="txDate" required></label>
        <div class="mf-actions"><button type="button" class="mf-cancel modal-close">Cancel</button><button type="submit" class="mf-submit">Add Transaction</button></div>
      </form>
    </div>
  </div>
</div>

<div id="modalCreateInvoice" class="modal-overlay" hidden aria-modal="true" role="dialog">
  <div class="modal-box">
    <div class="modal-head"><h2>Create Invoice</h2><button class="modal-close" type="button">✕</button></div>
    <div class="modal-body">
      <form id="createInvoiceForm" class="modal-form">
        <label class="mf-field"><span>Invoice Title</span><input type="text" name="invTitle" placeholder="e.g. Electricity Bill" required></label>
        <label class="mf-field"><span>Amount (₹)</span><input type="number" name="invAmount" placeholder="e.g. 1200" min="1" required></label>
        <label class="mf-field"><span>Due Date</span><input type="date" name="invDate" required></label>
        <label class="mf-field"><span>Status</span><select name="invStatus"><option value="due">Due</option><option value="scheduled">Scheduled</option><option value="paid">Paid</option></select></label>
        <div class="mf-actions"><button type="button" class="mf-cancel modal-close">Cancel</button><button type="submit" class="mf-submit">Create Invoice</button></div>
      </form>
    </div>
  </div>
</div>

<div id="toast" class="toast" role="status" aria-live="polite"></div>
<script src="app.js" defer></script>
</body>
</html>
