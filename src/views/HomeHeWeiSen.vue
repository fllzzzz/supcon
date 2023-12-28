<style lang="scss" scoped>

</style>

<template>
	<CardDEviceController
		:config="config"
	></CardDEviceController>
</template>

<script setup lang="ts">
	import type {
		Config as DeviceContor
	} from '@/components/CardDEviceController.vue';

	import CardDEviceController from '@/components/CardDEviceController.vue';

	const config :DeviceContor= {
		deviceInfo: [
			{
				name: '主机',
				state: 0,
				disableRebootButton: false,
				disableState: false,
			}
		]
	};
</script>