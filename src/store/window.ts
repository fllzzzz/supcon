import type {
	AppOptions
} from '@/types';

type _Window = {
	_config :AppOptions
} & Window;

const _window :Partial<_Window> = window;

export default _window;