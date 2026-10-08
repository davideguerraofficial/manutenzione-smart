import type { APIRoute } from 'astro';
import { path } from '../lib/links';
export const GET: APIRoute = ({ site }) => {
  const urls = site ? ['', 'privacy/'].map(route => new URL(path(route), site).href) : [];
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${url.replace(/&/g, '&amp;')}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
