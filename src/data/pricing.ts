// Fonte commerciale: MANUTENZIONE_SMART_OFFERTA_2026.pdf, pp. 1–3.
// Impostare enabled: false e pubblicare una nuova versione dal 01/01/2027.
// Nessun cambio automatico, backend o attività pianificata.
export const promotion = {
  enabled: true,
  endsOn: '2026-12-31',
  label: 'Promo espansione 2026',
};

const dateFormat = new Intl.DateTimeFormat('it-IT', { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' });
export const promotionDate = dateFormat.format(new Date(`${promotion.endsOn}T12:00:00Z`));
export const regularPriceDate = dateFormat.format(new Date(new Date(`${promotion.endsOn}T12:00:00Z`).getTime() + 86400000));

export const packages = [
  { id: 'essenziale', name: 'Essenziale', limit: 'Fino a 5 apparecchiature', normal: 99, promo: 49.5, highlighted: false,
    tagline: 'La base per cominciare con ordine.',
    features: ['Inventario e schede individuali', 'Ricerca dei manuali ufficiali disponibili', 'Prime attività documentate', 'PDF e file modificabile già compilato'] },
  { id: 'completo', name: 'Completo', limit: 'Fino a 15 apparecchiature', normal: 249, promo: 124.5, highlighted: true,
    tagline: 'Un metodo completo per la tua struttura.',
    features: ['Tutto il pacchetto Essenziale', 'Calendario annuale delle attività', 'Checklist operative', 'Registro degli interventi'] },
  { id: 'gestione-totale', name: 'Gestione Totale', limit: 'Fino a 30 apparecchiature', normal: 419, promo: 209.5, highlighted: false,
    tagline: 'Più apparecchi, un unico archivio.',
    features: ['Tutto il pacchetto Completo', 'Archivio per aree e documenti', 'Fatture, garanzie e rapporti ricevuti', 'Priorità, riepilogo annuale e QR concordato'] },
];

export const subscriptions = [
  { id: 'continua', name: 'Gestione Continua', limit: 'Fino a 15 apparecchiature', normal: 39.9, promo: 29.9,
    tagline: 'La gestione la seguiamo noi.',
    features: ['Fascicolo iniziale con contenuti Gestione Totale incluso', 'Aggiornamento dei documenti e dello storico', 'Scadenze documentate e promemoria', 'Ricerca professionisti e confronto delle alternative', 'Coordinamento dopo la tua approvazione'] },
  { id: 'continua-plus', name: 'Gestione Continua Plus', limit: 'Da 16 a 30 apparecchiature', normal: 69.9, promo: 49.9,
    tagline: 'Lo stesso servizio, per più apparecchi.',
    features: ['Tutti i servizi di Gestione Continua', 'Gestione estesa fino a 30 apparecchiature', 'Fascicolo iniziale incluso nel canone', 'Documenti organizzati per aree', 'Zero commissioni sugli interventi'] },
];

export const priceFor = (plan: { normal: number; promo: number }) => promotion.enabled ? plan.promo : plan.normal;
export const commercialNote = 'Ogni unità censita conta separatamente. Per oltre 30 apparecchiature prepariamo una proposta personalizzata. IVA, fatturazione e condizioni saranno indicate nella proposta definitiva.';
