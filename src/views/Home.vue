<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<h1 class="home__title">
			This is a Proggressive Web Application built with Vue
		</h1>
		<UsersList />
	</div>
</template>

<script>
	export default {
		name: 'Home',
		components: {
			UsersList: () => import('@/components/UsersList'),
    },
	}
</script>

<style>
	.home__title {
		margin-bottom: 50px;
	}
	.home__list-item {
		text-align: left;
	}
</style>
