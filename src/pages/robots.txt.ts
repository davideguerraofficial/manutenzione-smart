import type { APIRoute } from 'astro';
import { path } from '../lib/links';
export const GET: APIRoute = ({ site }) => new Response(`User-agent: *\nAllow: /\n${site ? `Sitemap: ${new URL(path('sitemap.xml'), site).href}\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
