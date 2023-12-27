<style lang="scss" scoped>
	#homeView {
		width: 100vw;
		height: 100vh;
		background-image: url('@/assets/images/home/background.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		:deep(.el-container){
			.el-header {
				width: 1920px;
				height: 110px;
				background-image: url('@/assets/images/home/header/background.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
				padding: 0 20px 0 30px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				#col1 {
					width: 449px;
					height: 49px;
					background-image: url('@/assets/images/home/header/logo.png');
					background-size: contain;
					background-repeat: no-repeat;
				}
				#col2 {
					width: 175px;
					height: 32px;
					line-height: 32px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
					#left {
						span {
							font-size: 20px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #FFFFFF;
						}
					}
					#right {
						width: 65px;
						height: 32px;
						line-height: 32px;
						.el-switch {
							width: 100%;
							height: 100%;
							.el-switch__core {
								width: 100%;
								height: 100%;
								--el-switch-on-color: #05E8A0;
								box-shadow: 0px 0px 18px 0px rgba(0,15,36,0.8);
								border-radius: 16px;
								.el-switch__action {
									width: 26px;
									height: 26px;
									background: #FFFFFF;
									box-shadow: 0px 0px 8px 0px rgba(0,58,58,0.66);
									border-radius: 50%;
								}
							}
						}
						.el-switch.is-checked .el-switch__core .el-switch__action{
								left: calc(100% - 1.35vw);
						}
					}
				}
				#col3 {
					width: 250px;
					height: 18px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
					.box {
						height: 18px;
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						span {
							font-size: 16px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #EEEEEE;
						}
					}
					#box1 {
						width: 76px;
					}
					#box2 {
						width: 62px;
					}
					#box3 {
						width: 62px;
					}
				}
			}
			.el-aside {
				width: 264px;
				background-image: url('@/assets/images/home/aside/background.png');
				background-size: 100% 100%;
				background-repeat: no-repeat;
				border: none;
				.el-menu--vertical {
					border: none;
				}
				.el-menu {
					background-color: transparent;
					.el-menu-item {
						position: relative;
						height: 70px;
						img {
							width: 21px;
							height: 19px;
							object-fit: contain;
							margin-right: 11px;
						}
						span {
							font-size: 24px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #EEEEEE;
						}
					}
					.is-active {
						background: linear-gradient(90deg, #109967 0%, #1FCF97 100%);
						::after {
							content: '';
							display: block;
							position: absolute;
							bottom: 0;
							right: 0;
							width: 7px;
							height: 45px;
							background: linear-gradient(0deg, #1EE9A8 0%, #109968 100%);
						}
						::before {
							content: '';
							display: block;
							position: absolute;
							bottom: 0;
							right: 10px;
							width: 7px;
							height: 22px;
							background: linear-gradient(0deg, #1EE9A8 0%, #109968 100%);
						}
					}
					:hover {
						background: linear-gradient(90deg, #109967 0%, #1FCF97 100%);
					}
				}
			}
			.el-main {
				padding: 17px 16px 0 16px;
			}
		}
	}
</style>

<template>
	<div class="container" id="homeView">
		<el-container>
			<el-header>
				<div class="col" id="col1"></div>
				<div class="col" id="col2">
					<div class="box" id="left">
						<span class="title">设备总控</span>
					</div>
					<div class="box" id="right">
						<el-switch v-model="globalReactive.deviceContor" @change="deviceControHandler"></el-switch>
					</div>
				</div>
				<div class="col" id="col3">
					<div class="box" id="box1">
						<img src="@/assets/images/home/header/connectState.png">
						<span class="title">已连接</span>
					</div>
					<div class="box" id="box2">
						<img src="@/assets/images/home/header/logger.png">
						<span class="title">日志</span>
					</div>
					<div class="box" id="box3">
						<img src="@/assets/images/home/header/exit.png">
						<span class="title">退出</span>
					</div>
				</div>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu>
						<template v-for="index in globalReactive.deviceInfos?.length" :key="index">
							<el-menu-item 
								:index="index.toString()"
								@click="menuItemClickHandler" 
								:route="{
									name: 'login'
								}" >
								<img src="@/assets/images/home/header/icon1.png">
								<span class="title">
									{{ globalReactive.jxValue1![ index - 1].Name }}
								</span>
							</el-menu-item>
						</template>
					</el-menu>
				</el-aside>
				<el-main>
					<RouterView v-slot="{ Component, route }">
						<keep-alive>
							<component v-if="route.meta.KeepAlive && route.params.name" :is="Component"></component>
						</keep-alive>
						<component v-if="! route.meta.KeepAlive && route.params.name" :is="Component"></component>
					</RouterView>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import {
		DeviceInfoType
	} from '@/types';

	import {
		DeviceInfo
	} from '@/assets/data/result';

	import {
		HttpKey
	} from '@/symbols';

	import { ref,inject } from 'vue';
	import { useRouter } from 'vue-router';

	const $http = inject(HttpKey);
	const router = useRouter();

	const globalReactive = ref({
		deviceContor: ref<boolean>(true),
		deviceInfos: ref<DeviceInfoType[]>(),
		jxValue1: ref<any[]>()
	});

	Promise.resolve(DeviceInfo).then((result) => {
		globalReactive.value.deviceInfos = result.data.list;
	});
	
	const menuItemClickHandler = (evt :any) => {
		const u = parseInt(evt.index)
		const path = globalReactive.value.jxValue1![ u - 1 ].Name;
		router.push({
			path: `/home/WhatIsForest/${path}`
		});
	};

	const getBootState = async () => {
		return await $http?.get('http://192.168.1.236:19010/',{
			Act: 'GetStatus' 
		});
	};

	getBootState().then((result) => {
		globalReactive.value.jxValue1! = result?.data.Data;
	});

	const deviceControHandler = (val :any) => {
		if(val){
			setRemoteBootState('boot');
		}else {
			setRemoteBootState('poweroff');
		}
	}

	const setRemoteBootState = async (state :string) => {
		switch(state) {
			case 'boot':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'BootPC',
					PCName: 'ALL'
				});
			case 'poweroff':
				return await $http?.get('http://192.168.1.236:19010/',{
					Act: 'ShutDownPC',
					PCName: 'ALL'
				});
		}
	};
</script>