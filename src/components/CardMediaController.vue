<style lang="scss" scoped>
	.card-media-controller {
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
				background: rgba(0,188,124,0.2);
				border: 1px solid #05E49E;
				border-radius: 17px;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: calc(var(--margin-r) * 1px);
				margin-bottom: calc(var(--margin-b) * 1px);
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
					<img src="@/assets/images/yellow/home/content/多媒体控制.png">
				</template>
				<template #main>
					<template
						v-for="(item, index) in props.config.buttonOptions"
						:key="index"
					>
						<div class="block"
							:tabindex="index"
							:style="{
								'--margin-r': item.marginRight,
								'--margin-b': item.marginBottom,
							}"
							@click="blockClickHandler(index, $event)"
						>
							<template
								v-if="item.content?.image"
							>
								<img :src="item.content.image">
							</template>
							<span>{{ item.content?.text }}</span>
						</div>
					</template>
				</template>
			</Appcard>
		</div>
	</div>
</template>

<script setup lang="ts">
	import Appcard from './Appcard.vue';

	import type {
		PropType
	} from 'vue';

	import {
		ref,
		computed,
		reactive
	} from 'vue';

	type ButtonOptions = {
		marginRight? :number;
		marginBottom? :number;
		activeColor? :string;
		content? :{
			image? :string;
			text? :string;
		};
	};

	export type Config = {
		buttonOptions :ButtonOptions[];
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
			default: () :Config => ({
				buttonOptions: [
					{
						marginRight: 72,
						marginBottom: 30,
						activeColor: 'red',
						content: {
							text: '播放',
							image: require<string>('@/assets/images/yellow/播放.png')
						}
					},
					{
						marginRight: 72,
						marginBottom: 30,
						activeColor: 'red',
						content: {
							text: 'asdsd',
							image: 'sad'
						}
					},
				]
			})
		}
	});

	const getCardMarginBottomDiff = computed(() => {
		if(! props.config.buttonOptions || (
			props.config.buttonOptions && props.config.buttonOptions.length === 0
		)) return 0;
		const value = (props.config.buttonOptions
		.map(item => {
			if(! item.marginBottom && item.marginBottom !== 0) return undefined;
			return item.marginBottom;
		}).filter(value => value ? true : false) as number[])
		.sort((a, b) => a > b ? -1 : 1)[0];

		console.log('jx', value);

		return value ? value : 0;
	})

	const blockClickHandler = (index :number, event :MouseEvent) => {
		if(props.config.buttonOptions[index].activeColor) {
			(event.target as HTMLElement).style.backgroundColor = 
				props.config.buttonOptions[index].activeColor!;
			

			document.querySelectorAll<HTMLElement>(`
				.card-media-controller 
				.block
			`).forEach(el => {
				if(el.tabIndex === (event.target as HTMLElement).tabIndex)
					return;

				el.style.backgroundColor = 'rgba(0,188,124,0.2)';
			});
		}
	};
</script>