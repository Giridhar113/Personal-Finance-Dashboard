
const AUTH_TOKEN_KEY = "financeDashboardAuthToken";
const USER_KEY = "financeDashboardUser";
const TRANSACTIONS_KEY = "financeDashboardTransactionsV1";
const loginTitle = document.querySelector("#loginTitle");
const loginView = document.querySelector("#loginView");
const dashboardView = document.querySelector("#dashboardView");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const loginSubtitle = document.querySelector("#loginSubtitle");
const confirmPasswordGroup = document.querySelector("#confirmPasswordGroup");
const confirmPasswordInput = document.querySelector("#confirmPassword");
const submitButton = document.querySelector("#submitButton");
const demoLoginButton = document.querySelector("#demoLoginButton");
const passwordInput = document.querySelector("#password");
const togglePasswordButton = document.querySelector("#togglePassword");
const forgotPasswordLink = document.querySelector("#forgotPassword");
const logoutButton = document.querySelector("#logoutButton");
const authSwitchLink = document.querySelector("#authSwitchLink");
const authSwitchText = document.querySelector("#authSwitchText");
const welcomeMessage = document.querySelector("#welcomeMessage");
const totalBalance = document.querySelector("#totalBalance");
const monthlyIncome = document.querySelector("#monthlyIncome");
const monthlyExpenses = document.querySelector("#monthlyExpenses");
const netFlowBadge = document.querySelector("#netFlowBadge");
const moneyFlowChart = document.querySelector("#moneyFlowChart");
const cashFlowChart = document.querySelector("#cashFlowChart");
const profileName = document.querySelector("#profileName");
const profileEmail = document.querySelector("#profileEmail");
const navItems = document.querySelectorAll(".nav-item[data-view]");
const dashboardSections = document.querySelectorAll(".dashboard-section[data-section]");
const homeExpenseKind = document.querySelector("#homeExpenseKind");
const homeThisMonthSpend = document.querySelector("#homeThisMonthSpend");
const homeLastMonthSpend = document.querySelector("#homeLastMonthSpend");
const homeThreeMonthSpend = document.querySelector("#homeThreeMonthSpend");
const homeThisMonthKind = document.querySelector("#homeThisMonthKind");
const homeLastMonthKind = document.querySelector("#homeLastMonthKind");
const predictionIncome = document.querySelector("#predictionIncome");
const predictionExpenses = document.querySelector("#predictionExpenses");
const predictionSavings = document.querySelector("#predictionSavings");
const predictionTopCategory = document.querySelector("#predictionTopCategory");
const predictionAdvice = document.querySelector("#predictionAdvice");
const predictionConfidence = document.querySelector("#predictionConfidence");
const incomePeriodSelect = document.querySelector("#incomePeriod");
const expensePeriodSelect = document.querySelector("#expensePeriod");
const cashFlowPeriodSelect = document.querySelector("#cashFlowPeriod");
const transactionBody = document.querySelector("#transactionBody");
const recentTransactionBody = document.querySelector("#recentTransactionBody");
const categorySummaryList = document.querySelector("#categorySummaryList");
const monthSummaryList = document.querySelector("#monthSummaryList");
const categoryFilterBar = document.querySelector("#categoryFilterBar");
const CATEGORY_FILTERS = ["All", "Income", "Food", "Travel", "Shopping", "Bills", "Rent / Home", "Other"];
let activeTransactionCategory = "All";

const DEFAULT_TRANSACTIONS = [
  { id: "seed-2026-05-salary", activity: "Salary Credited", category: "Income", date: "2026-05-01", amount: 29000, type: "credit", status: "Success" },
  { id: "seed-2026-05-rent", activity: "House Rent", category: "Rent / Home", date: "2026-05-03", amount: 6000, type: "debit", status: "Paid" },
  { id: "seed-2026-05-grocery", activity: "Groceries", category: "Food", date: "2026-05-08", amount: 4000, type: "debit", status: "Tracked" },
  { id: "seed-2026-05-commute", activity: "Commute", category: "Travel", date: "2026-05-12", amount: 2000, type: "debit", status: "Tracked" },
  { id: "seed-2026-05-phone", activity: "Phone & Internet", category: "Bills", date: "2026-05-16", amount: 2000, type: "debit", status: "Tracked" },
  { id: "seed-2026-05-shopping", activity: "Shopping", category: "Shopping", date: "2026-05-21", amount: 1000, type: "debit", status: "Tracked" },
  { id: "seed-2026-04-salary", activity: "Salary Credited", category: "Income", date: "2026-04-01", amount: 27000, type: "credit", status: "Success" },
  { id: "seed-2026-04-food", activity: "Groceries & Dining", category: "Food", date: "2026-04-09", amount: 6500, type: "debit", status: "Tracked" },
  { id: "seed-2026-04-rent", activity: "House Rent", category: "Rent / Home", date: "2026-04-03", amount: 6000, type: "debit", status: "Paid" },
  { id: "seed-2026-04-shopping", activity: "Shopping", category: "Shopping", date: "2026-04-18", amount: 2500, type: "debit", status: "Tracked" },
  { id: "seed-2026-04-travel", activity: "Travel", category: "Travel", date: "2026-04-22", amount: 1800, type: "debit", status: "Tracked" },
  { id: "seed-2026-04-bills", activity: "Bills & Recharge", category: "Bills", date: "2026-04-25", amount: 1200, type: "debit", status: "Tracked" },
  { id: "seed-2026-03-salary", activity: "Salary Credited", category: "Income", date: "2026-03-01", amount: 26000, type: "credit", status: "Success" },
  { id: "seed-2026-03-rent", activity: "House Rent", category: "Rent / Home", date: "2026-03-03", amount: 6000, type: "debit", status: "Paid" },
  { id: "seed-2026-03-food", activity: "Groceries", category: "Food", date: "2026-03-08", amount: 4200, type: "debit", status: "Tracked" },
  { id: "seed-2026-03-travel", activity: "Travel", category: "Travel", date: "2026-03-12", amount: 2200, type: "debit", status: "Tracked" },
  { id: "seed-2026-03-bills", activity: "Bills", category: "Bills", date: "2026-03-18", amount: 2100, type: "debit", status: "Tracked" },
  { id: "seed-2026-03-other", activity: "Other Spending", category: "Other", date: "2026-03-24", amount: 1500, type: "debit", status: "Tracked" }
];
let authMode = localStorage.getItem(USER_KEY) ? "login" : "signup";

