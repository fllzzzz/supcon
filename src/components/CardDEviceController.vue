<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	.card-device-controller {
		@include T.themeify {
			&__wrapper {
				.block {
					.col.button {
						background: T.get(card-device-contro-btn-bg-color);
						border: 1px solid #{T.get(card-device-contro-btn-border-color)};
						box-shadow: 0px 0px 18px 0px #{T.get(card-device-contro-btn-box-shadow-color)};
						span {
							text-shadow: 0px 0px 4px #{T.get(card-device-contro-btn-text-shadow-color)};
						}
					}
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
				height: 32px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-items: center;
				margin-right: 99px;
				&:last-child {
					margin-right: unset;
				}
				.col {
					display: flex;
					justify-content: center;
					align-items: center;
					&.name {
						margin-right: 10px;
						span {
							height: 17px;
							font-size: 18px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
					&.state {
						width: 31px;
						height: 18px;
						border-radius: 5px;
						margin-right: 15px;
						span {
							height: 11px;
							font-size: 12px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
						&.is-online {
							background: #16D99B;
						}
						&.is-offline {
							background: #FD3232;
						}
					}
					&.button {
						width: 65px;
						height: 32px;
						border-radius: 16px;
						margin-right: 16px;
						&:last-child {
							margin-right: unset;
						}
						span {
							pointer-events: none;
							height: 15px;
							font-size: 18px;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
				}
			}
		}
	}
</style>

<template>
	<div class="card-device-controller">
		<div class="card-device-controller__wrapper">
			<Appcard>
				<template #title>
					<img :src=getTitleImage>
				</template>
				<template #main>
					<template
						v-for="(item, index) in props.config?.deviceInfo"
						:key="index"
					>
						<div class="block">
							<div class="col name">
								<span>{{ item.name }}</span>
							</div>
							<div class="col state"
								v-if="! item.disableState"
								:class="setDeviceStateClass(item.state)"
							>
								<span>{{ deviceStateMap.get(item.state)![0] }}</span>
							</div>
							<div class="col button"
								@click="poweronHandler(item.name)"
							>
								<span>ON</span>
							</div>
							<div class="col button"
								@click="poweroffHandler(item.name)"
							>
								<span>OFF</span>
							</div>
							<div class="col button"
								v-if="! item.disableRebootButton"
								@clicl="rebootHandler(item.name)"
							>
								<span>重启</span>
							</div>
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
		reactive,
		computed
	} from 'vue'

	type DeviceInfo = {
		name :string;
		state :number;
		disableState :boolean;
		disableRebootButton :boolean;
	};

	export type Config = {
		ctx :Message;
		/* deviceInfo? :Omit<DeviceInfo, 'state'>[]; */
		deviceInfo :DeviceInfo[]
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
		}
	});

	const config = reactive<DeviceInfo[]>([]);

	const deviceStateMap = new Map<number, string[]>([
		[0, ['离线', 'is-offline']],
		[1, ['在线', 'is-online']]
	]);

	const getTitleImage = computed(() => {
		return require<string>(
			`@/assets/images/${theme.value}/设备控制.png`
		);
	});

	const setDeviceStateClass = computed(() => (
		state :number
	) => {
		const targetList = deviceStateMap.get(state);
		if(! targetList) return '';

		return targetList[1];
	});

	const poweronHandler = (name :string) => {/*  */};
	const poweroffHandler = (name :string) => {/*  */};
	const rebootHandler= (name :string) => {/*  */};
</script>