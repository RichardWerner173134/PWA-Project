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
import { StaleWhileRevalidate } from 'workbox-strategies';
import { CacheableResponsePlugin} from 'workbox-cacheable-response';

const hostFrontend = "localhost:3000";
const hostBackend = "localhost:8080";
const isInPrecacheAssets = url => url.host.startsWith(hostFrontend) && (url.pathname.endsWith(".png")|| url.pathname.endsWith(".ico"));
const isCacheApiRequests = url => url.host.startsWith(hostBackend) && 
    (url.pathname.endsWith("/beitraege") || url.pathname.endsWith("/users"));

clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  ({url}) => {
    let isCached = isInPrecacheAssets(url);
    if(isCached) console.log("caching resource in precache: " + url);
    return isCached;
  },
  new CacheFirst({
    cacheName: 'precache'
  })
);

registerRoute(
  ({url}) => {
    let isCached = isCacheApiRequests(url);
    if(isCached) console.log("caching resource in apicache: " + url);    
    return isCached;
  },
  new CacheFirst({
    cacheName: 'apicache',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 10
      })
    ]
  }),
  'GET'
);