const overviewData = {
  totalBalance: 14000,
  monthlyIncome: 29000,
  monthlyExpenses: 15000,
  moneyFlow: [
    0,600,1100,1500,2100,2600,3200,3700,4300,4800,
    5400,5900,6500,7000,7600,8100,8700,9200,9800,10300,
    10900,11400,11900,12400,12800,13200,13500,13800,13900,14000
  ]
};

const homePeriodData = {
  this: {
    label: "This Month",
    balance: 14000,
    income: 29000,
    expenses: 15000,
    incomeTrend: "↑ +6.8%",
    expenseTrend: "↓ −₹15k",
    moneyFlow: [
      0,600,1100,1500,2100,2600,3200,3700,4300,4800,
      5400,5900,6500,7000,7600,8100,8700,9200,9800,10300,
      10900,11400,11900,12400,12800,13200,13500,13800,13900,14000
    ],
    cashFlow: [12000,15000,24000,13500,20000,17000,24500,29000,18000,22000,17000,12500],
    activeMonth: "May",
    topExpense: "Rent / Home",
    legend: [
      ["Rent", "₹6k"],
      ["Food", "₹4k"],
      ["Others", "₹5k"]
    ]
  },
  last: {
    label: "Last Month",
    balance: 9000,
    income: 27000,
    expenses: 18000,
    incomeTrend: "↑ +3.8%",
    expenseTrend: "↑ +₹3k",
    moneyFlow: [
      0,450,900,1300,1900,2300,2700,3300,3600,4100,
      4550,5000,5400,5900,6200,6600,7000,7300,7650,8000,
      8300,8500,8650,8750,8850,8900,8950,8980,9000,9000
    ],
    cashFlow: [11000,14000,21000,17000,18500,16000,23000,27000,17500,20500,16500,11800],
    activeMonth: "Apr",
    topExpense: "Food & Groceries",
    legend: [
      ["Food", "₹6.5k"],
      ["Rent", "₹6k"],
      ["Others", "₹5.5k"]
    ]
  }
};

const selectedHomePeriods = {
  income: "this",
  expense: "this",
  cash: "this"
};

const monthlySnapshots = {
  this: {
    label: "This Month",
    income: 29000,
    expenses: 15000,
    incomeChange: "+7.4%",
    expenseChange: "−16.7%",
    categories: [
      { name: "Rent / Home", amount: 6000, color: "#7c5cfc" },
      { name: "Food & Groceries", amount: 4000, color: "#5b8dee" },
      { name: "Travel", amount: 2000, color: "#06d6a0" },
      { name: "Bills & Recharge", amount: 2000, color: "#ffd166" },
      { name: "Other Spending", amount: 1000, color: "#ef476f" }
    ],
    insights: [
      ["Home spending leads May", "Rent / Home is the biggest expense type this month at ₹6,000."],
      ["Expenses improved", "Total spending is ₹3,000 lower than last month."],
      ["Savings are healthy", "You kept ₹14,000 after planned expenses, a 48% savings rate."]
    ]
  },
  last: {
    label: "Last Month",
    income: 27000,
    expenses: 18000,
    incomeChange: "+3.8%",
    expenseChange: "+20.0%",
    categories: [
      { name: "Food & Groceries", amount: 6500, color: "#5b8dee" },
      { name: "Rent / Home", amount: 6000, color: "#7c5cfc" },
      { name: "Shopping", amount: 2500, color: "#ef476f" },
      { name: "Travel", amount: 1800, color: "#06d6a0" },
      { name: "Bills & Recharge", amount: 1200, color: "#ffd166" }
    ],
    insights: [
      ["Food led last month", "Food & Groceries was the highest expense type at ₹6,500."],
      ["Shopping spike", "Shopping added ₹2,500 to last month’s outflow."],
      ["Lower savings", "Savings were ₹9,000, so May is tracking better."]
    ]
  }
};

const threeMonthSnapshots = [
  { month: "March", income: 26000, expenses: 16000, savings: 10000 },
  { month: "April", income: 27000, expenses: 18000, savings: 9000 },
  { month: "May", income: 29000, expenses: 15000, savings: 14000 }
];

/* ── Session helpers ── */
function createSession(email) {
  localStorage.setItem(AUTH_TOKEN_KEY, btoa(`${email}:${Date.now()}`));
}
function clearSession() {
  localStorage.removeItem(AUTH_TOKEN_KEY);
}
function isLoggedIn() {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY));
}
function getSavedUser() {
  const s = localStorage.getItem(USER_KEY);
  return s ? JSON.parse(s) : null;
}
function saveUser(email, password) {
  localStorage.setItem(USER_KEY, JSON.stringify({ email, password }));
}
function isSetupMode() {
  return !getSavedUser();
}
function renderLoginMode() {
  const setup = isSetupMode();
  loginTitle.textContent = setup ? "Create your login" : "Log in to continue";
  loginSubtitle.textContent = setup
    ? "Set up your account to keep your finance dashboard private."
    : "Enter your saved email and password to unlock your dashboard.";
  confirmPasswordGroup.hidden = !setup;
  if (confirmPasswordInput) confirmPasswordInput.required = setup;
  submitButton.textContent = setup ? "Create Account" : "Log In";

  if (forgotPasswordLink) forgotPasswordLink.hidden = setup;

  if (authSwitchLink && authSwitchText) {
    if (setup) {
      authSwitchText.innerHTML = 'Already have an account? <a href="#" id="authSwitchLink">Log in</a>';
    } else {
      authSwitchText.innerHTML = "Don't have an account? <a href=\"#\" id=\"authSwitchLink\">Create one</a>";
    }
    document.querySelector("#authSwitchLink")?.addEventListener("click", handleAuthSwitch);
  }
}

