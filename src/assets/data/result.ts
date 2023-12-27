import {
		Result,
		List,
		DeviceType,
		DeviceNumberType,
		DeviceInfoType
	} from "@/types";

export const Menu :Result<any> = {
	code: 1,
	message: 'success',
	data: {
		list: [
			{
				id: 1,
				name: 'menu1',
				item: null
			},
			{
				id: 2,
				name: 'menu2',
				item: null
			},
			{
				id: 3,
				name: 'menu3',
				item: null
			},
			{
				id: 4,
				name: 'menu4',
				item: null
			},
			{
				id: 5,
				name: 'menu5',
				item: null
			},
			{
				id: 6,
				name: 'menu6',
				item: null
			},
			{
				id: 7,
				name: 'menu7',
				item: null
			},
			{
				id: 8,
				name: 'menu8',
				item: null
			},
		]
	}
};

export const DeviceInfo :Result<List<DeviceInfoType>> = {
	code: 1,
	message: 'success',
	data: {
		list: [
			{
				id: 1,
				status: 'online',
				info: {
					name: '何为森',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 2,
				status: 'offline',
				info: {
					name: '森林奥秘',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 3,
				status: 'online',
				info: {
					name: '研究之道',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 4,
				status: 'offline',
				info: {
					name: '植物多样性',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 5,
				status: 'online',
				info: {
					name: '12种代表性植物',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 6,
				status: 'offline',
				info: {
					name: '林下经济',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 7,
				status: 'online',
				info: {
					name: '林与城可视化',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
			{
				id: 8,
				status: 'offline',
				info: {
					name: '林与城',
					ip: '127.0.0.1',
					mac: 'FF:FF:FF:FF:FF:FF:FF:FF'
				}
			},
		]
	}
};

export const DeviceTypes :Result<List<DeviceType>> = {
	code: 1,
	message: 'success',
	data: {
		list: [
			{
				id: 1,
				type: 'host'
			},
			{
				id: 2,
				type: 'projection'
			},
			{
				id: 3,
				type: 'screen'
			}
		]
	}
};

export const DeviceNumber :Result<List<DeviceNumberType>> = {
	code: 1,
	message: 'success',
	data: {
		list: [
			{
				id: 1,
				type: 'host',
				number: 10
			},
			{
				id: 2,
				type: 'projection',
				number: 20
			},
			{
				id: 3,
				type: 'screen',
				number: 30
			},
		]
	}
};






