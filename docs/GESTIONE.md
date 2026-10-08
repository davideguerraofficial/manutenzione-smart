# Aggiornare il sito

## Prezzi e promozione

Apri `src/data/pricing.ts`. Ogni piano ha `normal` e `promo`, espressi come numeri: `124.5` diventa `124,50 €`. `priceFor()` decide il prezzo mostrato in base a `promotion.enabled`. La scadenza è in `promotion.endsOn`; la FAQ legge quella stessa data.

Dal 01/01/2027 imposta `enabled: false`, aggiorna il listino PDF e pubblica. Nessun cambio avviene da solo, neppure alla mezzanotte della scadenza. I prezzi normali sono 99 / 249 / 419 € e 39,90 / 69,90 € al mese.

## Email, Instagram, Facebook e WhatsApp

L’indirizzo è in `src/data/site.ts`. I messaggi precompilati vengono creati da `src/lib/links.ts`; nessun invio automatico. Il visitatore deve avere un client email configurato; l’indirizzo rimane visibile e copiabile sul sito.

Quando WhatsApp Business sarà attivo, in `site.whatsapp` imposta `enabled: true` e `number` con prefisso internazionale e sole cifre, senza `+`, spazi o trattini. Questo attiva i link nei contatti e nel footer. Un pulsante mobile o flottante può essere aggiunto usando lo stesso dato; ora non viene mostrato.

## PDF

Sostituisci il file in `public/documenti/`, mantenendo il nome per non interrompere i collegamenti. Se cambi il nome, aggiorna `src/data/documents.ts` e il collegamento al fascicolo nel blocco iniziale. Se cambia il numero di pagine aggiorna i metadati.

Il controllo di integrità confronta i PDF con `docs/documenti-manifest.json`. Dopo una sostituzione intenzionale ricalcola il relativo SHA-256:

```powershell
Get-FileHash -Algorithm SHA256 -LiteralPath 'public\documenti\NOME_FILE.pdf'
```

Aggiorna il valore `sha256` del documento nel manifest. Per evitare anteprime non corrispondenti, rigenera anche la copertina in `src/assets/` dalla prima pagina del PDF nuovo. `fascicolo-completo.png` è la pagina 2 dell’esempio Completo, usata nella presentazione iniziale.

I quattro PDF presenti nella cartella principale del PC restano originali locali, esclusi da Git. Le copie ufficiali versionate e pubblicate si trovano in `public/documenti/`.

## Immagini e logo

Il logo proviene dall’immagine incorporata nel listino fornito. Le anteprime provengono dai PDF; non sono foto di clienti né schermate di una piattaforma esistente. Astro genera versioni WebP ottimizzate. Puoi sostituire le immagini in `src/assets/` mantenendo i nomi; verifica sempre la resa su telefono e desktop.

Manrope è un font open source incluso nel pacchetto npm e servito localmente. Non ci sono chiamate a Google Fonts durante la navigazione.

## Nuove pagine

Le pagine attuali sono home, servizi, abbonamenti, come funziona, piani, esempi, FAQ, contatti e privacy. `PageHero` gestisce le intestazioni e `ContactCTA` il contatto condiviso. `src/data/subscription.ts` centralizza benefici, confronto e scenari illustrativi; la grafica delle nuove pagine è in `src/styles/pages.css`.

La pagina prezzi apre inizialmente gli abbonamenti; `piani/#pacchetti` seleziona il fascicolo una tantum. Senza JavaScript entrambi i gruppi restano visibili. Per cambiare il prezzo o la promo basta modificare `pricing.ts`: anche home e pagina abbonamenti leggono gli stessi dati.

Non aggiungere recensioni o medie inventate. Per pubblicare testimonianze servono una fonte reale, autorizzazione al riuso e rimozione dei dati personali. Un’eventuale media deve riferirsi all’insieme verificato delle recensioni, non soltanto alle testimonianze selezionate.

Crea un `.astro` in `src/pages/` e riutilizza `BaseLayout`. Aggiungi alla sitemap la nuova pagina in `src/pages/sitemap.xml.ts` e alla navigazione il link se utile. Usa `path()` per i collegamenti: gestisce sia la sottocartella GitHub sia il dominio futuro. Non inserire percorsi assoluti come `/documenti/…` senza questa funzione.

Le pagine sono HTML statico; JavaScript aggiunge soltanto menu, animazioni e confronto a schede. Senza JavaScript restano visibili entrambi i gruppi di piani e la navigazione; le FAQ usano elementi HTML nativi.

## Estensioni future

Non sono stati creati login, database, notifiche o area cliente. I dati di clienti reali non devono essere pubblicati su Pages o nel repository pubblico. Le future funzionalità riservate vanno progettate separatamente, valutando prima strumenti gratuiti, privacy, limiti e costi; non esiste un’infrastruttura prenotata o da pagare.

Instagram è in `site.social.instagram`; Facebook si attiva con `enabled: true` e l’URL ufficiale in `site.social.facebook`. Non caricare feed incorporati. L’esperienza e il motivo della promo sono in `experience` in `src/data/services.ts`: rivedi il riferimento temporale “quasi un anno” nei successivi aggiornamenti.

Prima di ogni pubblicazione leggi `docs/PRIVACY_REPOSITORY.md` e verifica anche il contenuto e i metadati dei nuovi PDF.
