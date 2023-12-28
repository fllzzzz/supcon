<style lang="scss" scoped>

</style>

<template>
	<CardDEviceController
		:config="config"
	></CardDEviceController>
</template>

<script setup lang="ts">
	import type {
		Message
	} from '@/types';

	import type {
		Config as DeviceContor
	} from '@/components/CardDEviceController.vue';

	import * as viewTool from '@/hooks/viewTools';
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

	const config :DeviceContor= {
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

	onMounted(() => {
		message.value = viewTool.parseMessage(props.message);
	});
</script>