<template>
	<div>
    <template v-if="users && users.length">
      <h2>List of users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <router-link :to="`/offline-support/user/${user.id}`">
            <p>Name: {{ user.name }}</p>
            <p>User: {{ user.username }}</p>
            <p>Email: {{ user.email }}</p>
          </router-link>
        </li>
      </ul>
    </template>
    <div v-else>Cannot load users data</div>
  </div>
</template>

<script>
	export default {
		name: 'UsersList',
		data() {
			return {
				users: [],
			}
		},
		async created() {
			await fetch('https://jsonplaceholder.typicode.com/users')
				.then((response) => response.json())
				.then((users) => this.users = users)
    },
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 15px;
    padding: 15px;
    border: 1px solid black;
    border-radius: 8px;
	}
	a {
		color: #42b983;
	}
</style>
