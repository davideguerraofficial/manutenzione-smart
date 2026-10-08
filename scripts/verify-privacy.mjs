import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';

// Lista esplicita dei soli indirizzi approvati per i contenuti pubblici.
const allowedEmails = new Set(['manutenzionesmart@gmail.com', 'noreply@manutenzione-smart.invalid']);
const files = [...new Set(execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard'], { encoding: 'utf8' }).trim().split('\n').filter(Boolean))];
const failures = [];
for (const file of files) {
  if (!existsSync(file) || /\.(pdf|png|jpg|webp|woff2)$/i.test(file)) continue;
  let content = readFileSync(file, 'utf8');
  if (process.argv.includes('--staged')) {
    try { content += '\n' + execFileSync('git', ['show', `:${file}`], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }); } catch { /* File nuovo non ancora nell’indice. */ }
  }
  const emails = content.match(/[\w.+-]+@[\w.-]+\.[a-z]{2,}/gi) || [];
  if (emails.some(email => !allowedEmails.has(email.toLowerCase()))) failures.push(`${file}: indirizzo email non autorizzato.`);
  if (/\b[a-z]:[\\/](?:users|documents and settings)[\\/]/i.test(content)) failures.push(`${file}: percorso personale del computer.`);
  if (/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----|\b(?:ghp_|github_pat_)[A-Za-z0-9_]{20,}/.test(content)) failures.push(`${file}: possibile credenziale.`);
}
if (process.argv.includes('--history')) {
  const authors = execFileSync('git', ['log', 'HEAD', '--format=%an|%ae|%cn|%ce'], { encoding: 'utf8' }).trim().split('\n');
  if (authors.some(line => line !== 'Manutenzione Smart|noreply@manutenzione-smart.invalid|Manutenzione Smart|noreply@manutenzione-smart.invalid')) failures.push('Cronologia: autore o committente non approvato. Usa l’identità del progetto.');
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Controllo privacy completato su ${files.length} file${process.argv.includes('--history') ? ' e sugli autori della cronologia' : ''}. PDF e dati nel testo richiedono anche revisione umana.`);
