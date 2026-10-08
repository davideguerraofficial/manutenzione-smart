# Protezione dei dati nel repository pubblico

Il repository e GitHub Pages sono accessibili a chiunque. Sono autorizzati il marchio, l’email aziendale e i canali ufficiali indicati nel sito. Non inserire informazioni personali, email private, numeri personali, indirizzi privati, percorsi del computer, credenziali o fascicoli di clienti reali. Anche cronologia, messaggi dei commit, PDF, immagini e allegati possono esporre dati.

## Configurazione della copia locale

Esegui nella cartella del progetto, senza modificare le impostazioni globali di Git:

```sh
git config user.name "Manutenzione Smart"
git config user.email "noreply@manutenzione-smart.invalid"
git config user.useConfigOnly true
git config core.hooksPath .githooks
```

Questo indirizzo usa un dominio riservato e non è una casella di contatto. Gli hook bloccano autori diversi e controllano i file prima del commit e del push. Per mantenere l’identità del marchio, crea i commit nella copia locale; l’editor web può usare il nome dell’account.

Nelle impostazioni email dell’account GitHub mantieni abilitate la privacy delle email e la protezione dei push che espongono l’email personale. Il nome del proprietario GitHub resta visibile nei repository pubblici e nell’indirizzo Pages.

## Controlli

```sh
npm run verify:privacy
npm run build
npm run verify
```

Il controllo cerca email fuori dalla lista approvata, percorsi personali del computer e alcuni formati di credenziali. Verifica gli autori di tutta la cronologia del ramo corrente; Actions ripete il controllo prima del deploy. Non rileva ogni possibile dato personale: nomi, indirizzi, foto, telefoni e dati inseriti nei documenti richiedono revisione umana prima di qualsiasi caricamento.

Non caricare un PDF senza controllarne testo, annotazioni, metadati, immagini e allegati. Le copie pubbliche attuali conservano testo, collegamenti e aspetto; sono stati rimossi allegati incorporati e metadati non necessari. Conserva gli originali solo localmente e aggiorna il manifest dei file pubblici dopo ogni sostituzione verificata.

## Vecchie copie

Non unire o pubblicare la vecchia cronologia nella nuova fonte ufficiale. Una copia locale o un archivio privato deve rimanere privato. Per dati già diffusi, riscrivere la cronologia non elimina le copie scaricate da terzi né tutte le cache: consulta la [procedura ufficiale GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/removing-sensitive-data-from-a-repository) per eventuali richieste di rimozione al supporto.
