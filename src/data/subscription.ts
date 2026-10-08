// Descrizioni del servizio continuativo, coerenti con l'offerta 2026.
export const subscriptionBenefits = [
  { icon: 'archive', phase: 'ALL’INIZIO', title: 'Una base completa, già inclusa.', text: 'Censimento, schede, manuali ufficiali disponibili, calendario e archivio: il fascicolo iniziale con i contenuti Gestione Totale è incluso nel canone, entro il limite del tuo piano.' },
  { icon: 'clock', phase: 'NEL TEMPO', title: 'Qualcuno che segue il filo.', text: 'Aggiorniamo documenti e storico, seguiamo le scadenze documentate e prepariamo promemoria. Il fascicolo accompagna i cambiamenti della struttura.' },
  { icon: 'people', phase: 'QUANDO SERVE', title: 'Un aiuto fino alla scelta.', text: 'Cerchiamo professionisti, raccogliamo preventivi e disponibilità e confrontiamo 3–5 alternative quando disponibili. Tu approvi, noi coordiniamo il seguito.' },
];

export const comparison = [
  { task: 'Fascicolo iniziale', package: 'Incluso nel pacchetto scelto', subscription: 'Contenuti Gestione Totale inclusi nel canone' },
  { task: 'Aggiornamenti successivi', package: 'Li gestisci tu nei file ricevuti', subscription: 'Li seguiamo noi con i documenti ricevuti' },
  { task: 'Scadenze e promemoria', package: 'Li segui tu; calendario dal Completo', subscription: 'Seguiamo le scadenze documentate concordate' },
  { task: 'Ricerca professionisti', package: 'Ti organizzi in autonomia', subscription: 'Ricerca e confronto delle alternative disponibili' },
  { task: 'Coordinamento', package: 'Gestisci direttamente gli appuntamenti', subscription: 'Seguiamo il coordinamento dopo la tua approvazione' },
  { task: 'Il percorso adatto a te', package: 'Vuoi una base ordinata e poi fai da te', subscription: 'Vuoi delegare la gestione nel tempo' },
];

// Scenari illustrativi: non sono testimonianze o casi di clienti reali.
export const scenarios = [
  { icon: 'calendar', label: 'ESEMPIO D’USO · PRIMA DELLA STAGIONE', title: 'Le attività non restano nella tua testa.', situation: 'Devi preparare la struttura e capire quali attività programmare sulle apparecchiature censite.', action: 'Consultiamo le scadenze documentate, organizziamo il riepilogo e prepariamo i promemoria previsti dal perimetro concordato.' },
  { icon: 'coordination', label: 'ESEMPIO D’USO · UN INTERVENTO DA ORGANIZZARE', title: 'Arrivi alla scelta con più informazioni.', situation: 'Serve un professionista e vuoi confrontare preventivi e disponibilità.', action: 'Prepariamo la richiesta, cerchiamo le alternative disponibili e coordiniamo dopo la tua approvazione. Il compenso del tecnico resta separato.' },
  { icon: 'files', label: 'ESEMPIO D’USO · DOPO UN CAMBIAMENTO', title: 'Il fascicolo segue la tua struttura.', situation: 'Hai sostituito un’apparecchiatura o ricevuto un nuovo rapporto di intervento.', action: 'Ci invii i documenti: aggiorniamo scheda e storico nel perimetro concordato, così ritrovi le informazioni nel fascicolo.' },
];
