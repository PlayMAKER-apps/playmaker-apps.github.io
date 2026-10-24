import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';

const root = resolve('dist');
const pages = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const location = join(directory, entry.name);
    if (entry.isDirectory()) await collect(location);
    else if (entry.name.endsWith('.html')) pages.push(location);
  }
}
await collect(root);
const missing = [];
let checked = 0;
for (const page of pages) {
  const html = await readFile(page, 'utf8');
  for (const [, , href] of html.matchAll(/\b(href|src)="([^"]+)"/g)) {
    if (!href.startsWith('/')) continue;
    const pathname = new URL(href, 'https://playmaker-apps.github.io').pathname;
    const target = resolve(root, `.${pathname}`, pathname.endsWith('/') ? 'index.html' : '');
    if (!target.startsWith(root + sep)) { missing.push(`${page}: ${href} escapes dist`); continue; }
    checked += 1;
    try { if (!(await stat(target)).isFile()) missing.push(`${page}: ${href}`); }
    catch { missing.push(`${page}: ${href}`); }
  }
}
if (missing.length) {
  console.error(`Broken local references:\n${missing.join('\n')}`);
  process.exitCode = 1;
} else {
  console.log(`Checked ${checked} local references across ${pages.length} pages.`);
}
