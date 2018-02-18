var staticCacheName = 'pour-static';

self.oninstall = function(event) {
  self.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName).then(function(cache) {
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
};