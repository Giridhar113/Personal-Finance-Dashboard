const fs = require("fs");
const path = require("path");

const root = __dirname;
const dist = path.join(root, "dist");
const files = ["app.js"];

if (!fs.existsSync(dist)) {
  fs.mkdirSync(dist, { recursive: true });
}

for (const file of files) {
  fs.copyFileSync(path.join(root, file), path.join(dist, file));
}
