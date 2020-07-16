/* eslint-disable no-undef */
self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

const matchFunction = ({ url }) => {
	return url.href.includes('https://jsonplaceholder.typicode.com/users')
}

workbox.routing.registerRoute(
	matchFunction,
	workbox.strategies.cacheFirst({
		cacheName: 'placeholder-cache',
	})
)
