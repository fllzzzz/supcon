export const parseMessage = (
	message? :string
) => message ? JSON.parse(decodeURIComponent(atob(message))) : undefined;

export const parseHost = (
	host :string
) => host.split(':').map((v, i) => {
	if(i === 1) return parseInt(v);
	return v;
});