'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "77e251eafe5fcbe0edbb41f4c870c38a",
"assets/AssetManifest.bin.json": "34bc6824586425a65bb8d6483097f159",
"assets/AssetManifest.json": "3bd069de382a43bfa2a165fa4d293d1b",
"assets/FontManifest.json": "9bf44370cb1b7c278eeb55912bcf38ee",
"assets/fonts/ayad.ttf": "8ea542a54876564f49e9a90cd90ceecf",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/images/aa.webp": "6f46f465c9c039bda4f3a92977ab9278",
"assets/images/aa2.jpg": "e7717e3446cf2711064791169832bd90",
"assets/images/aa3.jpg": "b0eef308aa16f17a9b8dbe862347c8e5",
"assets/images/aa4.jpg": "0b24703299db61827865ae219c82f160",
"assets/images/capture000.webp": "97ceba219915f317240232cb827ec87a",
"assets/images/drink1.webp": "c7c044806a22018ca9b2649ba86175aa",
"assets/images/getty1.jpg": "d6fda28f703cc4c031502d30f7c15f29",
"assets/images/giphy.gif": "3bba44678b02cad1dfe99b32f983d537",
"assets/images/hq720.jpg": "ceaa2ae3f57b88490cbe1655addd339f",
"assets/images/kola.jpg": "353ec72e473e7bd75c9bbc11c0e0575a",
"assets/images/maxresdefault.jpg": "82c9702093a02cae0182774639bb2a6e",
"assets/images/pat.jpg": "770eda972e47c44068d01db98f3203d3",
"assets/images/pk1.jpg": "a3ff4dd68328701444fffd6289fa9cc5",
"assets/images/sh1.jpeg": "eea892883bc8d6833519ec672fede014",
"assets/images/sh10.jpg": "82327ab0d32c9ab84ebd507135c93bc6",
"assets/images/sh11.jpg": "e0b32d029ea8462ef35b9fdbcd0b2083",
"assets/images/sh12.jpg": "df2da811e8ccf6ddbb0f465058969ef1",
"assets/images/sh13.jpg": "fc29bdd8016d7a5c5f9ac85a39130a34",
"assets/images/sh2.jpg": "bcb1e24f516627ec4a42d2ce14a32e0c",
"assets/images/sh3.jpg": "d5ae455413d0d73ebb2e162ea2ce966d",
"assets/images/sh4.jpg": "95edea1d9ed107b2261d5e9fc5642e88",
"assets/images/sh5.jpg": "3947773ebad01fa3a6cc4a1092b97837",
"assets/images/sh6.jpg": "6348018d435cb7cf99248e4064050293",
"assets/images/sh7.jpg": "9e1a3a99833b801b8764f3aa53a3ac64",
"assets/images/sh8.webp": "7cf27919783a1e3a7e92e343c062f41d",
"assets/images/shawrma.png": "f040e8b4744fd719d43a7c7ab65176f3",
"assets/images/shsa.jpg": "01128e4602ed4c9193e59afd1a163976",
"assets/images/unnamed.jpg": "172dddf887536e2d26f494e68a1335f2",
"assets/images/water.jpg": "9aea0914faa0c96daf6e207fa5be8343",
"assets/NOTICES": "2d9920ddb30eaf878dd6d18e47d4559f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "01b482249713be789a214d109a4b7cd3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "59a320edb3eaa5fbdd32df7b0dd2b273",
"/": "59a320edb3eaa5fbdd32df7b0dd2b273",
"main.dart.js": "8e52ace4f069f1a933b9598aa5043774",
"manifest.json": "2f161b26591862b4ed82eb2c20cafba9",
"version.json": "38e403a16aac45e31db01dca33790ee8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
