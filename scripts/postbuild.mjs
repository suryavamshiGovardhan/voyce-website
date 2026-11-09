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

// Known dynamic routes with a finite, checked-in list of ids, so deep links to them
// also return HTTP 200 instead of GitHub Pages' 404 status. Anything not listed here
// still works through 404.html, just with a 404 status code.
const read = (f) => (fs.existsSync(f) ? fs.readFileSync(f, "utf8") : "");
for (const m of read("src/data/unheardMindEpisodes.ts").matchAll(/^\s{2}id:\s*"([a-z0-9-]+)"/gm)) {
  routes.add(`series/${m[1]}`);
}
for (const m of read("src/data/icd9Categories.ts").matchAll(/range:\s*"([0-9A-Z-]+)"/g)) {
  routes.add(`icd9/${m[1]}`);
}
for (const m of read("src/pages/DSM5ModulePage.tsx").matchAll(/^\s+"(\d+\.\d+)":\s*\{/gm)) {
  routes.add(`dsm5-academy/module/${m[1]}`);
}
const known = JSON.parse(read("scripts/known-routes.json") || "{}");
for (const slug of known.blog ?? []) routes.add(`blog/${slug}`);

for (const route of routes) {
  const dir = path.join(dist, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.copyFileSync(indexHtml, path.join(dir, "index.html"));
}
console.log(`postbuild: wrote index.html into ${routes.size} route folders + 404.html`);
