'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "eec81f18856a6dd157a47878243130e7",
"assets/assets/images/bg.png": "75194fbd4995124f9d1a8e1e339ef283",
"assets/assets/images/blood-cells.png": "2e701819e409b01a2a864c532563742e",
"assets/assets/images/blood.png": "6c2eff7e49debca0fd5c86984eaeeeb8",
"assets/assets/images/body.png": "fd532b35c7b3bb7ab849172de5742f0c",
"assets/assets/images/brain.png": "1cc50f2db0d261fa0a16b2dd7b2ae07b",
"assets/assets/images/download.png": "c68220337559f2dad80ace7639050e66",
"assets/assets/images/earth_m.png": "7870705228b0f09e3728db231e261efd",
"assets/assets/images/heart.mp4": "5a5f92810bfe55fd9e003e951803439d",
"assets/assets/images/heart.png": "6c7b64b85a937897014fc89436379445",
"assets/assets/images/heart_.png": "eaced4584677734cd30faaf87024fb96",
"assets/assets/images/heart_rate.png": "96dc99268fab5b84f9acf4b104dd9301",
"assets/assets/images/home.png": "f57db47d10f091d8444fcc4295956854",
"assets/assets/images/horizon.png": "db467d0e1a7b72ea465c5a72dd4f0de7",
"assets/assets/images/info.png": "d58580a1e33ddc3a81caf113b30fd3ce",
"assets/assets/images/information.png": "3d3a413e12b4ef112ed90c9610510c04",
"assets/assets/images/inner.png": "5f5d53a805c669286055a5a2c6e00a2f",
"assets/assets/images/kidney.png": "2868808f32ccc621a1a45497e47c2d48",
"assets/assets/images/light.png": "f5b77775250bf79189235cc893086667",
"assets/assets/images/logo.png": "934372c163e1a3c3c6b85ecc3b130ec5",
"assets/assets/images/logo_mini.png": "bad5dc72061632f2f357cbb6c05d5d76",
"assets/assets/images/ocean.png": "03dc69c8e211f6874d9fc51c24db94f1",
"assets/assets/images/question.png": "da8360f3b3de4c386581b150d5f324f3",
"assets/assets/images/schedule.png": "93ac4097d3880d151d1120a550a3dea4",
"assets/assets/images/skin.png": "3c38ffd27c209b5bc2b7cbcece3384c4",
"assets/assets/images/smartphone.png": "c42bd13ffb203e062cef4f035d68ae0c",
"assets/assets/images/sugar-blood-level.png": "dbe90b71b0a3d02b8c9997456896abb8",
"assets/assets/images/support.png": "d9b85f80ff4a1fd6001a66b79e9f3d04",
"assets/assets/images/think.png": "0dfe3eec63c4aaa86a30331fcd67e82a",
"assets/assets/images/voice-assistant.png": "cfbb513405aa7adf19b575756016a7c0",
"assets/assets/images/voltage.png": "d876babf24747c936843fc481d5f7df4",
"assets/assets/images/wave.png": "21840bdd8ad83f4e0e4d4e4e9b3b8948",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "01d0ca0dbf1d2d136a9b207bdb1965e3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "fb3df9ef8e49b5e08b6afcb95521a52c",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4ca6221019a9ea248ca6fe53b227fa6c",
"/": "4ca6221019a9ea248ca6fe53b227fa6c",
"main.dart.js": "50cab42fa7e2e045976dd5394e53cffe",
"manifest.json": "b6929eca35fa2831d54e1ef303ddea4f",
"version.json": "7ee19da4df40d8120279cf69e849186f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
