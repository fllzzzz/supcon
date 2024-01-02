<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	.device-overview {
		width: 100%;
		height: 100%;
		border-radius: 10px;
		@include T.themeify {
			background-color: T.get(device-info-overview-bg-color);
			border: 1px solid #{T.get(device-info-overview-border-color)};

			&__wrapper__main {
				.row {
					&:nth-child(1) {
						span {
							&:nth-child(2) {
								color: T.get(device-info-overview-font-color);
							}
						}
					}
					@for $i from 2 through 4 {
						&:nth-child(#{$i}) {
							.col {
								&:nth-child(3) {
									span {
										color: T.get(device-info-overview-font-color);
									}
								}
							}
						}
					}
				}
			}

			&__wrapper__split-line {
				border-image: T.get(device-info-overview-split-line-bg-image);
				background: T.get(device-info-overview-split-line-bg-color);
			}
		}

		&__wrapper {
			width: 100%;
			height: 100%;
			padding-top: 45px;
			display: flex;
			flex-flow: column nowrap;
			span {
				line-height: 1;
			}
		}

		&__wrapper__main {
			width: 100%;
			height: 131px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: flex-start;
			align-items: center;
			.row {
				&:nth-child(1) {
					width: 100%;
					height: 24px;
					margin-bottom: 12px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-start;
					align-items: center;
					span {
						&:nth-child(1) {
							margin-left: 69px;
							margin-right: 68px;
							height: 20px;
							font-size: 20px;
							font-family: Alibaba PuHuiTi;
							font-weight: 500;
							color: #FFFFFF;
						}
						&:nth-child(2) {
							height: 26px;
							font-size: 26px;
							font-family: Alibaba PuHuiTi;
							font-weight: 500;
						}
					}
				}
				@for $i from 2 through 4 {
					margin-bottom: 15px;
					&:nth-child(#{$i}) {
						height: 19px;
						display: flex;
						flex-flow:row nowrap;
						justify-content: flex-start;
						align-items: center;
						.col {
							height: 100%;
							&:nth-child(1) {
								margin-right: 23px;
								span {
									height: 20px;
									font-size: 20px;
									font-family: Alibaba PuHuiTi;
									font-weight: 400;
									color: #FFFFFF;
								}
							}
							&:nth-child(2) {
								margin-right: 35px;
								width: 22px;
								img {
									width: 100%;
									height: 100%;
									object-fit: fill;
								}
							}
							&:nth-child(3) {
								span {
									height: 14px;
									font-size: 14px;
									font-family: Alibaba PuHuiTi;
									font-weight: 500;
								}
							}
						}
					}
				}
				:last-child {
					margin-bottom: unset;
				}
			}
		}

		&__wrapper__split-line {
			margin: 60px 0 30px 47px;
			width: 265px;
			height: 1px;
			border: 1px solid;
		}

		&__wrapper__item {
			display: flex;
			flex-flow: column nowrap;
			width: 100%;
			.row {
				width: 100%;
				height: 19px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-items: center;
				margin-bottom: 30px;
				&:last-child {
					margin-bottom: unset;
				}
				.col {
					height: 100%;
					display: flex;
					flex-flow: row nowrap;
					align-items: center;
					&:nth-child(1) {
						margin-right: 28px;
						width: 163px;
						display: flex;
						flex-flow: row nowrap;
						justify-content: flex-end;
						align-items: center;
						span {
							height: 20px;
							font-size: 20px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
					&:nth-child(2) {
						flex: 1;
						img {
							height: 100%;
							object-fit: fill;
							margin-right: 18px;
							&:last-child {
								margin-right: unset;
							}
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="device-overview">
		<div class="device-overview__wrapper">
			<div class="device-overview__wrapper__main">
				<div class="row">
					<span>设备数量</span>
					<span>{{ config?.total }}</span>
				</div>
				<template
					v-for="(item, index) in config?.deviceInfo"
					:key="index"
				>
					<div class="row">
						<div class="col"><span>{{ deviceNameMap.get(item.id) }}</span></div>
						<div class="col"><img :src="item.image"></div>
						<div class="col"><span>{{ item.value }}</span></div>
					</div>
				</template>
			</div>
			<div class="device-overview__wrapper__split-line"></div>
			<div class="device-overview__wrapper__item">
				<template
					v-for="(item, index) in config?.itemInfo"
					:key="index"
				>
					<div class="row">
						<div class="col">
							<span>{{ item.name }}</span>
						</div>
						<div class="col">
							<template
								v-for="(_item, _index) in item.deviceInfo"
								:key="_index"
							>
								<img :src="getDeviceImage(_item.id)">
							</template>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type {
		PropType
	} from 'vue';

	import {
		ref,
		computed,
		onMounted
	} from 'vue';

	type DeviceInfo = {
		id: string,
		value: number,
		image :string
	}[];

	type Config = {
		total? :number;
		deviceInfo? :DeviceInfo;
		itemInfo? :{
			name :string;
			deviceInfo :Omit<DeviceInfo[0], 'image'>[];
		}[]
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>
		}
	})

	const config = ref<Config | undefined>();

	const deviceNameMap = new Map<string, string>();

	const itemListMap = new Map<string, string[]>([
		['green', [
			'何为森',
			'森林奥秘',
			'研究之道',
			'植物多样性',
			'12种代表性植物',
			'林下经济',
			'林与城可视化',
			'林与城',
		]],
		['yellow', [
			'午潮传说',
			'午潮惨案',
			'数字午潮',
			'午潮旅游',
		]],
	]);

	const getDeviceImage = computed(() => (id :string) => {
		if(! config.value?.deviceInfo) return undefined
		return config.value.deviceInfo.find(dev => dev.id === id)?.image
	});

	const configCreater = (
		theme :string
	) :Config | undefined=> {
		deviceNameMap.set('host', '主机');
		deviceNameMap.set('projection', '投影');
		deviceNameMap.set('screen', '大屏');

		const _config :Config = {
				total: 50,
				deviceInfo: [
					{
						id: 'host',
						value: 10,
						image: require<string>(`@/assets/images/${theme}/info/host.png`)
					},
					{
						id: 'projection',
						value: 10,
						image: require<string>(`@/assets/images/${theme}/info/projection.png`)
					},
					{
						id: 'screen',
						value: 10,
						image: require<string>(`@/assets/images/${theme}/info/screen.png`)
					},
				],
				itemInfo: itemListMap.get(theme)?.map(item => ({
					name: item,
					deviceInfo: [
						{
							id: 'host',
							value: 1,
						},
						{
							id: 'projection',
							value: 1,
						},
						{
							id: 'screen',
							value: 1,
						}
					],
				})),
		};

		return _config;
	};

	onMounted(() => {
		const theme = document.documentElement.getAttribute('data-theme');

		if(! theme) throw new Error('@deviceBox => data-theme is undefined');

		config.value = configCreater(theme);
	});
</script>