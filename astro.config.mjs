import { defineConfig } from 'astro/config';
import configuration from './config/site.json' with { type: 'json' };

// GitHub Actions passa automaticamente dominio e sottocartella reali.
const origin = process.env.SITE_ORIGIN || configuration.origin;
const base = process.env.SITE_BASE ?? configuration.base;

export default defineConfig({
  output: 'static',
  site: origin || undefined,
  base,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
  build: { format: 'directory' },
});
