<template>
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<h1 class="home__title">This is a Proggressive Web Application built with Vue</h1>
		<h2 class="home__subtitle">Features</h2>
		<ul>
			<li class="home__list-item">
				<router-link to="/offline-support">Offline support</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'Home',
	}
</script>

<style>
.home__title {
  margin-bottom: 50px;
}
.home__subtitle, .home__list-item {
  text-align: left;
}
</style>
