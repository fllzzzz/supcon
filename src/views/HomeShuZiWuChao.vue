<style lang="scss" scoped>

</style>

<template>
	<CardDEviceController
		:config="deviceContorConfig"
	></CardDEviceController>
	<CardMediaController
		:config="mediaControConfig"
	></CardMediaController>
</template>

<script setup lang="ts">
	import type {
		Message
	} from '@/types';

	import type {
		Config as MediaContro
	} from '@/components/CardMediaController.vue';

	import type {
		Config as DeviceContor
	} from '@/components/CardDEviceController.vue';

	import * as viewTool from '@/hooks/viewTools';
	import CardMediaController from '@/components/CardMediaController.vue';
	import CardDEviceController from '@/components/CardDEviceController.vue';

	import {
		ref,
		watchEffect,
		onMounted,
	} from 'vue';

	const props = defineProps({
		message: {
			type: String,
			required: false
		}
	});

	const message = ref<Message | undefined>();

	message.value = viewTool.parseMessage(props.message);

	const deviceContorConfig :DeviceContor= {
		ctx: message.value!,
		deviceInfo: [
			{
				name: '主机',
				state: 0,
				disableRebootButton: false,
				disableState: false,
			}
		]
	};

	const mediaControConfig :MediaContro = {
		ctx: message.value!,
		marginRight: 45,
		usecolumn: true,
		marginBottom: 40,
		buttonOptions: [
			{
				text: '正片',
			},
			{
				text: '待机',
			},
			{
				text: '播放',
				image: require<string>('@/assets/images/yellow/播放.png'),
			},
			{
				text: '暂停',
				image: require<string>('@/assets/images/yellow/暂停.png'),
			},
			{
				text: '静音',
				image: require<string>('@/assets/images/yellow/静音.png'),
			},
			{
				text: '有声',
				image: require<string>('@/assets/images/yellow/有声.png'),
			},
			{
				text: '加音',
				image: require<string>('@/assets/images/yellow/加音.png'),
			},
			{
				text: '减音',
				image: require<string>('@/assets/images/yellow/减音.png'),
			},
			{
				text: '重播',
				image: require<string>('@/assets/images/yellow/重播.png'),
			}
		]
	};

	onMounted(() => {
		/*  */
	});
</script>