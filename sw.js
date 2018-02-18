importScripts('serviceworker-cache-polyfill.js');
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pour-static').then(function(cache) {
      return cache.addAll([
        'manifest.json',
        'index.html',
        'js/vue.min.js',
        'js/app.js',
        'compiled.css',
        'v60.svg',
        'bg.jpg',
        'favicon.png'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});