function handleAuthSwitch(e) {
  e.preventDefault();
  if (isSetupMode()) {
  } else {
    localStorage.removeItem(USER_KEY);
  }
  loginForm.reset();
  loginError.textContent = "";
  renderLoginMode();
}
function renderAuthState() {
  const authenticated = isLoggedIn();
  loginView.hidden = authenticated;
  dashboardView.hidden = !authenticated;
  document.body.classList.toggle("dashboard-mode", authenticated);
  if (!authenticated) {
    renderLoginMode();
    return;
  }

  if (window.location.hash !== "#overview") {
    window.location.hash = getCurrentView();
  }
  renderDashboard();
}
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const email = String(formData.get("email")).trim().toLowerCase();
  const password = String(formData.get("password"));
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (isSetupMode()) {
    if (password.length < 6) { loginError.textContent = "Password must be at least 6 characters."; return; }
    if (password !== confirmPassword) { loginError.textContent = "Passwords do not match."; return; }
    saveUser(email, password);
    createSession(email);
    loginForm.reset();
    renderAuthState();
    return;
  }

  const savedUser = getSavedUser();
  if (savedUser && savedUser.email === email && savedUser.password === password) {
    createSession(email);
    loginForm.reset();
    renderAuthState();
    return;
  }
  loginError.textContent = "Invalid email or password.";
});

logoutButton.addEventListener("click", () => {
  clearSession();
  history.replaceState(null, "", window.location.pathname);
  renderAuthState();
});

togglePasswordButton.addEventListener("click", () => {
  const showing = passwordInput.type === "text";
  passwordInput.type = showing ? "password" : "text";
  togglePasswordButton.setAttribute("aria-label", showing ? "Show password" : "Hide password");
});

forgotPasswordLink?.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem(USER_KEY);
  clearSession();
  loginForm.reset();
  renderAuthState();
});

authSwitchLink?.addEventListener("click", handleAuthSwitch);
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

function loadTransactions() {
  const saved = localStorage.getItem(TRANSACTIONS_KEY);
  if (!saved) {
    saveTransactions(DEFAULT_TRANSACTIONS);
    return [...DEFAULT_TRANSACTIONS];
  }
  try {
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.map(normalizeTransactionCategory) : [...DEFAULT_TRANSACTIONS];
  } catch {
    return [...DEFAULT_TRANSACTIONS];
  }
}

function normalizeTransactionCategory(item) {
  if (String(item.activity || "").toLowerCase().includes("shopping")) {
    return { ...item, category: "Shopping" };
  }
  return item;
}

function saveTransactions(transactions) {
  localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions.map(normalizeTransactionCategory)));
}

function rerenderFinanceViews() {
  refreshDerivedData();
  renderHomeSnapshots();
  renderHomePeriodCards();
  renderThreeMonthGrid();
  renderAnalytics(getActiveAnalyticsPeriod());
  if (getCurrentView() === "overview") {
    drawMoneyFlowChart();
    drawCashFlowChart();
  }
}

function monthKey(date) {
  return String(date || "").slice(0, 7);
}

function monthLabelFromKey(key) {
  const [year, month] = key.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString("en-IN", { month: "long", year: "numeric" });
}

function displayDate(date) {
  return date ? new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", { month: "short", day: "2-digit" }) : "—";
}

function summarizeTransactions(transactions, key = "2026-05") {
  const scoped = transactions.filter(item => monthKey(item.date) === key);
  const income = scoped.filter(item => item.type === "credit").reduce((sum, item) => sum + Number(item.amount), 0);
  const expenses = scoped.filter(item => item.type === "debit").reduce((sum, item) => sum + Number(item.amount), 0);
  const categories = {};

  scoped.filter(item => item.type === "debit").forEach(item => {
    categories[item.category] = (categories[item.category] || 0) + Number(item.amount);
  });

  const categoryRows = Object.entries(categories)
    .map(([name, amount], index) => ({
      name,
      amount,
      color: ["#7c5cfc", "#5b8dee", "#06d6a0", "#ffd166", "#ef476f", "#94a3b8"][index % 6]
    }))
    .sort((a, b) => b.amount - a.amount);

  return {
    key,
    label: key === "2026-05" ? "This Month" : key === "2026-04" ? "Last Month" : monthLabelFromKey(key),
    income,
    expenses,
    savings: income - expenses,
    count: scoped.length,
    categoryRows,
    topExpense: categoryRows[0]?.name || "No expense",
    scoped
  };
}

function refreshDerivedData() {
  const transactions = loadTransactions();
  const thisStats = summarizeTransactions(transactions, "2026-05");
  const lastStats = summarizeTransactions(transactions, "2026-04");
  const marchStats = summarizeTransactions(transactions, "2026-03");

  homePeriodData.this.income = thisStats.income;
  homePeriodData.this.expenses = thisStats.expenses;
  homePeriodData.this.balance = thisStats.savings;
  homePeriodData.this.topExpense = thisStats.topExpense;
  homePeriodData.this.legend = buildLegend(thisStats);

  homePeriodData.last.income = lastStats.income;
  homePeriodData.last.expenses = lastStats.expenses;
  homePeriodData.last.balance = lastStats.savings;
  homePeriodData.last.topExpense = lastStats.topExpense;
  homePeriodData.last.legend = buildLegend(lastStats);

  updateSnapshotFromStats(monthlySnapshots.this, thisStats, lastStats);
  updateSnapshotFromStats(monthlySnapshots.last, lastStats, marchStats);

  threeMonthSnapshots.splice(0, threeMonthSnapshots.length,
    { month: "March", income: marchStats.income, expenses: marchStats.expenses, savings: marchStats.savings },
    { month: "April", income: lastStats.income, expenses: lastStats.expenses, savings: lastStats.savings },
    { month: "May", income: thisStats.income, expenses: thisStats.expenses, savings: thisStats.savings }
  );

  renderTransactionTables(transactions, thisStats);
  renderSummaries(transactions);
  updateTransactionCards(thisStats);
  renderUpcomingPrediction(transactions);
}

