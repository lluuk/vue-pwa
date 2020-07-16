<template>
  <div>
    <h1>This is an offline page</h1>
    <UsersList v-if="$route.name === 'Offline'" />
    <router-view v-else />
  </div>
</template>

<script>

export default {
  components: {
    UsersList: () => import('@/components/UsersList')
  },
}
</script>
