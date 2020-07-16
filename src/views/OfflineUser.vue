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
	</div>

</template>

<script>
	export default {
		data() {
			return { user: null }
		},
		async created() {
			await fetch(`https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
				.then((response) => response.json())
				.then((user) => (this.user = user))
		},
		
		computed: {
			userAddress () {
				if (!this.user) return null

				const { street, city } = this.user.address 

				return `${street}, ${city}`
			}
		}
	}
</script>
