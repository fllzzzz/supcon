const config = {
	/*
		主题
			type: 
				string

			eg: 
				'green' 或者 'yellow'

			
	*/
	theme: 'green',
	baseHost: '192.168.1.236:19010',  //ip:port
	specialtyController : {
		screen: '',
		transparentlyScreen: '',
	},
	/* 
		各子项的配置, name为子项名称, metadata为各子项的数据, host格式为ip:port 
			type: 
				{
					name :string;
					metadata :{
						host :string;
					};
				}[]

			eg:
				[
					{
						name: '何为森',
						metadata: {
							host: '127.0.0.1:80'
						}
					},
					{
						name: '森林奥秘',
						metadata: {
							host: '127.0.0.2:81'
						}
					},
					{
						name: '研究之道',
						metadata: {
							host: '127.0.0.3:82'
						}
					},
				]

	*/
	itemOptions: [
		{
			name: '植物多样性保护',
			metadata: {
				host: '192.168.1.95:19010'
			}
		},
		{
			name: '12种代表性植物',
			metadata: {
				host: '192.168.1.95:19010'
			}
		},
		{
			name: '林与城',
			metadata: {
				host: '192.168.1.95:19010'
			}
		},
		{
			name: '午潮传说',
			metadata: {
				host: '192.168.1.95:19010'
			}
		},
		{
			name: '数字午潮',
			metadata: {
				host: '192.168.1.95:19010'
			}
		}
	],
};

window._config = config;