function buildLegend(stats) {
  const rows = stats.categoryRows.slice(0, 3);
  while (rows.length < 3) rows.push({ name: "Other", amount: 0 });
  return rows.map(row => [row.name, compactCurrency(row.amount)]);
}

function compactCurrency(amount) {
  return amount >= 1000 ? `₹${Number(amount / 1000).toFixed(amount % 1000 ? 1 : 0)}k` : formatCurrency(amount);
}

function renderUpcomingPrediction(transactions) {
  const monthKeys = ["2026-03", "2026-04", "2026-05"];
  const stats = monthKeys.map(key => summarizeTransactions(transactions, key));
  const avgIncome = stats.reduce((sum, item) => sum + item.income, 0) / stats.length;
  const avgExpenses = stats.reduce((sum, item) => sum + item.expenses, 0) / stats.length;
  const incomeTrend = (stats[2].income - stats[0].income) / 2;
  const expenseTrend = (stats[2].expenses - stats[0].expenses) / 2;
  const expectedIncome = Math.max(0, Math.round(avgIncome + incomeTrend * 0.35));
  const expectedExpenses = Math.max(0, Math.round(avgExpenses + expenseTrend * 0.35));
  const expectedSavings = expectedIncome - expectedExpenses;
  const categoryTotals = {};

  transactions
    .filter(item => item.type === "debit" && monthKeys.includes(monthKey(item.date)))
    .forEach(item => {
      categoryTotals[item.category] = (categoryTotals[item.category] || 0) + Number(item.amount);
    });

  const topCategory = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1])[0]?.[0] || "No expense";
  const totalRecords = stats.reduce((sum, item) => sum + item.count, 0);
  const confidence = totalRecords >= 15 ? "High confidence" : totalRecords >= 8 ? "Medium confidence" : "Early estimate";

  if (predictionIncome) predictionIncome.textContent = formatCurrency(expectedIncome);
  if (predictionExpenses) predictionExpenses.textContent = formatCurrency(expectedExpenses);
  if (predictionSavings) predictionSavings.textContent = formatCurrency(expectedSavings);
  if (predictionTopCategory) predictionTopCategory.textContent = `Top risk: ${topCategory}`;
  if (predictionAdvice) {
    predictionAdvice.textContent = expectedSavings >= 0
      ? `Possible ${formatCurrency(expectedSavings)} savings next month`
      : `Watch spending by ${formatCurrency(Math.abs(expectedSavings))}`;
  }
  if (predictionConfidence) predictionConfidence.textContent = confidence;
}

function updateSnapshotFromStats(snapshot, stats, previousStats) {
  const incomeDelta = previousStats.income ? ((stats.income - previousStats.income) / previousStats.income) * 100 : 0;
  const expenseDelta = previousStats.expenses ? ((stats.expenses - previousStats.expenses) / previousStats.expenses) * 100 : 0;
  snapshot.income = stats.income;
  snapshot.expenses = stats.expenses;
  snapshot.incomeChange = `${incomeDelta >= 0 ? "+" : ""}${incomeDelta.toFixed(1)}%`;
  snapshot.expenseChange = `${expenseDelta >= 0 ? "+" : ""}${expenseDelta.toFixed(1)}%`;
  snapshot.categories = stats.categoryRows.length ? stats.categoryRows : [{ name: "No expenses", amount: 1, color: "#94a3b8" }];
  snapshot.insights = [
    [`${stats.topExpense} leads spending`, `${stats.topExpense} is the highest expense category for ${stats.label.toLowerCase()}.`],
    ["Income vs expense", `${formatCurrency(stats.income)} income against ${formatCurrency(stats.expenses)} expenses.`],
    ["Current balance", `${formatCurrency(stats.savings)} remaining after tracked transactions.`]
  ];
}

function getDisplayName() {
  const u = getSavedUser();
  const emailName = u ? u.email.split("@")[0] : "User";
  return emailName.replace(/[._-]+/g, " ").replace(/\b\w/g, l => l.toUpperCase());
}

function renderTransactionTables(transactions, stats) {
  const sorted = [...transactions].sort((a, b) => new Date(b.date) - new Date(a.date));
  const filtered = activeTransactionCategory === "All"
    ? sorted
    : sorted.filter(item => item.category === activeTransactionCategory);
  if (transactionBody) {
    transactionBody.innerHTML = filtered.length
      ? filtered.map(transactionRowTemplate).join("")
      : `<tr><td colspan="6" class="empty-filter-state">No ${activeTransactionCategory} transactions found.</td></tr>`;
  }
  if (recentTransactionBody) {
    const recent = sorted.filter(item => monthKey(item.date) === "2026-05").slice(0, 4);
    recentTransactionBody.innerHTML = recent.map(item => `
      <tr>
        <td>${item.activity}</td>
        <td>${displayDate(item.date)}</td>
        <td class="${item.type === "credit" ? "amount-pos" : "amount-neg"}">${item.type === "credit" ? "+" : "−"}${formatCurrency(item.amount)}</td>
        <td><span class="status ${item.type === "credit" ? "success" : "scheduled"}">${item.status}</span></td>
      </tr>
    `).join("");
  }
}

