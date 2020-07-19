<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link>
		</div>
		<div id="content">
			<router-view />
		</div>
		<div class="bottom-nav" v-if="showInstallBanner">
			<BaseButton @click="handleShowInstallPromotion"
				>Install App</BaseButton
			>
		</div>
	</div>
</template>

<script>
	import BaseButton from '@/components/BaseButton'

	export default {
		components: { BaseButton },
		data() {
			return {
        deferredPrompt: null,
				showInstallBanner: false,
			}
		},
		mounted() {
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('beforeinstallprompt')
				e.preventDefault()
				this.deferredPrompt = e
				this.showInstallBanner = true
			})
			window.addEventListener(
				'appinstalled',
				async () => await this.handleAppInstall()
			)

			window.addEventListener('DOMContentLoaded', () => {
				if (
					navigator.standalone ||
					window.matchMedia('(display-mode: standalone)').matches
				) {
					this.showInstallBanner = false
				} else {
          this.showInstallBanner = true
        }
			})
		},

		methods: {
			async handleAppInstall() {
				Notification.requestPermission()
				if (Notification.permission === 'granted') {
					navigator.serviceWorker
						.getRegistration()
						.then((registration) => {
							if (registration == undefined) return
							const options = {
								body: 'App succesfully installed! 🎉`🎉`🎉`',
								icon: './img/logo.82b9c7a5.png',
								vibrate: [100, 50, 100],
								data: {
									dateOfArrival: Date.now(),
									primaryKey: 1,
								},
							}
							registration.showNotification(
								'Thanks for installing the app!',
								options
							)
						})
				}
				console.log('INSTALL: Success')
			},

			handleShowInstallPromotion() {
        if (!this.deferredPrompt) return
				this.deferredPrompt.prompt()
				this.deferredPrompt.userChoice.then((choiceResult) => {
					if (choiceResult.outcome === 'accepted') {
						console.log('User accepted the A2HS prompt')
					} else {
						console.log('User dismissed the A2HS prompt')
					}
					this.deferredPrompt = null
				})
			},
		},
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav,
	#content {
		max-width: 1250px;
		margin: 0 auto;
	}

	#nav {
		padding: 30px;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}

	.bottom-nav {
		position: sticky;
		bottom: 0;
		padding: 15px;
		border-top: 1px solid #42b983;
		background: white;
	}
</style>
