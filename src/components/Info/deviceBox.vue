<style lang="scss" scoped>
	#deviceBox {
		width: 100%;
		height: 100%;
		background: #0C3025;
		border: 1px solid #00F2A5;
		opacity: 0.95;
		border-radius: 10px;
		padding: 31px 0 68px 0;
		flex-flow: column nowrap;
		justify-content: space-between;
		#top {
			margin: 0 94px 0 80px;
			width: 203px;
			height: 24px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			#left {
				width: 93px;
				height: 24px;
				line-height: 24px;
				#introTitle {
					font-size: 23px;
					font-family: Alibaba PuHuiTi;
					font-weight: 500;
					color: #FFFFFF;
				}
			}
			#right {
				line-height: 20px;
				width: 42px;
				height: 20px;
				#introTitle {
					font-size: 20px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
		#middle {
			width: 137px;
			height: 105px;
			margin: 0 104px 0 125px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			.row {
				width: 96%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				#col1 {
					width: 39px;
					height: 20px;
					line-height: 20px;
					#introTitle {
						font-size: 19px;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
				#col2 {
					width: 22px;
					height: 22px;
					line-height: 22px;
					img {
						width: 100%;
						object-fit: contain;
					}
				}
				#col3 {
					width: 18px;
					height: 20px;
					line-height: 20px;
					#introTitle {
						font-size: 20px;
						font-family: Alibaba PuHuiTi;
						font-weight: 400;
						color: #FFFFFF;
					}
				}
			}
		}
		#split {
			width: 315px;
			height: 1px;
			margin: 0 24px 0 35px;
			border: 1px solid;
			border-image: linear-gradient(0deg, #0C2F24, #00FFC6, #0C2F24) 10 10;
			background: linear-gradient(90deg, #0C2F24 1%, #00FFC6 52%, #0C2F24 100%);
		}
		#footer {
			width: 100%;
			height: 360px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			align-items: center;
			.row {
				width: 100%;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				#col1, #col2 {
					height: 19px;
					flex-basis: 46%;
				}
				#col1 {
					display: flex;
					flex-flow: row nowrap;
					justify-content: flex-end;
					align-items: center;
					#introTitle {
					font-size: 20px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
					}
				}
				#col2 {
					img {
						width: 20px;
						height: 100%;
						object-fit: contain;
						margin-right: 8px;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="container" id="deviceBox">
		<div class="box" id="top">
			<div class="box" id="left">
				<span class="title" id="introTitle">
					设备数量
				</span>
			</div>
			<div class="box" id="right">
				<span class="title" id="introTitle">
					{{ jxValue1.length }}
				</span>
			</div>
		</div>
		<div class="box" id="middle">
			<template v-for="index in globalReactive.deviceTypes.length" :key="index">
				<div class="row" :id="'row' + index">
					<div class="col" id="col1">
						<span class="title" id="introTitle">{{ getDeviceType(globalReactive.deviceTypes[index - 1].type) }}</span>
					</div>
					<div class="col" id="col2">
						<img :src="getDeviceIcon(globalReactive.deviceTypes[index - 1].type)" alt="info-icon">
					</div>
					<div class="col" id="col3">
						<span class="title" id="introTitle">
							{{ jxValue1.length }}
						</span>
					</div>
				</div>
			</template>
		</div>
		<div class="box" id="split"></div>
		<div class="box" id="footer">
			<template v-for="index in globalReactive.deviceInfo.length" :key="index">
				<div class="row" :id="'row' + index">
					<div class="col" id="col1">
						<span class="title" id="introTitle">
							{{ globalReactive.deviceInfo[ index -1 ].info.name }}
						</span>
					</div>
					<div class="col" id="col2">
						<img src="@/assets/images/info/host.png">
						<img src="@/assets/images/info/host.png">
						<img src="@/assets/images/info/host.png">
						<img src="@/assets/images/info/host.png">
						<img src="@/assets/images/info/host.png">
					</div>
				</div>
			</template>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { 
		DeviceTypes,
		DeviceNumber,
		DeviceInfo,
	} from '@/assets/data/result';

	import {
		globalReactiveType,
		globalStaticType
	} from '@/types';

	import {
		HttpKey
	} from '@/symbols';

	import {
		ref,
		computed,
		inject
	} from 'vue';

	const $http = inject(HttpKey);

	const globalStatic :globalStaticType = {};
	const globalReactive = ref<globalReactiveType>({
		deviceTypes: [], 
		deviceIconBinds: [],
		deviceNumber: [],
		deviceInfo: [],
	});

	Promise.resolve(DeviceTypes).then( result => {
		globalReactive.value.deviceTypes = result.data.list;
		deviceIconBinder();
	})

	Promise.resolve(DeviceNumber).then( result => {
		globalReactive.value.deviceNumber = result.data.list;
	})

	Promise.resolve(DeviceInfo).then( result => {
		globalReactive.value.deviceInfo = result.data.list;
	})

	const getDeviceType = computed(() =>{
		return (type :string) :string | undefined => {
			switch(type){
				case 'host': return '主机';
				case 'projection': return '投影';
				case 'screen': return '大屏';
			}
		}
	});

	const getDeviceIcon = computed(() => {
		let u :string;
		return (type :string) :string => {
			globalReactive.value.deviceIconBinds.forEach((item) => {
				if(item.type === type) u = item.icon
			});
			return u;
		};
	});

	const deviceIconBinder = () => {
		globalReactive.value.deviceTypes.forEach((item) => {
			switch(item.type){
				case 'host':
					globalReactive.value.deviceIconBinds.push({
						type: item.type,
						icon: require('@/assets/images/info/host.png')
					});
					break;
				case 'projection':
					globalReactive.value.deviceIconBinds.push({
						type: item.type,
						icon: require('@/assets/images/info/projection.png')
					});
					break;
				case 'screen':
					globalReactive.value.deviceIconBinds.push({
						type: item.type,
						icon: require('@/assets/images/info/screen.png')
					});
					break;
			}
		});
	};

	const getDeviceNumber = computed(() => {
		let u :number;
		return (type :string) :number => {
			globalReactive.value.deviceNumber.forEach((item) => {
				if(item.type === type) u = item.number
			});

			return u;
		};
	});

	const getTotalDeviceNumber = () => {
		let u = 0;
		globalReactive.value.deviceNumber.forEach((item) => {
			u = u + item.number;
		});
		return u;
	};

	const getBootState = async () => {
		/* return await Promise.resolve(DeviceInfo); */
		return await $http?.get('http://192.168.1.236:19010/',{
			Act: 'GetStatus' 
		});
	};

	const jxValue1 = ref();

	getBootState().then((result) => {
		jxValue1.value = result.data.Data;
	});
</script>