import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { products } from '../data/site';

const paths = ['/', '/products/', ...products.map((product) => `/products/${product.slug}/`), '/ecosystem/', '/showcase/', '/docs/', '/contribute/', '/privacy/'];

export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths.map((path) => `  <url><loc>${new URL(path, site.url)}</loc></url>`).join('\n')}\n</urlset>`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
);
