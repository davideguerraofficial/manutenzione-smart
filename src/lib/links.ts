export const path = (value = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${value.replace(/^\//, '')}`;

export const emailLink = (email: string, subject = 'Richiesta esempio Manutenzione Smart', body = 'Buongiorno, vorrei ricevere maggiori informazioni e un esempio del servizio Manutenzione Smart.') =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const euro = (value: number) => new Intl.NumberFormat('it-IT', {
  style: 'currency', currency: 'EUR', minimumFractionDigits: 2,
}).format(value);
