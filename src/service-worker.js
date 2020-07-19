/* eslint-disable no-undef */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})
workbox.core.clientsClaim()

const matchFunction = ({ url }) => {
	return url.href.includes('https://jsonplaceholder.typicode.com/users')
}

self.addEventListener('message', (e) => {
	if (!e.data) {
		return
	}

	switch (e.data) {
		case 'skipWaiting':
			self.skipWaiting()
			break
		default:
			break
	}
})

workbox.routing.registerRoute(
	matchFunction,
	workbox.strategies.cacheFirst({
		cacheName: 'placeholder-cache',
	})
)

const showNotification = () => {
	console.log('GG')
	self.registration.showNotification('Background sync success!', {
		body: '🎉`🎉`🎉`',
	})
}

const bgSyncPlugin = new workbox.backgroundSync.Plugin('create-user-queue', {
	maxRetentionTime: 24 * 60,
	onSync: showNotification,
})

const networkWithBackgroundSync = new workbox.strategies.NetworkOnly({
	plugins: [bgSyncPlugin],
})

workbox.routing.registerRoute(matchFunction, networkWithBackgroundSync, 'POST')
