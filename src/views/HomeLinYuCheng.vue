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

	const deviceContorConfig :DeviceContor= {
		ctx: message.value!,
		deviceInfo: [
			{
				name: '主机',
				state: 0,
				disableRebootButton: false,
				disableState: false,
			},
			{
				name: '大屏',
				state: 0,
				disableRebootButton: true,
				disableState: true,
			},
			{
				name: '投屏屏',
				state: 0,
				disableRebootButton: true,
				disableState: true,
			}
		]
	};

	const mediaControConfig :MediaContro = {
		ctx: message.value!,
		marginRight: 62,
		buttonOptions: [
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
				text: '加音',
				image: require<string>('@/assets/images/yellow/加音.png'),
			},
			{
				text: '减音',
				image: require<string>('@/assets/images/yellow/减音.png'),
			}
		]
	};

	onMounted(() => {
		message.value = viewTool.parseMessage(props.message);
	});
</script>