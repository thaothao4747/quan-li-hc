const CACHE_NAME = 'qlhc-20260713-it-item-search-input-1';
const ASSETS = [
  './',
  './index.html?v=20260713-it-item-search-input-1',
  './quan-ly-kho-cong-cu.html?v=20260713-it-item-search-input-1',
  './mobile-app.html?v=20260713-it-item-search-input-1',
  './manifest.webmanifest?v=20260713-it-item-search-input-1',
  './app-icon-coffee.png?v=20260713-it-item-search-input-1'
];
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => null));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith('qlhc-') && key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(fetch(event.request).then(response => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => null);
    return response;
  }).catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html'))));
});
