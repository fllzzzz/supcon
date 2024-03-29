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
				margin-top: 25px;
			}

			.row {
				display: flex;
				flex-flow: row wrap;
			}

			.block {
				width: 125px;
				height: 72px;
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
				& > img {
					margin-top: unset;
					width: 17px;
					height: 18px;
					object-fit: fill;
					margin-right: 8px;
				}
				span {
					height: 22px;
					font-size: 22px;
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
					flexDir: config?.usecolumn ? 'column' : 'row',
					wrapperMarginBottomDiff: getCardMarginBottomDiff
				}"
			>
				<template #title>
					<img :src="getTitleImage">
				</template>
				<template #main>
					<template
						v-if="! config?.usecolumn"
					>
						<template
							v-for="(item, index) in config?.buttonOptions"
							:key="index"
						>
							<div class="block"
								:tabindex="index"
								:style="{
									'--margin-r': config?.marginRight,
									'--margin-b':  config?.marginBottom,
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
					<template
						v-else
					>
						<div class="row">
							<template
								v-for="(item, index) in config?.buttonOptions.slice(0,2)"
								:key="index"
							>
								<div class="block"
									:tabindex="index"
									:style="{
										'--margin-r': config?.marginRight,
										'--margin-b':  config?.marginBottom,
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
						</div>
						<div class="row">
							<template
								v-for="(item, index) in config?.buttonOptions.slice(2)"
								:key="index"
							>
								<div class="block"
									:tabindex="index"
									:style="{
										'--margin-r': config?.marginRight,
										'--margin-b':  config?.marginBottom,
									}"
									@click="blockClickHandler(index + 2, $event)"
								>
									<template
										v-if="item.image"
									>
										<img :src="item.image">
									</template>
									<span>{{ item.text }}</span>
								</div>
							</template>
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
		mediaController
	} from '@/hooks/api';

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
		usecolumn? :boolean;
		ctx :Message;
		buttonOptions :ButtonOptions[];
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
		}
	});

	const config = computed(() => props.config);

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
		name? :string
	) => {
		if(! name || ! config.value?.ctx.host) return undefined;

		mediaController(
			config.value.ctx.host,
			name
		);
	};

	const blockClickHandler = (index :number, event :MouseEvent) => {
		effectHandler(config.value?.buttonOptions[index].text);

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