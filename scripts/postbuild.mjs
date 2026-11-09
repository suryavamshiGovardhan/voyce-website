// GitHub Pages SPA support: write a real index.html into every static route folder
// (so deep links return HTTP 200), plus a 404.html fallback for dynamic routes.
import fs from "node:fs";
import path from "node:path";

const dist = path.resolve("dist");
const indexHtml = path.join(dist, "index.html");
if (!fs.existsSync(indexHtml)) {
  console.error("postbuild: dist/index.html missing");
  process.exit(1);
}

fs.copyFileSync(indexHtml, path.join(dist, "404.html"));
fs.writeFileSync(path.join(dist, ".nojekyll"), "");

const app = fs.readFileSync("src/App.tsx", "utf8");
const routes = new Set();
for (const m of app.matchAll(/<Route\s+path="([^"]+)"/g)) {
  const p = m[1];
  if (p === "/" || p === "*" || p.includes(":") || p.includes("*")) continue;
  routes.add(p.replace(/^\/+/, ""));
}

for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(dir, "index.html"));
}
console.log(`postbuild: wrote index.html into ${routes.size} route folders + 404.html`);
