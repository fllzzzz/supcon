export default [
	{
		path: '/tester',
		name: 'tester',
		component: () => import('@/views/Tester/index.vue'),
		meta: {
			KeepAlive: false,
		}
	},
	{
		path: '/',
		name: 'login',
		component: () => import('@/views/Login/index.vue'),
		meta: {
			KeepAlive: false,
		}
	},
	{
		path: '/info',
		name: 'info',
		component: () => import('@/views/Info/index.vue'),
		meta: {
			KeepAlive: false,
		}
	},
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/Home/index.vue'),
		meta: {
			KeepAlive: false,
		},
		children: [
			{
				path: '#',
				name: '#',
				component: () => import('@/views/AppEmpty.vue'),
			},
			{
				path: 'HeWeiSen/:message?',
				name: 'HeWeiSen',
				props: true,
				component: () => import('@/views/HomeHeWeiSen.vue'),
			},
			{
				path: 'ZhiWuDuoYangXing/:message?',
				name: 'ZhiWuDuoYangXing',
				props: true,
				component: () => import('@/views/HomeZhiWuDuoYangXing.vue'),
			},
			{
				path: '12ZhongDaiBiaoZhiWu/:message?',
				name: '12ZhongDaiBiaoZhiWu',
				props: true,
				component: () => import('@/views/Home12ZhongDaiBiaoZhiWu.vue'),
			},
			{
				path: 'LinYuCheng/:message?',
				name: 'LinYuCheng',
				props: true,
				component: () => import('@/views/HomeLinYuCheng.vue'),
			},
			{
				path: 'WuChaoChuanShuo/:message?',
				name: 'WuChaoChuanShuo',
				props: true,
				component: () => import('@/views/HomeWuChaoChuanShuo.vue'),
			},
			{
				path: 'WuChaoCanAn/:message?',
				name: 'WuChaoCanAn',
				props: true,
				component: () => import('@/views/HomeWuChaoCanAn.vue'),
			},
		]
	},
];