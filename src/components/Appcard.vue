<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	.app-card {
		@include T.themeify {
			background-image: url('@/assets/images/#{T.get(id)}/card-background.png');
		}

		box-sizing: border-box;
		display: flex;
		width: 100%;
		height: 100%;
		box-sizing: border-box;
		background-repeat: no-repeat;
		background-size: 100% 100%;

		&__wrapper {
			width: 100%;
			height: 100%;
			padding: 27px 0 0 28px;
			display: flex;
			flex-flow: column nowrap;
		}

		&__wrapper__title {
			width: 137px;
			height: 22px;
			margin-bottom: 80px;
		}

		&__wrapper__main {
			margin-right: 50px;
			margin-left: 33px;
			margin-bottom: calc((45 - var(--margin-bottom-diff)) *1px);
			display: flex;
			flex-direction: var(--felx-dir);
			flex-wrap: wrap;
		}
	}
</style>

<template>
	<div class="app-card">
		<div class="app-card__wrapper">
			<div class="app-card__wrapper__title">
				<slot name="title"></slot>
			</div>
			<div class="app-card__wrapper__main"
				:style="{
					'--felx-dir': props.config.flexDir,
					'--margin-bottom-diff': props.config?.wrapperMarginBottomDiff
				}"
			>
				<slot name="main"></slot>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type {
		PropType
	} from 'vue';

	import {
		reactive
	} from 'vue';

	type Config = {
		flexDir? :string;
		wrapperMarginBottomDiff :number
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
			default: () :Config => ({
				wrapperMarginBottomDiff: 0
			})
		}
	});
</script>