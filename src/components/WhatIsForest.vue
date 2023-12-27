<style lang="scss" scoped>
	#WhatIsForest {
		width: 100%;
		height: 100%;
		#box1 {
			width: 1654px;
			height: 222px;
			background-image: url('@/assets/images/home/content/box-background.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			padding: 21px;
			box-sizing: border-box;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			align-items: flex-start;
			#block {
				width: 137px;
				height: 22px;
				margin-top: 22px;
				margin-left: 21px;
				background-image: url('@/assets/images/home/content/deviceContor.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
			.row {
				width: 100%;
				flex: 0 0 85px;
				margin-left: 54px;
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-items: flex-start;
				.inline-row {
					width: 96.8%;
					height: 32px;
					display: flex;
					flex-flow: row wrap;
					justify-content: flex-start;
					align-items: center;
					#col1 {
						width: 34px;
						height: 17px;
						margin-right: 10px;
						line-height: 14.5px;
						span {
							font-size: 16px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
					#col2 {
						width: 31px;
						height: 18px;
						margin-right: 15px;
						line-height: 14.5px;
					}
					#col3, #col4 {
						width: 65px;
						height: 32px;
						margin-right: 16px;
					}
					#col3 {
						line-height: 26px;
						:deep(.el-switch){
							width: 100%;
							height: 100%;
							--el-switch-on-color: #05E8A0;
							.el-switch__core {
								width: 100%;
								height: 100%;
								box-shadow: 0px 0px 18px 0px rgba(0,15,36,0.52);
								border-radius: 16px;
								.el-switch__action {
									width: 26px;
									height: 26px;
									box-shadow: 0px 0px 8px 0px rgba(0,58,58,0.66);
									border-radius: 50%;
								}
							}
						}
						:deep(.el-switch.is-checked){
							.el-switch__core {
								.el-switch__action{
									left: calc(100% - 1.4vw);
								}
							}
						}
					}
					#col4 {
						background: rgba(0,188,124,0.2);
						border: 1px solid #05E49E;
						box-shadow: 0px 0px 9px 0px rgba(0,26,51,0.29);
						border-radius: 16px;
						line-height: 31px;
						text-align: center;
						span {
							font-size: 18px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
				}
				.is-online {
					#col2 {
						background: #05E8A0;
					}
					#col2::before{
						content: '在线';
						font-size: 12px;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
				.is-offline {
					#col2 {
						background: #FD3232;
					}
					#col2::before{
						content: '离线';
						font-size: 12px;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="container" id="WhatIsForest">
		<div class="box" id="box1">
			<div id="block"></div>
			<div class="row">
				<div class="inline-row" :class="globalReactive.inlineRowstyle">
					<div class="col" id="col1">
						<span class="title">主机</span>
					</div>
					<div class="col" id="col2"></div>
					<div class="col" id="col3">
						<el-switch 
							v-model="globalReactive.bootState"
							@change="bootStateChangeHandler" >
						</el-switch>
					</div>
					<div class="col" id="col4" @click="rebootSingleHandler">
						<span class="title">重启</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import {
		DeviceInfo
	} from '@/assets/data/result';

	import {
		DeviceInfoType
	} from '@/types';

	import { ref,watch,inject } from 'vue'
	import { useRoute } from 'vue-router';

	import { HttpKey } from '@/symbols';

	const route = useRoute();
	const $http = inject(HttpKey);

	const globalReactive = ref({
		bootState: ref<boolean>(),
		inlineRowstyle :ref({
			'is-online': ref<boolean>(),
			'is-offline': ref<boolean>(),
		}),
		timer : ref({
			t1: 0,
		}),
		u: ref<any[]>()
	});

	watch(() => route.params.name,() => {
		clearInterval(globalReactive.value.timer.t1);
		getBootState().then((result) => {
			setBootState(result!.data.Data);
		});
		globalReactive.value.timer.t1 = setInterval(() => {
			getBootState().then((result) => {
				setBootState(result!.data.Data);
			});
		},5000)
	});

	const getBootState = async () => {
		/* return await Promise.resolve(DeviceInfo); */
		return await $http?.get('http://192.168.1.236:19010/',{
			Act: 'GetStatus' 
		});
	};

	getBootState().then((result) => {
		setBootState(result!.data.Data);
	});
	globalReactive.value.timer.t1 = setInterval(() => {
		getBootState().then((result) => {
			setBootState(result!.data.Data);
		});
	},5000)

	const setBootState = (list :any) => {
		globalReactive.value.u = list.filter((item :any) => {
			return item.Name === route.params.name;
		});
		if(globalReactive.value.u!.length === 0) console.log('find failed');
		switch(globalReactive.value.u![0].Status){
			case '在线':
				globalReactive.value.bootState = true;
				break;
			case '离线':
				globalReactive.value.bootState = false;
				break;
			default:
				globalReactive.value.bootState = false;
				break;
		}
		globalReactive.value.inlineRowstyle['is-online'] = globalReactive.value.bootState;
		globalReactive.value.inlineRowstyle['is-offline'] = ! globalReactive.value.bootState;
	};

	const bootStateChangeHandler = (val: boolean | string | number) :void => {
		if(val){
			setRemoteBootState('boot');
		}else {
			setRemoteBootState('poweroff');
		}
		globalReactive.value.inlineRowstyle['is-online'] = val as boolean;
		globalReactive.value.inlineRowstyle['is-offline'] = ! val as boolean;
	};

	const setRemoteBootState = async (state :string) => {
		switch(state) {
			case 'boot':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'BootPC',
					PCName: globalReactive.value.u![0].Name!
				});
			case 'poweroff':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'ShutDownPC',
					PCName: globalReactive.value.u![0].Name!
				});
			case 'reboot':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'RebootPC',
					PCName: globalReactive.value.u![0].Name!
				});
			case 'all-boot':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'BootPC',
					PCName: 'ALL'
				});
			case 'all-poweroff':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'ShutDownPC',
					PCName: 'ALL'
				});
		}
	};

	const rebootSingleHandler = () => {
		setRemoteBootState('reboot');
	};
</script>