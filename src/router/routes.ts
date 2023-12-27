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
/* 	{
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
				path: 'WhatIsForest/:name',
				name: 'WahtIsForest',
				component: () => import('@/components/WhatIsForest.vue'),
				meta: {
					KeepAlive: false,
				},
			},
			{
				path: 'plant-diversity/:name',
				name: 'plantDiversity',
				component: () => import('@/components/PlantDiversity.vue'),
				meta: {
					KeepAlive: false,
				},
			},
			{
				path: 'plant-delegate/:name',
				name: 'palntDelegate',
				component: () => import('@/components/PlantDelegate.vue'),
				meta: {
					KeepAlive: false,
				},
			},
			{
				path: 'forset-and-city/:name',
				name: 'palntAndCity',
				component: () => import('@/components/ForsetAndCity.vue'),
				meta: {
					KeepAlive: false,
				},
			}
		]
	}, */
];