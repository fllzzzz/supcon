<style lang="scss">
	span {
		line-height: 1;
		user-select: none;
	}

	img {
		user-select: none;
		-webkit-user-drag: none;
	}
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
	import theme from '@/store/theme';
	import _window from '@/store/window';

	import {
		onMounted
	} from 'vue';

	const _theme = _window._config?.theme ? _window._config.theme : 'green';

	onMounted(() => {
		document.documentElement.setAttribute('data-theme' ,_theme);
		theme.value = _theme;
	});
</script>