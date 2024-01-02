<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	#homeView {
		@include T.themeify {
			background-image: url('@/assets/images/#{T.get(id)}/home/background.png');

			:deep(.el-container){
				.el-header {
					background-image: T.get(home-header-bg-image-path);
					#col1 {
						background-image: url('@/assets/images/#{T.get(id)}/logo.png');
					}
					#col2 {
						#right {
							.col {
								background: T.get(home-header-button-bg-color);
								border: 1px solid #{T.get(home-header-button-border-color)};
								box-shadow: 0px 0px 18px 0px #{T.get(home-header-button-box-shadow-color)};
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
						margin-right: 30px;
					}
					#right {
						height: 32px;
						span {
							line-height: 1;
						}
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						pointer-events: none;
						.col {
							pointer-events: auto;
							& > * {
								pointer-events: none;
							}
							display: flex;
							justify-content: center;
							align-items: center;
							width: 72px;
							height: 72px;
							box-shadow: 0px 0px 18px 0px rgba(0,15,36,0.52);
							border-radius: 16px;
							margin-right: 60px;
							span {
								height: 22px;
								font-size: 22px;
								font-family: Source Han Sans CN;
								font-weight: 400;
								color: #FFFFFF;
								text-shadow: 0px 0px 4px rgba(36,91,72,0.9);
							}
						}
					}
				}
				#col3 {
					height: 18px;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-between;
					align-items: center;
					.box {
						margin-left: 50px;
						height: 18px;
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-between;
						align-items: center;
						pointer-events: auto;
						& > * {
							pointer-events: none;
						}
						span {
							margin-left: 10px;
							font-size: 22px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #EEEEEE;
							line-height: 1;
						}
					}
/* 					#box1 {
						width: 86px;
					}
					#box2 {
						width: 72px;
					}
					#box3 {
						width: 72px;
					} */
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
						height: 90px;
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
					<div class="box" id="right"
						@click="deviceController"
					>
						<div class="col" tabindex="1"><span>ON</span></div>
						<div class="col" tabindex="0"><span>OFF</span></div>
					</div>
				</div>
				<div class="col" id="col3" @click="headerOptionsHandler">
					<div class="box" id="box1">
						<img src="@/assets/images/connectState.png">
						<span class="title">已连接</span>
					</div>
					<div class="box" id="box2">
						<img src="@/assets/images/logger.png">
						<span class="title">日志</span>
					</div>
					<div class="box" id="box3" route="/">
						<img src="@/assets/images/exit.png">
						<span class="title">退出</span>
					</div>
				</div>
			</el-header>
			<el-container>
				<el-aside>
					<el-menu
						:default-active="getCurrentMenuIndex"
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
		RouteLocationRaw,
		RouteParams,
	} from 'vue-router';

	import _window from '@/store/window';
	import boot from '@/store/home';

	import {
		setDeviceState
	} from '@/hooks/api';

	import {
		useRouter,
		useRoute
	} from 'vue-router';

	import {
		ref,
		computed,
		onMounted,
		onUnmounted
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

	let _selfHost :string;
	const router = useRouter();
	const route = useRoute();
	const config = ref<Config | undefined>();
	const clickItemIndex = ref<number | undefined>();
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
					name: 'SenLinAoMi'
				},
			},
			{
				name: '研究之道',
				route: {
					name: 'YanJiuZhiDao'
				},
			},
			{
				name: '植物多样性保护',
				route: {
					name: 'ZhiWuDuoYangXing'
				},
			},
			{
				name: '12种代表性植物',
				route: {
					name: '12ZhongDaiBiaoZhiWu'
				},
			},
			{
				name: '林下经济',
				route: {
					name: 'LinXiaJingJi'
				},
			},
			{
				name: '林与城可视化',
				route: {
					name: 'LinYuChengKeShiHua'
				},
			},
			{
				name: '林与城',
				route: {
					name: 'LinYuCheng'
				},
			}	
		]],
		['yellow', [
			{
				name: '午潮传说',
				route: {
					name: 'WuChaoChuanShuo'
				},
			},
			{
				name: '午潮惨案',
				route: {
					name: 'WuChaoCanAn'
				},
			},
			{
				name: '数字午潮',
				route: {
					name: 'ShuZiWuChao'
				},
			},
			{
				name: '午潮旅游',
				route: {
					name: 'WuChaoLuYou'
				},
			},
		]],
	]);

	const getCurrentMenuIndex = computed(() => {
		if(! config.value?.asideOptions) return 0;

		const target = config.value.asideOptions.findIndex(
			opt => opt.route.name === route.name ? true : false
		);

		if(target === -1) return clickItemIndex.value ? clickItemIndex.value : 0;

		return target;
	});

	const headerOptionsHandler = (event :MouseEvent) => {
		const path = (event.target as HTMLElement).getAttribute('route');

		path && router.push({path});
	};

	const deviceController = (event :MouseEvent) => {
		if((event.target as HTMLElement).tabIndex === 0) {
			setDeviceState(_selfHost, 'ShutDownPC');
			return;
		}

		if((event.target as HTMLElement).tabIndex === 1) {
			setDeviceState(_selfHost, 'BootPC');
			return;
		}
	}

	const menuItemClickHandler = (data :AsideOptions) => {
		clickItemIndex.value = config.value?.asideOptions?.findIndex(
			opt => opt.name === data.name
		);

		router.push({
			path: routePathCreater(data)
		});
	};

	const routePathCreater = (data :AsideOptions) => {
		if (data.route.name === '#') return '/home';

		if(
			! data.route.params ||
			(data.route.params && Object.keys(data.route.params).length === 0)
		) return `/home/${data.route.name}`;

		return `/home/${data.route.name}/${btoa(
			encodeURIComponent(JSON.stringify({
				name: data.name, ...data.route.params
			}))
		)}`;
	};

	const configCreater = (
		theme :string,
	) :Config | undefined => {
		const config :Config = {};

		const target = itemListMap.get(theme)
		if(! target) return undefined;

		config.asideOptions = target.map(item => {
			const _u = _window._config?.itemOptions.find(
				opt => opt.name === item.name ? true : false
			)?.metadata.host;

			const _v = _window._config?.baseHost;

			if(_u) {
				item.route.params = {
					host: _u, ...item.route.params 
				};
			}
			
			if(_v) {
				item.route.params = {
					baseHost: _v, ...item.route.params 
				};
			}

			return item;
		});

		return config;
	};

	const getHostAddress = () => {
		const _u = _window._config?.itemOptions.find(
			opt => opt.name === 'home'
		)?.metadata.host;

		const _v = _window._config?.baseHost;

		const resutl = _u ? _u : _v ?_v.length > 0 ? _v : undefined : undefined;

		if(! resutl) throw new Error('@home => baseHost is undefined');
		return resutl;
	};

	onMounted(() => {
		const theme = document.documentElement.getAttribute('data-theme');

		if(! theme) throw new Error('@home => data-theme is undefined');

		config.value = configCreater(theme);

		if(config.value?.asideOptions && boot.value) {
			boot.value = true;
			router.replace({
				path: routePathCreater(config.value.asideOptions[0])
			})
		}

		_selfHost = getHostAddress();
	});
</script>