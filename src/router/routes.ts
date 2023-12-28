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
				path: 'HeWeiSen',
				name: 'HeWeiSen',
				component: () => import('@/views/HomeHeWeiSen.vue'),
			},
			{
				path: 'ZhiWuDuoYangXing',
				name: 'ZhiWuDuoYangXing',
				component: () => import('@/views/HomeZhiWuDuoYangXing.vue'),
			},
		]
	},
];