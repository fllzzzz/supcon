<style lang="scss" scoped>
	.card-device-controller {
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
						background: rgba(0,188,124,0.2);
						border: 1px solid #05E49E;
						box-shadow: 0px 0px 18px 0px rgba(0,15,36,0.52);
						border-radius: 16px;
						margin-right: 16px;
						&:last-child {
							margin-right: unset;
						}
						span {
							height: 15px;
							font-size: 18px;
							font-family: Source Han Sans CN;
							font-weight: 400;
							color: #FFFFFF;
							text-shadow: 0px 0px 4px rgba(36,91,72,0.9);
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
					<img src="@/assets/images/green/home/content/deviceContor.png">
				</template>
				<template #main>
					<template
						v-for="(item, index) in props.config.deviceInfo"
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
							<div class="col button">
								<span>ON</span>
							</div>
							<div class="col button">
								<span>OFF</span>
							</div>
							<div class="col button"
								v-if="! item.disableRebootButton"
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
	import Appcard from './Appcard.vue';

	import type {
		PropType
	} from 'vue';

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
		deviceInfo :DeviceInfo[];
	};

	const props = defineProps({
		config: {
			type: Object as PropType<Config>,
			default: () :Config => ({
				deviceInfo: [
					{
						name: '主机',
						state: 0,
						disableState: false,
						disableRebootButton: false
					}
				]
			})
		}
	});

	const setDeviceStateClass = computed(() => (
		state :number
	) => {
		const targetList = deviceStateMap.get(state);
		if(! targetList) return '';

		return targetList[1];
	});

	const deviceStateMap = new Map<number, string[]>([
		[0, ['离线', 'is-offline']],
		[1, ['在线', 'is-online']]
	]);
</script>