const CACHE_NAME = 'qlhc-20260704-search-toolbar-compact-all-1';
const FILES = ['./','./index.html?v=20260704-search-toolbar-compact-all-1','./quan-ly-kho-cong-cu.html?v=20260704-search-toolbar-compact-all-1','./manifest.webmanifest?v=20260704-search-toolbar-compact-all-1','./app-icon-coffee.png?v=20260704-search-toolbar-compact-all-1','./login-coffee-bg.png?v=20260704-search-toolbar-compact-all-1','./icon-192.png?v=20260704-search-toolbar-compact-all-1','./icon-512.png?v=20260704-search-toolbar-compact-all-1','./version.json?v=20260704-search-toolbar-compact-all-1'];
self.addEventListener('install', event => { event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener('activate', event => { event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', event => { event.respondWith(fetch(event.request).catch(() => caches.match(event.request).then(r => r || caches.match('./index.html')))); });







