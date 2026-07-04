const CACHE_NAME = 'qlhc-20260704-simple-stock-table-1';
const FILES = ['./index.html', './quan-ly-kho-cong-cu.html', './manifest.webmanifest', './app-icon-coffee.png'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request, {cache:'no-store'}).catch(() => caches.match(event.request))); });



























