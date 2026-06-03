// Service Worker para cachear tiles del mapa (FIX #11)
// Coloca este archivo en src/sw-tiles.js y regístralo en main.ts

const TILE_CACHE = 'map-tiles-v1';
const TILE_HOSTS = ['tile.openstreetmap.org', 'tiles.stadiamaps.com', 'arcgisonline.com'];

self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(clients.claim()); });

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  const esTile = TILE_HOSTS.some(h => url.hostname.includes(h));
  if (!esTile) return;

  event.respondWith(
    caches.open(TILE_CACHE).then(async cache => {
      const cached = await cache.match(event.request);
      if (cached) return cached;  // tile en caché → sin internet

      try {
        const response = await fetch(event.request);
        if (response.ok) cache.put(event.request, response.clone());
        return response;
      } catch {
        // Sin internet y sin caché → tile gris (comportamiento normal de Leaflet)
        return new Response('', { status: 503 });
      }
    })
  );
});
