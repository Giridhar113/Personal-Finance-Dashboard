const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataFile = path.join(root, "transactions-db.json");
const port = Number(process.env.PORT || 8080);
const host = "127.0.0.1";
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8"
};

const seedTransactions = [
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

function sendJson(res, status, payload) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(payload));
}

function readTransactions() {
  if (!fs.existsSync(dataFile)) {
    fs.writeFileSync(dataFile, JSON.stringify(seedTransactions, null, 2));
    return [...seedTransactions];
  }

  try {
    const parsed = JSON.parse(fs.readFileSync(dataFile, "utf8"));
    if (!Array.isArray(parsed)) return [...seedTransactions];
    const normalized = parsed.map(item => {
      if (String(item.activity || "").toLowerCase().includes("shopping")) {
        return { ...item, category: "Shopping" };
      }
      return item;
    });
    if (JSON.stringify(parsed) !== JSON.stringify(normalized)) {
      writeTransactions(normalized);
    }
    return normalized;
  } catch {
    return [...seedTransactions];
  }
}

function writeTransactions(transactions) {
  fs.writeFileSync(dataFile, JSON.stringify(transactions, null, 2));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 1_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

async function handleApi(req, res, urlPath) {
  if (urlPath === "/transactions" && req.method === "GET") {
    sendJson(res, 200, readTransactions());
    return true;
  }

  if (urlPath === "/transactions" && req.method === "POST") {
    try {
      const body = JSON.parse(await readBody(req) || "{}");
      const activity = String(body.activity || "").trim();
      const category = String(body.category || "").trim();
      const amount = Number(body.amount);
      const type = body.type === "credit" ? "credit" : "debit";
      const date = String(body.date || "").trim();

      if (!activity || !category || !date || !Number.isFinite(amount) || amount <= 0) {
        sendJson(res, 400, { error: "Invalid transaction payload" });
        return true;
      }

      const transaction = {
        id: body.id || `tx-${Date.now()}`,
        activity,
        category,
        amount,
        type,
        date,
        status: body.status || (type === "credit" ? "Credited" : "Tracked")
      };
      const transactions = readTransactions();
      transactions.unshift(transaction);
      writeTransactions(transactions);
      sendJson(res, 201, transaction);
    } catch {
      sendJson(res, 400, { error: "Invalid JSON" });
    }
    return true;
  }

  const deleteMatch = urlPath.match(/^\/transactions\/([^/]+)$/);
  if (deleteMatch && req.method === "DELETE") {
    const id = decodeURIComponent(deleteMatch[1]);
    const transactions = readTransactions();
    const nextTransactions = transactions.filter(item => item.id !== id);
    writeTransactions(nextTransactions);
    sendJson(res, 200, { deleted: transactions.length !== nextTransactions.length, id });
    return true;
  }

  if (urlPath.startsWith("/transactions")) {
    sendJson(res, 404, { error: "API route not found" });
    return true;
  }

  return false;
}

const server = http.createServer(async (req, res) => {
  let urlPath = (req.url || "/").split("?")[0];
  if (await handleApi(req, res, urlPath)) return;
  if (urlPath === "/") urlPath = "/index.html";

  const filePath = path.normalize(path.join(root, decodeURIComponent(urlPath)));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream"
    });
    res.end(data);
  });
});

server.listen(port, host, () => {
  console.log(`Finance Dashboard running at http://localhost:${port}`);
  console.log(`Transaction API ready at http://localhost:${port}/transactions`);
});
