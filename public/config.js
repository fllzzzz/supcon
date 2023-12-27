const config = {
	/*
		主题
			type: 
				string

			eg: 
				'green' 或者 'yellow'

			
	*/
	theme: '',
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
			name: '午潮传说',
			metadata: {
				host: '127.0.0.3:82'
			}
		}
	],
};

window._config = config;