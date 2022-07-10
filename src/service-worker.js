/* eslint-disable no-restricted-globals */

// This service worker can be customized!
// See https://developers.google.com/web/tools/workbox/modules
// for the list of available Workbox modules, or add any other
// code you'd like.
// You can also remove this file if you'd prefer not to use a
// service worker, and the Workbox build step will be skipped.

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { CacheFirst } from 'workbox-strategies';
import { CacheableResponsePlugin} from 'workbox-cacheable-response';

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => {
    console.log(url);
    return url.pathname.endsWith("/beitraege") 
    || url.pathname.endsWith("/users" 
    || url.pathname.endsWith("/img")
    || url.pathname.endsWith(".png"))
  },
  new CacheFirst({
    cacheName: 'api',
    plugins: [
      new ExpirationPlugin({ maxEntries: 50 }),
    ],
  })
);

self.addEventListener("fetch", e => {
  console.log(e);
})