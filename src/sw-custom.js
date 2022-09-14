const hostBackend = "localhost:8080";

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

function applyCustomCachingStrategies() {
  workbox.routing.registerRoute(
    ({ url }) => {
      let isCached = url.href.match(/http:\/\/localhost:8080\/(beitraege|users)$/);
      if (isCached) console.log("caching resource in collectionCache: " + url);
      return isCached;
    },
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'collectionCache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxAgeSeconds: 60 * 5
        })
      ]
    }),
    'GET'
  );

  workbox.routing.registerRoute(
    ({ url }) => {
      let isCached = url.href.match(/http:\/\/localhost:8080\/beitraege\/[0-9]+$/);
      if (isCached) console.log("caching resource in singleBeitragCache: " + url);
      return isCached;
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'singleBeitragCache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 5,
          maxAgeSeconds: 60 * 5
        }),
      ]
    }),
    'GET'
  );

  workbox.routing.registerRoute(
    ({ url }) => {
      let isCached = url.href.match(/http:\/\/localhost:8080\/users\/[a-zA-Z0-9]+$/);
      if (isCached) console.log("caching resource in singleUsersCache: " + url);
      return isCached;
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'singleUsersCache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 5,
          maxAgeSeconds: 60 * 5
        }),
      ]
    }),
    'GET'
  );


  workbox.routing.registerRoute(
    ({ url }) => {
      let isCached = url.href.match(/http:\/\/localhost:8080\/users\/[a-zA-Z0-9]+\/img$/);
      if (isCached) console.log("caching resource in imgCache: " + url);
      return isCached;
    },
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'imgCache',
      plugins: [
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 5,
          maxAgeSeconds: 60 * 5
        }),
      ]
    }),
    'GET'
  );
}