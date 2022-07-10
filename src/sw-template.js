importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js"
);

const version = 1;
let staticName = `staticCache-${version}`;
let assets = [
  "/",
  "/index.html",
  "/static/css/main.528292e1.css", "/static/css/main.528292e1.css.map",
  "/static/js/main.83aa4d1b.js", "/static/js/main.83aa4d1b.js.map"
]

workbox.core.skipWaiting();
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener("install", ev => {
  console.log(`Version ${version} installed`);

  ev.waitUntil(
    caches.open(staticName).then(cache => {
      cache.addAll(assets).then(() => {
        console.log(`${staticName} has been updated`);
      },
        (err) => {
          console.warn(`failed to update ${staticName}`);
        })
    })

  )
})

self.addEventListener("fetch", e => {
  console.log(e.request.method + ": " + e.request.url);
})
