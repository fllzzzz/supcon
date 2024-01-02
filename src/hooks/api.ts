const mediaControllerdirectiveMap = new Map<string, string>([
	['播放', 'play'],
	['暂停', 'pause'],
	['重播', 'replay'],
	['静音', 'mute'],
	['加音', 'add'],
	['减音', 'reduce'],
	['有声', 'unmute'],
	['待机', 'idle'],
	['正片', 'start'],
	['伯乐树', 'bole'],
	['银缕梅', 'yinlv'],
	['天目铁木', 'tianmu'],
	['红豆杉', 'hongdou'],
	['水杉', 'shuishan'],
	['枫香树', 'fengxiang'],
	['乌桕', 'wujiu'],
	['榉树', 'jushu'],
	['银杏', 'yinxing'],
	['紫薇', 'ziwei'],
	['樱花', 'yinghua'],
	['杜鹃', 'dujuan'],
]);

export const getDeviceStateList = async (
	host: string,
) => {
	return await fetch(`
		http://${host}/?Act=GetStatus
	`).then(res => res.json());
};

export const setDeviceState = async (
	host: string,
	state :'BootPC' | 'ShutDownPC' | 'RebootPC',
	device? :string
) => {
	return await fetch(`
		http://${host}/?
		Act=${state}&
		PCName=${device ? device : 'ALL'}
	`).then(res => res.json());
};

export const mediaController = async (
	host: string,
	directives :string
) => {
	let _directives :string;

	const target = mediaControllerdirectiveMap.get(directives);

	if(! target) throw new Error('then mediaController directive is undefined');

	if(directives === '加音' || directives === '减音') {
		_directives = `${target}${Math.random() * 10}`;
	}else {
		_directives = target
	}

	return await fetch(
		`
			http://${host}/?
			Act=SetGameState&
			State=${_directives}
		`
	).then(res => res.json());
};