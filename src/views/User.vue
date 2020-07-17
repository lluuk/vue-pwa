<template>
	<div>
		<div v-if="!user">Cannot load user profile</div>
		<div v-else>
			<h2>User Details</h2>
			<p>Name: {{ user.name }}</p>
			<p>User: {{ user.username }}</p>
			<p>Email: {{ user.email }}</p>
			<p>Address: {{ userAddress }}</p>
			<p>Phone: {{ user.phone }}</p>
			<p>Website: {{ user.website }}</p>
			<p>Company: {{ user.company.name }}</p>
		</div>

		<button @click="handleAddUser">Add new user</button>
	</div>
</template>

<script>
	export default {
		data() {
			return { user: null }
		},
		async created() {
			try {
				const data = await fetch(
					`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
				)
				this.user = await data.json() 
			} catch (e) {
				console.warn(e)
			}
		},

		computed: {
			userAddress() {
				if (!this.user) return null

				const { street, city } = this.user.address

				return `${street}, ${city}`
			},
		},

		methods: {
			async handleAddUser() {
				Notification.requestPermission()
				try {
					const data = await fetch(
						'https://jsonplaceholder.typicode.com/users',
						{
							method: 'POST',
							body: JSON.stringify({
								name: 'test',
								email: 'test@test.com',
								userId: 11,
							}),
							headers: {
								'Content-type':
									'application/json; charset=UTF-8',
							},
						}
					)
					const user = await data.json()
					console.log({ user })
				} catch (e) {
					console.warn(e)
				}
			},
		},
	}
</script>
