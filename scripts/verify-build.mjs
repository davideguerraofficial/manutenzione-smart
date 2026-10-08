import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { createHash } from 'node:crypto';
import configuration from '../config/site.json' with { type: 'json' };

const root = resolve('dist');
const base = (process.env.SITE_BASE ?? configuration.base).replace(/\/$/, '');
const origin = process.env.SITE_ORIGIN || configuration.origin;
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const files = directory => readdirSync(directory).flatMap(name => {
  const full = join(directory, name);
  return statSync(full).isDirectory() ? files(full) : [full];
});
assert(existsSync(root), 'Manca dist/: esegui prima npm run build.');
if (!existsSync(root)) throw new Error(failures.join('\n'));
const htmlFiles = files(root).filter(name => name.endsWith('.html'));
for (const file of htmlFiles) {
  const html = readFileSync(file, 'utf8');
  assert(html.includes('lang="it"'), `${file}: manca la lingua italiana.`);
  assert((html.match(/<h1[\s>]/g) || []).length === 1, `${file}: deve esserci un solo h1.`);
  assert(html.includes('name="description"'), `${file}: manca meta description.`);
  assert(html.includes('property="og:title"'), `${file}: mancano metadati Open Graph.`);
  assert(!/<(?:script|iframe)\b[^>]+src="https?:/i.test(html), `${file}: contenuto attivo esterno.`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
    const link = match[1];
    if (!link.startsWith('/')) continue;
    assert(base === '' || link === base || link.startsWith(`${base}/`), `${file}: collegamento fuori dalla sottocartella: ${link}`);
    const relative = link.slice(base.length).split('?')[0].replace(/^\//, '');
    const destination = resolve(root, decodeURIComponent(relative));
    assert(existsSync(destination), `${file}: destinazione assente: ${link}`);
  }
  for (const match of html.matchAll(/href="#([^"]+)"/g)) assert(html.includes(`id="${match[1]}"`), `${file}: ancora assente: ${match[1]}`);
  for (const match of html.matchAll(/href="(\/[^"#]+)#([^"]+)"/g)) {
    const destination = resolve(root, decodeURIComponent(match[1].slice(base.length).replace(/^\//, '')));
    const target = existsSync(destination) && statSync(destination).isDirectory() ? join(destination, 'index.html') : destination;
    if (existsSync(target) && target.endsWith('.html')) assert(readFileSync(target, 'utf8').includes(`id="${match[2]}"`), `${file}: ancora assente nella pagina di destinazione: ${match[1]}#${match[2]}`);
  }
}
for (const filename of ['sitemap.xml', 'robots.txt', '404.html', '.nojekyll']) assert(existsSync(join(root, filename)), `Manca ${filename}.`);
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
assert(!sitemap.includes('localhost'), 'Sitemap con indirizzo locale.');
assert(sitemap.includes(`${origin}${base}/`), 'Sitemap con URL non coerenti alla configurazione.');
for (const doc of JSON.parse(readFileSync('docs/documenti-manifest.json', 'utf8'))) {
  const target = join(root, 'documenti', doc.name);
  assert(existsSync(target), `PDF assente: ${doc.name}`);
  if (existsSync(target)) assert(createHash('sha256').update(readFileSync(target)).digest('hex') === doc.sha256, `PDF modificato: ${doc.name}. Aggiorna il manifest solo dopo una sostituzione intenzionale.`);
}
const total = files(root).reduce((bytes, name) => bytes + statSync(name).size, 0);
assert(total < 1024 ** 3, 'Il sito supera il limite di 1 GB di GitHub Pages.');
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verifica completata: ${htmlFiles.length} pagine, 4 PDF pubblici, collegamenti interni e SEO. Output ${(total / 1024 / 1024).toFixed(2)} MB.`);
