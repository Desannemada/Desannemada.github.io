'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fc1c199587086f85de0d7b2a740cb9cf",
"assets/assets/anne.png": "6862ca8a4a046e8be69205704e96cf87",
"assets/assets/bruno.png": "e21e6b85255d60fd04f3fd068cba11e3",
"assets/assets/fonts/open-sans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/open-sans/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/assets/fonts/open-sans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/open-sans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/open-sans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/google_logo.png": "b75aecaf9e70a9b1760497e33bcd6db1",
"assets/assets/icons/card.png": "f7d75493ebdd94730aaeefdca2f07ae4",
"assets/assets/icons/config.png": "42f0132b67bc77a9efbb2629e7d18bce",
"assets/assets/icons/geral.png": "4dc20cab94bab8b5e61e248a5a700171",
"assets/assets/icons/MyFlutterApp.ttf": "4baaa7d79929a2cf5dcc86ed14c3a697",
"assets/assets/inicioIcon1.png": "e3c8b473004c6cc3d4a5068d8f852b37",
"assets/assets/inicioIcon2.png": "501acc44f98c99ba4a295e246e17343b",
"assets/assets/inicioIcon3.png": "b780def28f1768048414c6aebe77749c",
"assets/assets/inicioIcon4.png": "127328ecabbc9c56c66cb1512a738584",
"assets/assets/inicioIcon5.png": "635b023834e2cdd60b3dc1873d8ca46f",
"assets/assets/inicioIcon6.png": "0e23a136b3588e6c55ef86b23d536be6",
"assets/assets/loginBackground.jpg": "a73ebe0dbe2f76f6cb24373968c0b4bb",
"assets/assets/logo.png": "51dfc42594329df17a73a70a3e368a32",
"assets/assets/neto.png": "ac75ef9fab73b2b77a350c533913c6af",
"assets/assets/profileImage.jpg": "37292fea5ed05c8a349436d0bf26c1a9",
"assets/assets/renato.png": "d5b3bc859cc1659924a1e6f9abdff754",
"assets/FontManifest.json": "1a582747c5b24213d4295027e054371f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/NOTICES": "8cf361869fcb8cc4af8c4fb886d2810a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "644b29ff88896569b8d9ccd71ba67710",
"icons/Icon-192.png": "d2c2a06a067b6c9aab22fb2324363c28",
"icons/Icon-512.png": "51dfc42594329df17a73a70a3e368a32",
"index.html": "1f3cdef60ad81651baa4524f742c6206",
"/": "1f3cdef60ad81651baa4524f742c6206",
"main.dart.js": "387df786282f76c755fe322258347df4",
"manifest.json": "3e5e884028cd2e35c6f26a3931c9e0f0"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
