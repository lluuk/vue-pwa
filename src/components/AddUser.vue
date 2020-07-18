<template>
	<BaseButton @click="handleAddUser">Add new test user</BaseButton>
</template>

<script>
	import BaseButton from '@/components/BaseButton'
	export default {
		components: {
			BaseButton,
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
