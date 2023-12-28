export const getDeviceStateList = async (
	host: string,
) => {
	return await fetch(`
		http://${host}/?Act=GetStatus
	`).then(res => res.json());
};

export const setDeviceState = async (
	host: string,
	state :'BootPC' | 'ShutDownPC',
	device? :string
) => {
	return await fetch(`
		http://${host}/?
		Act=${state}&
		PCName=${device ? device : 'ALL'}
	`).then(res => res.json());
};