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
						width: 40px;
						height: 24px;
						border-radius: 5px;
						margin-right: 60px;
						span {
							height: 11px;
							font-size: 16px;
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
						width: 72px;
						height: 72px;
						border-radius: 16px;
						margin-right: 60px;
						pointer-events: auto;
						&:last-child {
							margin-right: unset;
						}
						span {
							pointer-events: none;
							height: 22px;
							font-size: 22px;
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
						v-for="(item, index) in config?.deviceInfo"
						:key="index"
					>
						<div class="block"  v-if="isShow">
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
								@click="rebootHandler(item.name)"
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
		getDeviceStateList,
		setDeviceState
	} from '@/hooks/api';

	import {	
		ref,
		watchEffect,
		computed,
		onMounted,
		onUnmounted
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

	let loopGetStateTimer :number;
	const config = ref<Config | undefined>();
	const isShow = ref<boolean>(false);
	const specialtyHandlerMap = new Map<string, ((
		name :string,
	) => void)>([
		['大屏', name => {/*  */}],
		['透明屏', name => {/*  */}],
		['林与城大屏', name => {
			config.value?.ctx.baseHost &&
			setDeviceState(
				config.value?.ctx.baseHost,
				'BootPC',
				name
			).then(res => {
				if(res.Code !== '0' && res.Code !== '-1') throw new Error('setDeviceState => BootPC');
			});
		}],
		['林与城小屏', name => {
			config.value?.ctx.baseHost &&
			setDeviceState(
				config.value?.ctx.baseHost,
				'BootPC',
				name
			).then(res => {
				if(res.Code !== '0' && res.Code !== '-1') throw new Error('setDeviceState => BootPC');
			});
		}],
	]);

	watchEffect(() => config.value = props.config);

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

	const poweronHandler = (name :string) => {
		const specialtyHandler = specialtyHandlerMap.get(name);

		if(specialtyHandler) {
			specialtyHandler(name);
			return;
		}

		config.value?.ctx.baseHost &&
		setDeviceState(
			config.value?.ctx.baseHost,
			'BootPC',
			config.value.ctx.name
		).then(res => {
			if(res.Code !== '0' && res.Code !== '-1') throw new Error('setDeviceState => BootPC');
		});
	};
	const poweroffHandler = (name :string) => {
		const specialtyHandler = specialtyHandlerMap.get(name);

		if(specialtyHandler) {
			specialtyHandler(name);
			return;
		}
			
		config.value?.ctx.baseHost &&
		setDeviceState(
			config.value?.ctx.baseHost,
			'ShutDownPC',
			config.value.ctx.name
		).then(res => {
			if(res.Code !== '0' && res.Code !== '-1') throw new Error('setDeviceState => BootPC');
		});
	};
	const rebootHandler= (name :string) => {
		const specialtyHandler = specialtyHandlerMap.get(name);

		if(specialtyHandler) {
			specialtyHandler(name);
			return;
		}

		config.value?.ctx.baseHost &&
		setDeviceState(
			config.value?.ctx.baseHost,
			'RebootPC',
			config.value.ctx.name
		).then(res => {
			if(res.Code !== '0' && res.Code !== '-1') throw new Error('setDeviceState => BootPC');
		});
	};

	const getDevicestate = async (
		host :string,
	) => {
		return getDeviceStateList(host)
			.then(result => result.Data)
			.then((
				list :{
					Name :string;
					Status :string;
				}[]
			)=> {
				let result :typeof list[0] | undefined;

				if (
					config.value?.ctx.name === '林与城'
				) {
					for(let i = 0; i < list.length; i++) {
						if(
							list[i].Name === '林与城小屏' ||
							list[i].Name === '林与城大屏'
						) {
							result = list[i];
							break;
						}
					}

					return result;
				}

				for(let i = 0; i < list.length; i++) {
					if(list[i].Name === config.value?.ctx.name) {
						result = list[i];
						break;
					}
				}

				return result;
			}).then(dev => {
				if(! dev) return false;

				config.value?.deviceInfo.filter(
					dev => dev.disableState ? false : true
				).forEach(_dev => {
					_dev.state = dev.Status === '不在线' ? 0 : 1
				});

				return true;
			})
	};

	config.value?.ctx.baseHost &&
	getDevicestate(config.value?.ctx.baseHost).then(state => {
		if (! state) throw new Error('not find device');

		isShow.value = true;
	});

	onMounted(() => {
		loopGetStateTimer = setInterval(() => {
			config.value?.ctx.baseHost &&
			getDevicestate(config.value?.ctx.baseHost).then(state => {
				if (! state) throw new Error('not find device');
			})
		}, 5000)
	});

	onUnmounted(() => {
		clearInterval(loopGetStateTimer)
	});
</script>