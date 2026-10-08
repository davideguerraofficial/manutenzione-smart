# Collegare il dominio in futuro

Nessun dominio è stato acquistato e nessun DNS è stato modificato. Il dominio è l’unica spesa futura prevista; hosting e HTTPS restano GitHub Pages gratuiti.

Gli esempi `manutenzionesmart.it` e `manutenzione-smart.it` non implicano disponibilità o proprietà. Scegli il dominio solo dopo l’acquisto.

## Dominio principale senza www

1. Verifica la proprietà del dominio nelle impostazioni Pages del tuo account, usando il record TXT richiesto da GitHub.
2. Nel repository, **Settings → Pages → Custom domain**, inserisci il dominio acquistato, ad esempio `manutenzionesmart.it`, e salva **prima** di cambiare i DNS.
3. Dal pannello del registrar configura questi record A per `@`:

| Tipo | Nome | Valore |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | davideguerraofficial.github.io |

Il CNAME DNS non deve contenere `https://`, slash o `manutenzione-smart`. Rimuovi solo gli eventuali record in conflitto per `@` e `www`; non toccare record email o altri servizi. Niente wildcard.

IPv6 facoltativo: aggiungi ad `@` i record AAAA `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`. Gli A restano presenti.

4. Per la configurazione locale aggiorna `config/site.json`:

```json
{
  "origin": "https://manutenzionesmart.it",
  "base": "/",
  "customDomain": "manutenzionesmart.it"
}
```

`customDomain` è un promemoria: il dominio operativo viene impostato in GitHub Pages. Il workflow prende `origin` e `base_path` da Pages, quindi legge la configurazione effettiva anche quando il dominio cambia.

5. Pubblica un nuovo commit: questo aggiorna canonical, sitemap e collegamenti alla radice del dominio.
6. Attendi la verifica DNS e la disponibilità del certificato, poi attiva **Enforce HTTPS**. DNS e certificato possono richiedere fino a 24 ore.

## www e redirect

Con entrambi i DNS configurati, GitHub gestisce il redirect: se Custom domain è `manutenzionesmart.it`, `www` rimanda al dominio principale. Se scegli `www.manutenzionesmart.it`, il dominio senza www rimanda a www. Non serve JavaScript né un servizio di redirect a pagamento.

## File CNAME

Con il workflow GitHub Actions di questo progetto **non è necessario**: il dominio si imposta in Settings → Pages, e GitHub ignora un eventuale CNAME nell’artefatto. Se in futuro passi alla pubblicazione da ramo, il file `CNAME` va nella radice pubblicata. In Astro puoi creare `public/CNAME` con una sola riga, il dominio principale scelto, senza protocollo o percorso. Non crearlo adesso con un dominio non acquistato.

Prima della configurazione reale ricontrolla i valori correnti nella [guida DNS ufficiale GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Vedi anche [verifica dominio](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages), [redirect www](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) e [HTTPS gratuito](https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https).
