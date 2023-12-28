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
			}
		]
	};

	const mediaControConfig :MediaContro = {
		ctx: message.value!,
		marginBottom: 40,
		marginRight: 68,
		activeColor: 'linear-gradient(90deg, #109967 0%, #16DD9E 100%)',
		buttonOptions: [
			{
				text: '伯乐树',
			},
			{
				text: '银缕梅',
			},
			{
				text: '天目铁木',
			},
			{
				text: '红豆杉',
			},
			{
				text: '水杉',
			},
			{
				text: '银杏',
			},
			{
				text: '紫薇',
			},
			{
				text: '樱花',
			},
			{
				text: '杜鹃',
			}
		]
	};

	onMounted(() => {
		message.value = viewTool.parseMessage(props.message);
	});
</script>