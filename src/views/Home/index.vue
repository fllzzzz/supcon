<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	#homeView {
		@include T.themeify {
			background-image: url('@/assets/images/#{T.get(id)}/home/background.png');

			:deep(.el-container){
				.el-header {
					#col1 {
						background-image: url('@/assets/images/#{T.get(id)}/logo.png');
					}

					#col2 {
						#right {
							.el-switch {
								.el-switch__core {
									--el-switch-on-color: #{T.get(home-header-switch-on-color)};
								}
							}
						}
					}
				}

				.el-aside {
					background-image: url('@/assets/images/#{T.get(id)}/home/aside/background.png');
				
					.el-menu-item {
						&.is-active {
							background: T.get(home-aside-item-active-bg-color);
							&::after {
								background: T.get(home-aside-item-active-after-color);
							}
							&::before {
								background: T.get(home-aside-item-active-befor-color);
							}
						}
						&:hover {
							background: T.get(home-aside-item-hover-bg-color);
						}
					}
				}
			}
		}
		
		width: 100vw;
		height: 100vh;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		:deep(.el-container){
			.el-header {
				width: 1920px;
				height: 110px;
				background-image: url('@/assets/images/green/home/header/background.png');
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
						&.is-active {
							&::after {
								content: '';
								display: block;
								position: absolute;
								bottom: 0;
								right: 0;
								width: 7px;
								height: 45px;
							}
							&::before {
								content: '';
								display: block;
								position: absolute;
								bottom: 0;
								right: 10px;
								width: 7px;
								height: 22px;
							}
						}
					}
				}
			}
			.el-main {
				display: flex;
				overflow: hidden;
				flex-flow: column nowrap;
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
						<el-switch v-model="deviceControState" @change="deviceController"></el-switch>
					</div>
				</div>
				<div class="col" id="col3">
					<div class="box" id="box1">
						<img src="@/assets/images/connectState.png">
						<span class="title">已连接</span>
					</div>
					<div class="box" id="box2">
						<img src="@/assets/images/logger.png">
						<span class="title">日志</span>
					</div>
					<div class="box" id="box3">
						<img src="@/assets/images/exit.png">
						<span class="title">退出</span>
					</div>
				</div>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu
					>
						<template v-for="(item, index) in config?.asideOptions" 
							:key="index"
						>
							<el-menu-item 
								:index="index"
								@click="menuItemClickHandler(item)"
							>
								<img src="@/assets/images/icon1.png">
								<span class="title">
									{{ item.name }}
								</span>
							</el-menu-item>
						</template>
					</el-menu>
				</el-aside>
				<el-main>
					<RouterView v-slot="{ Component }">
						<component :is="Component"></component>
					</RouterView>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script setup lang="ts">
	import type {
		PropType
	} from 'vue';

	import type {
		RouteLocationRaw,
		RouteParams,
	} from 'vue-router';

	import _window from '@/store/window';

	import {
		useRouter
	} from 'vue-router';

	import {
		ref,
		onMounted
	} from 'vue';

	type AsideOptions = {
		name :string;
		route :RouteLocationRaw & {
			name? :string;
			params? :RouteParams;
		};
	};

	type Config = {
		asideOptions? :AsideOptions[];
	};

	const router = useRouter();
	const deviceControState = ref(false);
	const config = ref<Config | undefined>();
	const itemListMap = new Map<string, AsideOptions[]>([
		['green', [
			{
				name: '何为森',
				route: {
					name: 'HeWeiSen'
				},
			},
			{
				name: '森林奥秘',
				route: {
					name: '#'
				},
			},
			{
				name: '研究之道',
				route: {
					name: '#'
				},
			},
			{
				name: '植物多样性',
				route: {
					name: 'ZhiWuDuoYangXing'
				},
			},
			{
				name: '12种代表性植物',
				route: {
					name: '#'
				},
			},
			{
				name: '林下经济',
				route: {
					name: '#'
				},
			},
			{
				name: '林与城可视化',
				route: {
					name: '#'
				},
			},
			{
				name: '林与城',
				route: {
					name: '#'
				},
			}	
		]],
		['yellow', [
			{
				name: '午潮传说',
				route: {
					name: '#'
				},
			},
			{
				name: '午潮惨案',
				route: {
					name: '#'
				},
			},
			{
				name: '数字午潮',
				route: {
					name: '#'
				},
			},
			{
				name: '午潮旅游',
				route: {
					name: '#'
				},
			}
		]],
	]);

	const deviceController = (value :unknown) => {/*  */}
	const menuItemClickHandler = (data :AsideOptions) => {
		router.push({
			name: data.route.name
		});
	};

	const configCreater = (
		theme :string,
	) :Config | undefined => {
		const config :Config = {};

		const target = itemListMap.get(theme)
		if(! target) return undefined;

		config.asideOptions = target.map(item => {
			Object.assign(item.route,_window._config?.itemOptions.find(
				opt => opt.name === item.name ? true : false
			)?.metadata);

			return item;
		});

		return config;
	};


	onMounted(() => {
		const theme = document.documentElement.getAttribute('data-theme');

		if(! theme) throw new Error('@home => data-theme is undefined');

		config.value = configCreater(theme);
	});
</script>