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
		Config as MediaContro
	} from '@/components/CardMediaController.vue';

	import type {
		Config as DeviceContor
	} from '@/components/CardDEviceController.vue';

	import CardMediaController from '@/components/CardMediaController.vue';
	import CardDEviceController from '@/components/CardDEviceController.vue';

	const deviceContorConfig :DeviceContor= {
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
		buttonOptions: [
			{
				marginRight: 62,
				content: {
					text: '播放',
					image: require<string>('@/assets/images/yellow/播放.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '暂停',
					image: require<string>('@/assets/images/yellow/暂停.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '静音',
					image: require<string>('@/assets/images/yellow/静音.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '加音',
					image: require<string>('@/assets/images/yellow/加音.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '减音',
					image: require<string>('@/assets/images/yellow/减音.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '播放',
					image: require<string>('@/assets/images/yellow/播放.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '暂停',
					image: require<string>('@/assets/images/yellow/暂停.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '静音',
					image: require<string>('@/assets/images/yellow/静音.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '加音',
					image: require<string>('@/assets/images/yellow/加音.png'),
				}
			},
			{
				marginRight: 62,
				content: {
					text: '减音',
					image: require<string>('@/assets/images/yellow/减音.png'),
				}
			},
		]
	};
</script>