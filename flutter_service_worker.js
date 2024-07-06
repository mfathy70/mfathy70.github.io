'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "5a3343142372c8bf475b8be2d3b00758",
"flutter_bootstrap.js": "a93d23411975aab2cfcc107e3d434a5e",
"version.json": "1a2a31f95cf8a765f4778a3c993f940b",
"splash/img/dark-1x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/light-1x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/light-4x%20copy.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/light-2x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/dark-4x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/light-3x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/dark-3x.gif": "a784a2ac283575fd713f6b322568371d",
"splash/img/dark-2x.gif": "a784a2ac283575fd713f6b322568371d",
"favicon.ico": "e82466fc9795af3ec0d9ade8d64bc71b",
"index.html": "2fcfa51697817dcd8dcb47f3f1220ec1",
"/": "2fcfa51697817dcd8dcb47f3f1220ec1",
"apple-icon.png": "390676dd60fc5278adb96fc401ea451e",
"apple-icon-144x144.png": "930c2a54606e30e27bd63da27bc8b58c",
"android-icon-192x192.png": "d7fa00b397489c882e7488621d89d4d3",
"apple-icon-precomposed.png": "390676dd60fc5278adb96fc401ea451e",
"apple-icon-114x114.png": "7acf35a315c940b9a5813c427b7b0363",
"main.dart.js": "bb57eb31a7399f5283af87362f46461a",
"ms-icon-310x310.png": "76f2587b294e8db7c85d5dddbcd8d467",
"ms-icon-144x144.png": "930c2a54606e30e27bd63da27bc8b58c",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"apple-icon-57x57.png": "9a8bd15674b77156800e9ca93676bc73",
"apple-icon-152x152.png": "e59f3fc37ede17c67814af9ccd428059",
"favicon.png": "97c063ef5b8a685828eef6dc43689f5f",
"ms-icon-150x150.png": "a5176260228837b082a5030bcff1a814",
"android-icon-72x72.png": "598fdd91219f40ceb13cebc6635865b4",
"android-icon-96x96.png": "1202e865e0289bb258f2b6c850dbb49e",
"android-icon-36x36.png": "40e1e8cd15acc0bb3db4eae46bbb734b",
"apple-icon-180x180.png": "651c98eff215336a53f9fdb3d36a51fb",
"favicon-96x96.png": "1202e865e0289bb258f2b6c850dbb49e",
"icons/favicon-16x16.png": "5a3343142372c8bf475b8be2d3b00758",
"icons/android-chrome-192x192.png": "9692600621a087e777c68e223f8291fd",
"icons/apple-touch-icon.png": "626f97ec3a2de5b30d2daa9bfa951409",
"icons/favicon-32x32.png": "f71143b77f4084df96b717484c498ae7",
"scripts/botd-1.7.1.js": "8421780d019f38a2d630ea71d155ea26",
"manifest.json": "14a5fa10502d26fa650ac0a1b32e5138",
"android-icon-48x48.png": "ae9fc43ea8d0eef096ecdd2deb0a9927",
"apple-icon-76x76.png": "11fc9639dd46cb828809236939ab227d",
"sitemap.xml": "3f9be9da835f86cc9ae53648ea659a8f",
"apple-icon-60x60.png": "b1259b266f38b2c45e42be611777212d",
"robots.txt": "09798a0b5d33d61204d45d5441da7ecd",
"assets/AssetManifest.json": "c843d03a36493a73a8a4844b0af3f4b6",
"assets/NOTICES": "40b5f7bb1e095443cdfa68d439a02d5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7ec79bbe0d3780d2f677bab2b28c43af",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "993ac0ad152d5282eb1289749dff1297",
"assets/fonts/MaterialIcons-Regular.otf": "aa75d77e487612c0203a5301e379d692",
"assets/assets/images/dubai.webp": "ec68cf258ad036351458a19d81414a72",
"assets/assets/images/media3.jpg": "b1ddabc24dfa02296e0530f576ec43a8",
"assets/assets/images/media2.jpg": "41ab8017bb28324e19f9ea1989f59b72",
"assets/assets/images/logo.png": "97c063ef5b8a685828eef6dc43689f5f",
"assets/assets/images/media1.jpg": "5c3c49baad780f960f9c502798b6051d",
"assets/assets/icons/investment.svg": "68a57f0e83a6d252f47333570ce4057d",
"assets/assets/icons/house.svg": "74159bac5e35b790f93b46fc46c73a63",
"assets/assets/icons/agent.svg": "c8b25262cbe36783de43094197c7da2b",
"assets/assets/icons/consultation.svg": "0e2005319bd18178182c9c3879930d12",
"assets/assets/icons/facebook.svg": "5ac8066682e47123f41ff7639145c7e7",
"assets/assets/icons/agreement.svg": "11ccdd242281931482bbe01ff6f06c90",
"assets/assets/lottie/lo_hello.json": "6b8167e6c2a6aca309abbdaa8977bf7c",
"assets/assets/translations/en.json": "bb580d19415d30e2d79fd81235fe7635",
"assets/assets/translations/ar.json": "9f2c89a4b9fb3df9c188daaf8cab28cc",
"assets/assets/animations/splash_loading.gif": "7c4a5f9ffa60250beb7b06c7253904c1",
"browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"android-icon-144x144.png": "930c2a54606e30e27bd63da27bc8b58c",
"apple-icon-72x72.png": "598fdd91219f40ceb13cebc6635865b4",
"apple-icon-120x120.png": "311431534281aead925d9de6e5e3a547",
"favicon-32x32.png": "f71143b77f4084df96b717484c498ae7",
"ms-icon-70x70.png": "dbffb83633e1bbfc21a869f245d91258",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
