const CACHE_NAME = 'cuuho-cache-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/firebase.js',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  // try cache first, then network
  event.respondWith(
    caches.match(event.request).then(resp => {
      return resp || fetch(event.request).then(r => {
        // optionally cache fetched assets (avoid large media)
        return r;
      });
    }).catch(()=> fetch(event.request))
  );
});
