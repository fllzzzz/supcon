import { ComponentPublicInstance } from 'vue';

export default (err :unknown, instance: ComponentPublicInstance | null, info: string) :void => {
	console.log('golobal', err);
};