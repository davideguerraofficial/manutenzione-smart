# Verifiche del sito

Eseguite il 7 ottobre 2026 sulla versione statica locale.

- Build Astro completata: 3 pagine HTML (home, privacy, 404), sitemap e robots.
- `npm run verify` superato: collegamenti interni corretti nella sottocartella Pages, un h1 per pagina, lingua italiana, descrizioni e Open Graph presenti, nessuno script o iframe esterno.
- La prima versione serviva i quattro PDF originali con risposta HTTP 200. Nell’aggiornamento dell’8 ottobre le copie pubbliche hanno metadati ridotti e allegati incorporati rimossi: il nuovo SHA-256 è registrato nel manifest. Tutte le 61 pagine sono state confrontate con gli originali mediante rendering: identiche; testo e collegamenti conservati.
- Interazione delle schede prezzo verificata: importi 29,90 / 49,90 € per gli abbonamenti; ritorno ai pacchetti con freccia sinistra da tastiera.
- FAQ verificata in apertura; dettagli HTML nativi.
- Menu mobile verificato in apertura e chiusura con Escape.
- Controllate larghezze 320, 390, 768, 1024 e 1440 pixel; corretti titolo e testata alla larghezza minima.
- Nessuna immagine fallita o errore console rilevato nelle verifiche del browser.
- Copie delle schermate desktop e mobile incluse nella consegna.
- Verificata anche una build con dominio di prova e percorso `/`: collegamenti e sitemap corretti. Ripristinata successivamente la build nella sottocartella `/manutenzione-smart`.
- Verificato il passaggio a `promotion.enabled: false`: prezzi 99 / 249 / 419 € e 39,90 / 69,90 €/mese, senza badge promozionali né prezzi barrati. Ripristinata poi la promozione 2026 e superati nuovamente i controlli.

Il sito usa preferenze CSS per ridurre il movimento. Il funzionamento senza JavaScript è previsto dal markup: i contenuti non sono nascosti in partenza, entrambi i gruppi di piani e la navigazione restano accessibili. Non è stato effettuato un audit completo con lettore di schermo né un test in ogni browser o dispositivo reale.

Non sono stati dichiarati punteggi Lighthouse non misurati. La pubblicazione remota e il certificato del dominio futuro richiedono verifiche al momento dell’attivazione. Le prove locali non garantiscono l’accettazione dell’uso commerciale da parte di GitHub.

## Aggiornamento dell’8 ottobre 2026

Build e verifica delle pagine completate con il catalogo di nove servizi, storia e nuovi canali. Cronologia nuova con identità del marchio, hook privacy e verifica degli autori prima del deploy. La vecchia cronologia e le sue esecuzioni sono conservate in un repository privato separato.