const DELETE_TX_ICON = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>`;

function transactionRowTemplate(item) {
  const isCredit = item.type === "credit";
  return `
    <tr data-id="${item.id}">
      <td>${item.activity}</td>
      <td>${item.category}</td>
      <td>${displayDate(item.date)}</td>
      <td class="${isCredit ? "amount-pos" : "amount-neg"}">${isCredit ? "+" : "−"}${formatCurrency(item.amount)}</td>
      <td><span class="status ${isCredit ? "success" : "scheduled"}">${item.status}</span></td>
      <td class="tx-action-cell">
        <button class="delete-tx-btn" type="button" data-id="${item.id}" aria-label="Delete ${item.activity}">
          ${DELETE_TX_ICON}
          <span class="delete-tx-label">Delete</span>
        </button>
      </td>
    </tr>
  `;
}

function updateTransactionCards(stats) {
  document.getElementById("txIncomeTotal").textContent = formatCurrency(stats.income);
  document.getElementById("txExpenseTotal").textContent = formatCurrency(stats.expenses);
  document.getElementById("txNetTotal").textContent = formatCurrency(stats.savings);
  document.getElementById("txExpenseCount").textContent = `${stats.scoped.filter(item => item.type === "debit").length} tracked payments`;
  document.getElementById("txNetLabel").textContent = stats.savings >= 0 ? "Positive this month" : "Needs attention";
}

function renderSummaries(transactions) {
  const thisStats = summarizeTransactions(transactions, "2026-05");
  if (categorySummaryList) {
    const max = Math.max(...thisStats.categoryRows.map(row => row.amount), 1);
    categorySummaryList.innerHTML = thisStats.categoryRows.map(row => `
      <article>
        <span>${row.name}</span>
        <strong>${formatCurrency(row.amount)}</strong>
        <div class="summary-track"><i style="width:${Math.round((row.amount / max) * 100)}%;background:${row.color}"></i></div>
      </article>
    `).join("");
  }

  if (monthSummaryList) {
    const monthRows = ["2026-05", "2026-04", "2026-03"].map(key => summarizeTransactions(transactions, key));
    monthSummaryList.innerHTML = monthRows.map(row => `
      <article>
        <span>${row.label}</span>
        <strong>${formatCurrency(row.savings)}</strong>
        <p>Income ${formatCurrency(row.income)} • Expense ${formatCurrency(row.expenses)}</p>
      </article>
    `).join("");
  }
}

function renderDashboard() {
  const savedUser = getSavedUser();
  const displayName = getDisplayName();

  welcomeMessage.textContent = `Welcome back, ${displayName}`;
  profileName.textContent = displayName;
  profileEmail.textContent = savedUser ? savedUser.email : "user@example.com";

  const avatarEl = document.querySelector(".avatar");
  if (avatarEl) avatarEl.textContent = displayName.charAt(0).toUpperCase();

  refreshDerivedData();
  renderHomeSnapshots();
  renderHomePeriodCards();
  renderThreeMonthGrid();
  renderAnalytics("this");

  const currentView = getCurrentView();
  showDashboardSection(currentView);

  if (currentView === "overview") {
    drawMoneyFlowChart();
    drawCashFlowChart();
  }
}

function getCurrentView() {
  const view = window.location.hash.replace("#", "");
  const valid = ["overview", "wallets", "analytics", "transactions", "invoices"];
  return valid.includes(view) ? view : "overview";
}

function showDashboardSection(view) {
  if (isLoggedIn()) window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  dashboardSections.forEach(s => {
    const isActive = s.dataset.section === view;
    s.hidden = !isActive;
    s.classList.toggle("active-section", isActive);
    if (isActive) {
      s.classList.remove("sect-enter");
      void s.offsetWidth;
      s.classList.add("sect-enter");
    } else {
      s.classList.remove("sect-enter");
    }
  });
  navItems.forEach(item => item.classList.toggle("active", item.dataset.view === view));
}

function renderHomePeriodCards() {
  const incomeData = homePeriodData[selectedHomePeriods.income];
  const expenseData = homePeriodData[selectedHomePeriods.expense];
  const cashData = homePeriodData[selectedHomePeriods.cash];
  const firstValue = cashData.moneyFlow[0];
  const lastValue = cashData.moneyFlow[cashData.moneyFlow.length - 1];
  const netFlow = lastValue - firstValue;

  animateCurrency(totalBalance, cashData.balance);
  animateCurrency(monthlyIncome, incomeData.income);
  animateCurrency(monthlyExpenses, expenseData.expenses);
  document.querySelector(".earning-card .trend-up").textContent = incomeData.incomeTrend;
  document.querySelector(".spending-card .trend-down").textContent = expenseData.expenseTrend;
  netFlowBadge.textContent = `${netFlow >= 0 ? "+" : "-"}${formatCurrency(Math.abs(netFlow))} net`;
  if (homeExpenseKind) homeExpenseKind.textContent = `${expenseData.topExpense} is the highest expense ${expenseData.label.toLowerCase()}`;

  const legendItems = document.querySelectorAll(".spending-legend span");
  expenseData.legend.forEach((item, index) => {
    const target = legendItems[index];
    if (!target) return;
    const dot = target.querySelector("b");
    target.innerHTML = "";
    if (dot) target.appendChild(dot);
    target.append(item[0]);
    const amount = document.createElement("em");
    amount.textContent = item[1];
    target.appendChild(amount);
  });
}

/* ── Nav ── */
navItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const view = item.dataset.view;
    window.location.hash = view;
    showDashboardSection(view);
    if (view === "overview") { drawMoneyFlowChart(); drawCashFlowChart(); }
    if (view === "analytics") renderAnalytics(getActiveAnalyticsPeriod());
  });
});

window.addEventListener("hashchange", () => {
  if (!isLoggedIn()) return;
  const view = getCurrentView();
  showDashboardSection(view);
  if (view === "overview") { drawMoneyFlowChart(); drawCashFlowChart(); }
  if (view === "analytics") renderAnalytics(getActiveAnalyticsPeriod());
});

window.addEventListener("resize", () => {
  if (isLoggedIn() && getCurrentView() === "overview") {
    drawMoneyFlowChart();
    drawCashFlowChart();
  }
  if (isLoggedIn() && getCurrentView() === "analytics") {
    drawAnalyticsDonut(getActiveAnalyticsPeriod());
  }
});

function wireHomePeriodSelect(select, key) {
  select?.addEventListener("change", () => {
    selectedHomePeriods[key] = select.value;
    renderHomePeriodCards();
    if (getCurrentView() === "overview") {
      drawMoneyFlowChart();
      drawCashFlowChart();
    }
    showToast(`Showing ${homePeriodData[select.value].label.toLowerCase()} ${key === "cash" ? "cash flow" : key} data`);
  });
}

wireHomePeriodSelect(incomePeriodSelect, "income");
wireHomePeriodSelect(expensePeriodSelect, "expense");
wireHomePeriodSelect(cashFlowPeriodSelect, "cash");

function animateCurrency(element, targetValue) {
  const duration = 700;
  const startTime = performance.now();
  function tick(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = formatCurrency(Math.round(targetValue * eased));
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

function getTopCategory(period) {
  return [...monthlySnapshots[period].categories].sort((a, b) => b.amount - a.amount)[0];
}

function renderHomeSnapshots() {
  const thisTop = getTopCategory("this");
  const lastTop = getTopCategory("last");
  const threeMonthTotal = threeMonthSnapshots.reduce((sum, item) => sum + item.expenses, 0);

  if (homeExpenseKind) homeExpenseKind.textContent = `${thisTop.name} is the highest expense this month`;
  if (homeThisMonthSpend) homeThisMonthSpend.textContent = formatCurrency(monthlySnapshots.this.expenses);
  if (homeLastMonthSpend) homeLastMonthSpend.textContent = formatCurrency(monthlySnapshots.last.expenses);
  if (homeThreeMonthSpend) homeThreeMonthSpend.textContent = formatCurrency(threeMonthTotal);
  if (homeThisMonthKind) homeThisMonthKind.textContent = `Top: ${thisTop.name}`;
  if (homeLastMonthKind) homeLastMonthKind.textContent = `Top: ${lastTop.name}`;
}

function renderThreeMonthGrid() {
  const grid = document.getElementById("threeMonthGrid");
  if (!grid) return;

  grid.innerHTML = threeMonthSnapshots.map(item => {
    const max = Math.max(item.income, item.expenses, item.savings);
    const incomePct = Math.round((item.income / max) * 100);
    const expensePct = Math.round((item.expenses / max) * 100);
    const savingsPct = Math.round((item.savings / max) * 100);

    return `
      <article class="month-col">
        <div class="month-title">
          <strong>${item.month}</strong>
          <span>${formatCurrency(item.savings)} saved</span>
        </div>
        <div class="month-bars" aria-label="${item.month} income expenses savings">
          <span class="income-bar" style="--h:${incomePct}%"></span>
          <span class="expense-bar" style="--h:${expensePct}%"></span>
          <span class="saving-bar" style="--h:${savingsPct}%"></span>
        </div>
        <div class="month-values">
          <span>Income ${formatCurrency(item.income)}</span>
          <span>Expense ${formatCurrency(item.expenses)}</span>
          <span>Savings ${formatCurrency(item.savings)}</span>
        </div>
      </article>
    `;
  }).join("");
}

function getActiveAnalyticsPeriod() {
  return document.querySelector(".period-btn.active")?.dataset.period || "this";
}

function renderAnalytics(period = "this") {
  const snapshot = monthlySnapshots[period] || monthlySnapshots.this;
  const savings = snapshot.income - snapshot.expenses;
  const savingsPct = snapshot.income ? Math.round((savings / snapshot.income) * 100) : 0;

  const incomeEl = document.getElementById("analyticsIncome");
  const expensesEl = document.getElementById("analyticsExpenses");
  const savingsEl = document.getElementById("analyticsSavings");
  const incomeChangeEl = document.getElementById("analyticsIncomeChange");
  const expenseChangeEl = document.getElementById("analyticsExpChange");
  const savingsPctEl = document.getElementById("analyticsSavPct");
  const donutTitle = document.getElementById("donutTitle");
  const donutTotal = document.getElementById("donutTotal");
  const breakdownTitle = document.getElementById("breakdownTitle");
  const insightsTitle = document.getElementById("insightsTitle");

  if (incomeEl) incomeEl.textContent = formatCurrency(snapshot.income);
  if (expensesEl) expensesEl.textContent = formatCurrency(snapshot.expenses);
  if (savingsEl) savingsEl.textContent = formatCurrency(savings);
  if (incomeChangeEl) incomeChangeEl.textContent = snapshot.incomeChange;
  if (expenseChangeEl) expenseChangeEl.textContent = snapshot.expenseChange;
  if (savingsPctEl) savingsPctEl.textContent = `${savingsPct}% saved`;
  if (donutTitle) donutTitle.textContent = `Spending - ${snapshot.label}`;
  if (donutTotal) donutTotal.textContent = formatCurrency(snapshot.expenses);
  if (breakdownTitle) breakdownTitle.textContent = `${snapshot.label} Expense Types`;
  if (insightsTitle) insightsTitle.textContent = `${snapshot.label} Financial Insights`;

  renderAnalyticsLegend(snapshot);
  renderBreakdownList(snapshot);
  renderAnalyticsInsights(snapshot);
  drawAnalyticsDonut(period);
}

function renderAnalyticsLegend(snapshot) {
  const legend = document.getElementById("donutLegend");
  if (!legend) return;

  legend.innerHTML = snapshot.categories.map(item => {
    const pct = Math.round((item.amount / snapshot.expenses) * 100);
    return `
      <div class="legend-item">
        <span class="legend-dot" style="background:${item.color}"></span>
        <span class="legend-name">${item.name}</span>
        <span class="legend-pct">${pct}%</span>
        <span class="legend-amt">${formatCurrency(item.amount)}</span>
      </div>
    `;
  }).join("");
}

function renderBreakdownList(snapshot) {
  const list = document.getElementById("breakdownList");
  if (!list) return;

  list.innerHTML = snapshot.categories.map(item => {
    const pct = Math.round((item.amount / snapshot.expenses) * 100);
    return `
      <article class="bkd-item">
        <div class="bkd-head">
          <span class="bkd-dot" style="background:${item.color}"></span>
          <span class="bkd-name">${item.name}</span>
          <span class="bkd-amt">${formatCurrency(item.amount)}</span>
          <span class="bkd-pct">${pct}%</span>
        </div>
        <div class="bkd-track"><div class="bkd-fill" style="background:${item.color}; width:${pct}%"></div></div>
      </article>
    `;
  }).join("");
}

function renderAnalyticsInsights(snapshot) {
  const list = document.getElementById("analyticsList");
  if (!list) return;

  list.innerHTML = snapshot.insights.map(([title, body], index) => `
    <article>
      <b style="background:${snapshot.categories[index % snapshot.categories.length].color}"></b>
      <div><strong>${title}</strong><p>${body}</p></div>
    </article>
  `).join("");
}

function drawAnalyticsDonut(period = "this") {
  const canvas = document.getElementById("analyticsDonutChart");
  if (!canvas) return;
  const snapshot = monthlySnapshots[period] || monthlySnapshots.this;
  const context = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const size = Math.min(rect.width || 190, rect.height || 190);
  const center = size / 2;
  const radius = center - 12;

  canvas.width = size * ratio;
  canvas.height = size * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, size, size);
  context.lineWidth = 22;
  context.lineCap = "round";

  let start = -Math.PI / 2;
  snapshot.categories.forEach(item => {
    const slice = (item.amount / snapshot.expenses) * Math.PI * 2;
    context.beginPath();
    context.strokeStyle = item.color;
    context.arc(center, center, radius, start, start + slice - 0.035);
    context.stroke();
    start += slice;
  });
}
function drawMoneyFlowChart() {
  const canvas = moneyFlowChart;
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const padding = { top: 26, right: 18, bottom: 34, left: 58 };
  const data = homePeriodData[selectedHomePeriods.income].moneyFlow;
  const min = Math.min(...data) - 700;
  const max = Math.max(...data) + 700;
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);
  context.strokeStyle = "rgba(82,112,127,0.18)";
  context.lineWidth = 1;
  context.fillStyle = "#66737d";
  context.font = "12px DM Sans, Arial, sans-serif";

  for (let i = 0; i <= 4; i++) {
    const y = padding.top + (chartHeight / 4) * i;
    const value = max - ((max - min) / 4) * i;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.fillText(formatCurrency(value), 8, y + 4);
  }

  const points = data.map((value, i) => ({
    x: padding.left + (chartWidth / (data.length - 1)) * i,
    y: padding.top + chartHeight - ((value - min) / (max - min)) * chartHeight
  }));

  const gradient = context.createLinearGradient(0, padding.top, 0, height - padding.bottom);
  gradient.addColorStop(0, "rgba(124,92,252,0.22)");
  gradient.addColorStop(1, "rgba(124,92,252,0)");

  context.beginPath();
  points.forEach((p, i) => i === 0 ? context.moveTo(p.x, p.y) : context.lineTo(p.x, p.y));
  context.lineTo(points[points.length - 1].x, height - padding.bottom);
  context.lineTo(points[0].x, height - padding.bottom);
  context.closePath();
  context.fillStyle = gradient;
  context.fill();

  context.beginPath();
  points.forEach((p, i) => i === 0 ? context.moveTo(p.x, p.y) : context.lineTo(p.x, p.y));
  context.strokeStyle = "#7c5cfc";
  context.lineWidth = 3;
  context.lineJoin = "round";
  context.lineCap = "round";
  context.stroke();

  const last = points[points.length - 1];
  context.beginPath();
  context.arc(last.x, last.y, 5, 0, Math.PI * 2);
  context.fillStyle = "#1f7a5b";
  context.fill();
  context.strokeStyle = "#fff";
  context.lineWidth = 3;
  context.stroke();

  context.fillStyle = "#66737d";
  context.fillText("Day 1", padding.left, height - 10);
  context.fillText("Day 30", width - padding.right - 44, height - 10);
}

function drawCashFlowChart() {
  const canvas = cashFlowChart;
  if (!canvas) return;
  const context = canvas.getContext("2d");
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const padding = { top: 18, right: 18, bottom: 30, left: 46 };
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const cashData = homePeriodData[selectedHomePeriods.cash];
  const values = cashData.cashFlow;
  const max = Math.max(30000, ...values);
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  const barGap = 10;
  const barWidth = (chartWidth - barGap * (values.length - 1)) / values.length;

  canvas.width = width * ratio;
  canvas.height = height * ratio;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, width, height);

  context.strokeStyle = "rgba(114,126,140,0.16)";
  context.fillStyle = "#7a838e";
  context.font = "11px DM Sans, Arial, sans-serif";

  for (let i = 0; i <= 3; i++) {
    const y = padding.top + (chartHeight / 3) * i;
    const label = `${Math.round((max - (max / 3) * i) / 1000)}k`;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.fillText(label, 10, y + 4);
  }

  values.forEach((value, i) => {
    const x = padding.left + (barWidth + barGap) * i;
    const barHeight = (value / max) * chartHeight;
    const y = padding.top + chartHeight - barHeight;
    const isCurrent = months[i] === cashData.activeMonth;

    context.fillStyle = isCurrent ? "#7c5cfc" : "#edf0f3";
    roundRect(context, x, y, barWidth, barHeight, 8);
    context.fill();
    context.fillStyle = "#6d7580";
    context.fillText(months[i], x + 2, height - 10);
  });
}

function roundRect(ctx, x, y, w, h, r) {
  const sr = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + sr, y);
  ctx.lineTo(x + w - sr, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + sr);
  ctx.lineTo(x + w, y + h);
  ctx.lineTo(x, y + h);
  ctx.lineTo(x, y + sr);
  ctx.quadraticCurveTo(x, y, x + sr, y);
  ctx.closePath();
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
  const firstInput = modal.querySelector("input, select");
  if (firstInput) setTimeout(() => firstInput.focus(), 60);
}

function closeModal(modal) {
  if (!modal) return;
  modal.hidden = true;
  document.body.style.overflow = "";
}

function closeAllModals() {
  document.querySelectorAll(".modal-overlay").forEach(m => closeModal(m));
}

document.querySelectorAll(".modal-overlay").forEach(modal => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal(modal);
  });
});


document.querySelectorAll(".modal-close").forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = btn.closest(".modal-overlay");
    closeModal(modal);
  });
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
document.getElementById("viewAllBills")?.addEventListener("click", () => {
  openModal("modalViewAllBills");
});
document.getElementById("addWalletBtn")?.addEventListener("click", () => {
  openModal("modalAddWallet");
});
document.querySelectorAll(".period-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".period-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const period = btn.dataset.period;
    renderAnalytics(period);
    showToast(`Showing ${period === "this" ? "this month's" : "last month's"} data`);
  });
});
categoryFilterBar?.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  activeTransactionCategory = button.dataset.category || "All";
  categoryFilterBar.querySelectorAll("button").forEach(item => {
    item.classList.toggle("active", item === button);
  });
  const transactions = loadTransactions();
  renderTransactionTables(transactions, summarizeTransactions(transactions, "2026-05"));
  showToast(`Showing ${activeTransactionCategory} transactions`);
});
document.getElementById("addTransactionBtn")?.addEventListener("click", () => {
  const dateInput = document.querySelector("#addTransactionForm [name='txDate']");
  if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];
  openModal("modalAddTransaction");
});
document.getElementById("addWalletForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const name = data.get("walletName");
  const balance = Number(data.get("walletBalance"));
  const desc = data.get("walletDesc") || "Custom wallet";

  const grid = document.getElementById("walletGrid");
  if (grid) {
    const card = document.createElement("article");
    card.className = "wallet-card";
    card.innerHTML = `
      <p>${name}</p>
      <strong>${formatCurrency(balance)}</strong>
      <span>${desc}</span>
    `;
    grid.appendChild(card);
    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    requestAnimationFrame(() => {
      card.style.transition = "opacity 300ms, transform 300ms";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  }

  e.target.reset();
  closeModal(document.getElementById("modalAddWallet"));
  showToast(`✓ "${name}" wallet added`);
});
document.getElementById("addTransactionForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const activity = data.get("txActivity");
  const category = data.get("txCategory");
  const amount = Number(data.get("txAmount"));
  const type = data.get("txType");
  const date = data.get("txDate");
  const transaction = {
    id: `tx-${Date.now()}`,
    activity,
    category,
    amount,
    type,
    date,
    status: type === "credit" ? "Credited" : "Tracked"
  };

  const transactions = loadTransactions();
  transactions.unshift(transaction);
  saveTransactions(transactions);
  rerenderFinanceViews();

  e.target.reset();
  closeModal(document.getElementById("modalAddTransaction"));
  showToast(`✓ Transaction "${activity}" added`);
});

transactionBody?.addEventListener("click", (event) => {
  const button = event.target.closest(".delete-tx-btn");
  if (!button) return;
  const row = button.closest("tr");
  const removeId = button.dataset.id;

  const finishDelete = () => {
    const transactions = loadTransactions().filter(item => item.id !== removeId);
    saveTransactions(transactions);
    rerenderFinanceViews();
    showToast("✓ Transaction deleted");
  };

  if (row) {
    button.disabled = true;
    row.classList.add("tx-removing");
    let done = false;
    const run = () => {
      if (done) return;
      done = true;
      finishDelete();
    };
    row.addEventListener("transitionend", run, { once: true });
    setTimeout(run, 320);
    return;
  }

  finishDelete();
});
document.getElementById("createInvoiceForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const title = data.get("invTitle");
  const amount = Number(data.get("invAmount"));
  const date = data.get("invDate");
  const status = data.get("invStatus");

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })
    : "—";

  const statusLabel = { due: "Due", scheduled: "Scheduled", paid: "Paid" }[status] || "Due";

  const grid = document.getElementById("invoiceGrid");
  if (grid) {
    const card = document.createElement("article");
    card.className = "panel invoice-card";
    card.innerHTML = `
      <span class="invoice-status ${status}">${statusLabel}</span>
      <h3>${title}</h3>
      <p>${statusLabel === "Paid" ? "Paid on" : "Due"} ${formattedDate}</p>
      <strong>${formatCurrency(amount)}</strong>
    `;
    grid.insertBefore(card, grid.firstChild);

    card.style.opacity = "0";
    card.style.transform = "translateY(12px)";
    requestAnimationFrame(() => {
      card.style.transition = "opacity 300ms, transform 300ms";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    });
  }

  e.target.reset();
  closeModal(document.getElementById("modalCreateInvoice"));
  showToast(`✓ Invoice "${title}" created`);
});

function enterDemoDashboard(email = "demo@portfolio.dev", password = "demo123") {
  saveUser(email, password);
  createSession(email);
  loginForm.reset();
  loginError.textContent = "";
  window.location.hash = "overview";
  renderAuthState();
}

demoLoginButton?.addEventListener("click", () => {
  enterDemoDashboard();
});

renderLoginMode = function () {
  const setup = authMode === "signup";
  loginTitle.textContent = setup ? "Create your login" : "Log in to continue";
  loginSubtitle.textContent = setup
    ? "Set up your account to keep your finance dashboard private."
    : "Enter your saved login or continue with the demo dashboard.";
  confirmPasswordGroup.hidden = !setup;
  if (confirmPasswordInput) confirmPasswordInput.required = setup;
  submitButton.textContent = setup ? "Create Account" : "Log In";
  if (forgotPasswordLink) forgotPasswordLink.hidden = setup;
  if (authSwitchText) {
    authSwitchText.innerHTML = setup
      ? 'Already have an account? <a href="#" id="authSwitchLink">Log in</a>'
      : 'Need to create an account? <a href="#" id="authSwitchLink">Create one</a>';
    document.querySelector("#authSwitchLink")?.addEventListener("click", handleAuthSwitch);
  }
};

handleAuthSwitch = function (e) {
  e.preventDefault();
  authMode = authMode === "signup" ? "login" : "signup";
  loginForm.reset();
  loginError.textContent = "";
  renderLoginMode();
};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  const formData = new FormData(loginForm);
  const email = String(formData.get("email") || "demo@portfolio.dev").trim().toLowerCase();
  const password = String(formData.get("password") || "demo123");
  const confirmPassword = String(formData.get("confirmPassword") || "");

  if (password.length < 6) {
    loginError.textContent = "Password must be at least 6 characters.";
    return;
  }

  if (authMode === "signup") {
    if (confirmPassword && password !== confirmPassword) {
      loginError.textContent = "Passwords do not match.";
      return;
    }
    authMode = "login";
    enterDemoDashboard(email, password);
    return;
  }

  const savedUser = getSavedUser();
  if (!savedUser || savedUser.email === email && savedUser.password === password) {
    enterDemoDashboard(email, password);
    return;
  }

  loginError.textContent = "Use the saved login or click Continue as Demo.";
}, true);

renderAuthState(); 
