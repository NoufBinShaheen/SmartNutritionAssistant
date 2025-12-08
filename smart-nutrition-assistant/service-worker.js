const CACHE_NAME = 'sna-cache-v1';
const PRECACHE_URLS = [
	'index.html',
	'offline.html',
	'assets/css/styles.css',
	'assets/js/app.js',
	'assets/img/logo.svg',
	'assets/img/favicon.svg',
	'manifest.webmanifest'
];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(CACHE_NAME)
			.then(cache => cache.addAll(PRECACHE_URLS))
			.then(() => self.skipWaiting())
	);
});

self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(keys => Promise.all(keys.map(key => key === CACHE_NAME ? null : caches.delete(key))))
	);
	self.clients.claim();
});

self.addEventListener('fetch', event => {
	const { request } = event;
	// HTML navigations: network-first, fallback to cache/offline
	if (request.mode === 'navigate') {
		event.respondWith((async () => {
			try {
				const networkResponse = await fetch(request);
				const cache = await caches.open(CACHE_NAME);
				// Cache the actual navigation request so each page (e.g., privacy.html, terms.html) is stored distinctly.
				cache.put(request, networkResponse.clone());
				return networkResponse;
			} catch (err) {
				const cached = await caches.match(request);
				return cached || caches.match('offline.html');
			}
		})());
		return;
	}
	// Static assets: cache-first
	event.respondWith((async () => {
		const cached = await caches.match(request);
		if (cached) return cached;
		try {
			const networkResponse = await fetch(request);
			const cache = await caches.open(CACHE_NAME);
			cache.put(request, networkResponse.clone());
			return networkResponse;
		} catch (err) {
			return caches.match('offline.html');
		}
	})());
});