<template>
	<button @click="click" :class="classes"><slot></slot></button>
</template>

<script>
	export default {
		props: {
			theme: {
				type: String,
				default: 'default',
				validator: (value) =>
					['default', 'outlined'].indexOf(value) !== -1,
			},
		},

		computed: {
			classes() {
        return this.theme === 'outlined' ? 'outlined' : 'default'
      },
		},

		methods: {
			click() {
				this.$emit('click')
			},
		},
	}
</script>

<style scoped>
  button {
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 8px;
    transition: all .3s;
    border: 1px solid;
  }

  button:hover {
    cursor: pointer;
  }

  .outlined {
    color: #42b983;
    border-color: #42b983;
    background: #ffffff;
  }

  .outlined:hover {
    color: #ffffff;
    border-color: #ffffff;
    background: #42b983;
  }

  .default {
    color: #ffffff;
    border-color: #ffffff;
    background: #42b983;
  }

  .default:hover {
    color: #42b983;
    border-color: #42b983;
    background: #ffffff;
  }
</style>
