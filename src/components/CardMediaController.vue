<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	.card-media-controller {
		@include T.themeify {
			&__wrapper {
				.block {
					background: T.get(card-media-contro-btn-bg-color);
					border: 1px solid #{T.get(card-media-contro-btn-border-color)};
				}
			}
		}

		width: 1640px;
		span {
			line-height: 1;
		}

		&__wrapper {
			img {
				width: 100%;
				height: 100%;
				object-fit: fill;
			}

			.block {
				width: 120px;
				height: 34px;
				border-radius: 17px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: calc(var(--margin-r) * 1px);
				margin-bottom: calc(var(--margin-b) * 1px);
				box-sizing: border-box;
				& > * {
					pointer-events: none;
				}
				img {
					width: 11px;
					height: 13px;
					object-fit: fill;
					margin-right: 8px;
				}
				span {
					height: 17px;
					font-size: 18px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
	}
</style>

<template>
	<div class="card-media-controller">
		<div class="card-media-controller__wrapper">
			<Appcard
				:config="{
					wrapperMarginBottomDiff: getCardMarginBottomDiff
				}"
			>
				<template #title>
					<img :src="getTitleImage">
				</template>
				<template #main>
					<template
						v-for="(item, index) in props.config?.buttonOptions"
						:key="index"
					>
						<div class="block"
							:tabindex="index"
							:style="{
								'--margin-r': props.config?.marginRight,
								'--margin-b':  props.config?.marginBottom,
							}"
							@click="blockClickHandler(index, $event)"
						>
							<template
								v-if="item.image"
							>
								<img :src="item.image">
							</template>
							<span>{{ item.text }}</span>
						</div>
					</template>
				</template>
			</Appcard>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type {
		Message
	} from '@/types';

	import type {
		PropType
	} from 'vue';

	import theme from '@/store/theme';
	import Appcard from './Appcard.vue';

	import {
		ref,
		computed,
		reactive
	} from 'vue';

	type ButtonOptions = {
		image? :string;
		text? :string;
	};

	export type Config = {
		marginRight? :number;
		marginBottom? :number;
		activeColor? :string;
		ctx :Message;
		buttonOptions :ButtonOptions[];
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
		}
	});

	const getTitleImage = computed(() => {
		return require<string>(
			`@/assets/images/${theme.value}/多媒体控制.png`
		);
	});

	const getCardMarginBottomDiff = computed(() => {
		if(
			! props.config?.marginBottom &&
			props.config?.marginBottom !== 0
		) return 0;

		return props.config.marginBottom;
	});

	const effectHandler = (
		index :number
	) => {
		/*  */
	};

	const blockClickHandler = (index :number, event :MouseEvent) => {
		effectHandler(index);

		if(props.config?.activeColor) {
			(event.target as HTMLElement).style.background = 
				props.config.activeColor!;
			

			document.querySelectorAll<HTMLElement>(`
				.card-media-controller 
				.block
			`).forEach(el => {
				if(el.tabIndex === (event.target as HTMLElement).tabIndex)
					return;

				el.style.background = 'rgba(0,188,124,0.2)';
			});
		}
	};
</script>