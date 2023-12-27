<style lang="scss" scoped>

</style>

<template>
	<RouterView v-slot="{ Component, route }">
		<KeepAlive>
			<component v-if="route.meta.KeepAlive" :is="Component"></component>
		</KeepAlive>
		<component v-if="! route.meta.KeepAlive" :is="Component"></component>
	</RouterView>
</template>

<script setup lang="ts">
	import {
		onMounted
	} from 'vue';

	onMounted(() => {
		const elRoot = document.documentElement;

		elRoot.setAttribute('data-theme', 'green');
	});
</script>