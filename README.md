# Manutenzione Smart

Sito statico in italiano, costruito con Astro e preparato per GitHub Pages. Il costo obbligatorio dell’infrastruttura è **€0/mese**. Nessun backend, database, CMS, form esterno o analytics. Il dominio è l’unica spesa futura prevista, da acquistare separatamente quando lo deciderà il titolare.

## Dove si trova il progetto

Usa la cartella locale del progetto o una nuova copia clonata dal repository. I percorsi del computer non devono essere pubblicati.

Repository ufficiale: [davideguerraofficial/manutenzione-smart](https://github.com/davideguerraofficial/manutenzione-smart), pubblico, ramo `main`. L’esito delle pubblicazioni è visibile nella scheda Actions e in Settings → Pages.

## Avvio e verifica

Servono Node.js 24 e npm, entrambi gratuiti.

```sh
npm ci
npm run dev
```

Apri l’indirizzo mostrato nel terminale, normalmente `http://127.0.0.1:4321/manutenzione-smart/`. Per verificare la versione pubblicabile:

```sh
npm run build
npm run verify
npm run preview
```

Non avviare contemporaneamente build e server di sviluppo nello stesso checkout. La cartella `dist/` è l’output statico rigenerabile, non viene versionata.

## Contenuti da modificare

| Cosa | File |
|---|---|
| Prezzi normali, promo, scadenza | `src/data/pricing.ts` |
| Email aziendale, social, navigazione e WhatsApp | `src/data/site.ts` |
| Servizi, passaggi, roadmap | `src/data/services.ts` |
| Benefici abbonamento, confronto e scenari illustrativi | `src/data/subscription.ts` |
| Domande frequenti | `src/data/faq.ts` |
| Nomi dei PDF e descrizioni | `src/data/documents.ts` |
| PDF pubblici con metadati ridotti | `public/documenti/` |
| Logo e anteprime dei fascicoli | `src/assets/` |
| Immagini originali | `public/immagini/` |
| Grafica e responsive | `src/styles/global.css`, `src/styles/pages.css` |
| Pagine | `src/pages/` |
| Parti riutilizzabili | `src/components/` |
| Dominio e sottocartella | `config/site.json` |
| Pubblicazione automatica | `.github/workflows/deploy.yml` |

I prezzi seguono il documento commerciale `MANUTENZIONE_SMART_OFFERTA_2026.pdf`: pacchetti **49,50 / 124,50 / 209,50 €**; abbonamenti **29,90 / 49,90 € al mese**. Alcuni prezzi nei fascicoli del 04/10/2026 sono precedenti: i PDF sono preservati e il sito lo segnala.

## Pagine del sito

La home presenta il servizio e invita a esplorarlo. La navigazione apre pagine distinte: `servizi/`, `abbonamenti/`, `piani/`, `esempi/` e `faq/`. Il footer collega anche `come-funziona/`, `contatti/` e `privacy/`.

La pagina degli abbonamenti approfondisce inclusioni, esempi d’uso e confronto con i pacchetti. Gli scenari sono dichiarati illustrativi. Non vengono pubblicati recensioni, conteggi o medie senza una fonte reale autorizzata; non sono presenti dati strutturati di valutazioni inventate.

Nella pagina prezzi il confronto apre gli abbonamenti per impostazione iniziale. Il collegamento `piani/#pacchetti` apre direttamente i pacchetti. I prezzi della home e di tutte le pagine provengono dallo stesso file dati.

## Fine della promozione

Dal 01/01/2027 imposta `promotion.enabled` a `false` in `src/data/pricing.ts`, controlla il sito e pubblica. Verranno utilizzati i valori `normal` e rimossi badge e prezzi barrati. Anche la FAQ relativa alla promozione si aggiorna dal medesimo dato. Per cambiare la data imposta `promotion.endsOn` nel formato `AAAA-MM-GG`; nessun processo automatico modifica i prezzi.

Aggiorna separatamente il PDF del listino quando cambia l’offerta: è un documento originale e non viene riscritto dal sito.

## Documentazione

- [Pubblicazione su GitHub Pages](docs/PUBBLICAZIONE.md)
- [Dominio, DNS e HTTPS](docs/DOMINIO.md)
- [Aggiornamenti e manutenzione](docs/GESTIONE.md)
- [Costi, licenze e limiti](docs/COSTI.md)
- [Stato della consegna](docs/CONSEGNA.md)

## Protezione dei dati prima della pubblicazione

Vedi [controlli privacy](docs/PRIVACY_REPOSITORY.md). Usa solo l’identità Git del progetto. Non pubblicare dati personali, percorsi del PC o documenti reali dei clienti. I controlli automatici aiutano, ma non sostituiscono la revisione dei materiali. Le copie pubbliche dei PDF conservano testo e collegamenti, con allegati incorporati rimossi e metadati ridotti al titolo e al marchio.

## Privacy e sviluppi futuri

Font e immagini sono locali; il codice non imposta cookie, non usa localStorage né carica tracker. I pulsanti email aprono il client dell’utente: l’invio resta una sua scelta. La pagina privacy descrive il funzionamento tecnico; le informazioni aziendali pubblicabili e l’informativa per l’erogazione del servizio devono essere definite separatamente, rispettando il divieto di pubblicare dati personali. `privacyReviewed` è un promemoria redazionale, non una verifica legale automatica.

WhatsApp è disattivato e non ha numeri fittizi. Area cliente, login, database, notifiche e automazioni non sono implementati. Un’eventuale loro aggiunta richiederà un progetto dedicato e una verifica preventiva delle soluzioni gratuite; GitHub Pages non esegue backend.

## Condizioni GitHub Pages

GitHub Free permette Pages nei repository pubblici. GitHub limita l’uso di Pages per attività commerciali, transazioni e SaaS: la compatibilità tecnica di questa vetrina non garantisce l’accettazione del suo uso commerciale. Verificare l’idoneità con GitHub prima di affidargli il sito dell’attività. Nessun altro provider viene attivato automaticamente. Vedi [limiti ufficiali](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits).
