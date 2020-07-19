<template>
	<BaseButton theme="outlined" @click="handlePushNotication"
		>Test push notification</BaseButton
	>
</template>

<script>
	import BaseButton from '@/components/BaseButton'
	export default {
		components: {
			BaseButton,
		},
		methods: {
			async handlePushNotication() {
				Notification.requestPermission()
				if (Notification.permission === 'granted') {
					navigator.serviceWorker
						.getRegistration()
						.then((registration) => {
							if (registration == undefined) return
							const options = {
								body: 'Test notification!',
								icon: './img/logo.82b9c7a5.png',
								vibrate: [100, 50, 100],
								data: {
									dateOfArrival: Date.now(),
									primaryKey: 1,
								},
							}
							registration.showNotification(
								'Your Message Here!',
								options
							)
						})
				}
			},
		},
	}
</script>
