if (typeof importScripts === "function") {
  // eslint-disable-next-line no-undef
  importScripts(
    "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
  );
  if (workbox) {
    workbox.core.skipWaiting();
    workbox.core.clientsClaim();

    // eslint-disable-next-line no-restricted-globals
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
    applyCustomCachingStrategies();
  }
}


self.addEventListener("fetch", e => {
  let url = e.request.url;
  
  if(url.match(/http:\/\/localhost:8080\/beitraege\/[0-9]+$/)){
    let id = url.split("/")[4];
    caches.open("apicache").then(cache => {
      cache.keys().then(key => {
        key.forEach((k, i) => {
          console.log(k);
          console.log(i);
        });
      });
      return cache;
    }).then(cache => {
      caches.has("apicache").then(hasCache => {
        console.log("apicache found: " + hasCache);
      });
    });
  }
})

function applyCustomCachingStrategies() {
  const hostFrontend = "localhost:3000";
  const hostBackend = "localhost:8080";
  const isCacheApiRequests = url => url.host.startsWith(hostBackend) &&
    (url.pathname.endsWith("/beitraege") || url.pathname.endsWith("/users"));

  
  workbox.routing.registerRoute(
    ({ url }) => {
      let isCached = isCacheApiRequests(url);
      if (isCached) console.log("caching resource in apicache: " + url);
      return isCached;
    },
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'apicache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 60 * 5
        })
      ]
    }),
    'GET'
  );

}