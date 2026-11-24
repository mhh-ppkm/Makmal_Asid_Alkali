/* Makmal Asid dan Alkali service worker.
   Installing the app also downloads the hand-tracking model, so pinch
   gestures work from the home-screen icon and offline. Bump VERSION
   whenever you upload a new index.html. */
const VERSION = 'makmal-asid-alkali-v1';
const APP = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png',
  './vendor/three/three.min.js', './vendor/three/OrbitControls.js'];
const HANDS = ['hands.js', 'hands.binarypb', 'hand_landmark_full.tflite', 'hand_landmark_lite.tflite',
  'hands_solution_packed_assets_loader.js', 'hands_solution_packed_assets.data',
  'hands_solution_simd_wasm_bin.js', 'hands_solution_simd_wasm_bin.wasm', 'hands_solution_simd_wasm_bin.data',
  'hands_solution_wasm_bin.js', 'hands_solution_wasm_bin.wasm'].map(f => './vendor/mediapipe-hands/' + f);

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSION);
    await c.addAll(APP);
    await c.addAll(HANDS);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSION) await caches.delete(k);
    await self.clients.claim();
    for (const cl of await self.clients.matchAll()) cl.postMessage('sl-ready');
  })());
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    // the page itself: try the network first so updates show, fall back to cache offline
    if (req.mode === 'navigate') {
      e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VERSION).then(c => c.put('./index.html', cp)); return r; })
        .catch(() => caches.match('./index.html')));
      return;
    }
    e.respondWith(caches.match(req, {ignoreSearch: true}).then(hit => hit || fetch(req).then(r => {
      if (r.ok) { const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); }
      return r;
    })));
  } else if (url.hostname.endsWith('fonts.googleapis.com') || url.hostname.endsWith('fonts.gstatic.com')) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
      const cp = r.clone(); caches.open(VERSION).then(c => c.put(req, cp)); return r;
    }).catch(() => hit)));
  }
});
