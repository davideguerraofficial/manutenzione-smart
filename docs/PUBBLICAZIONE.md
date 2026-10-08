# Pubblicazione gratuita con GitHub Pages

Account: **davideguerraofficial**. Repository ufficiale: [manutenzione-smart](https://github.com/davideguerraofficial/manutenzione-smart), ramo `main`.

Il sito può essere pubblicato con un repository **pubblico** sul piano GitHub Free. Codice e PDF dimostrativi saranno visibili a tutti: non aggiungere documenti di clienti reali, password o dati riservati.

## Configurazione già predisposta

Il repository pubblico contiene i sorgenti e i quattro PDF. In **Settings → Pages**, Source è **GitHub Actions**. La cartella locale è collegata a `origin/main`; non serve creare nuovamente il repository.

Ogni aggiornamento del ramo `main` avvia **Actions → Pubblica Manutenzione Smart**. Aspetta che build, verifica e deploy siano verdi; usa l’indirizzo mostrato dal deployment: `https://davideguerraofficial.github.io/manutenzione-smart/`.

Per ripubblicare senza modificare file, apri il workflow e scegli **Run workflow → main → Run workflow**. In **Settings → Pages**, **Enforce HTTPS** è obbligatorio e automatico sul dominio `github.io`.

La procedura usa runner Linux standard e Actions ufficiali. Non serve un token nel codice: le autorizzazioni del workflow sono limitate alla lettura dei contenuti e alla pubblicazione Pages.

Il workflow legge dominio e sottocartella da Pages tramite `configure-pages`: i collegamenti di immagini, PDF, sitemap e pagine vengono generati per la destinazione effettiva.

## Aggiornamenti

Modifica testi e prezzi nella copia locale configurata con l’identità del marchio e gli hook privacy. L’editor web può attribuire i commit al nome dell’account: per questo progetto usa la copia locale. Ogni push su `main` avvia una nuova pubblicazione.

```sh
npm run verify:privacy
npm run build
npm run verify
git add PERCORSI_DEI_FILE_VERIFICATI
git commit -m "Aggiorna i contenuti del sito"
git push
```

Se una verifica fallisce il nuovo deploy non parte. L’ultima versione pubblicata resta disponibile. Per tornare a contenuti precedenti usa un commit di ripristino, senza cancellare la cronologia.

## Prima dell’uso pubblico definitivo

- Definire l’informativa relativa ai contatti e al servizio; pubblicare solo informazioni aziendali espressamente autorizzate, rispettando il divieto di dati personali.
- Confermare IVA e condizioni commerciali: il listino le rimanda alla proposta definitiva.
- Verificare l’idoneità della vetrina alle condizioni commerciali di Pages.

Fonti: [Astro su Pages](https://docs.astro.build/en/guides/deploy/github/), [sorgente di pubblicazione](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [HTTPS](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
