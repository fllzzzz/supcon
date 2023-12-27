<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	.device-overview {
		width: 100%;
		height: 100%;
		@include T.themeify {

		}

		&__wrapper {
			width: 100%;
			height: 100%;
			padding-top: 45px;
			span {
				line-height: 1;
			}
		}

		&__wrapper__item {
			display: flex;
			flex-flow: column nowrap;
			.row {
				display: flex;
				flex-flow: row nowrap;
				justify-content: flex-start;
				align-items: center;
			}
		}
	}
</style>

<template>
	<div class="device-overview">
		<div class="device-overview__wrapper">
			<div class="device-overview__wrapper__main"></div>
			<div class="device-overview__wrapper__item">
				<template
					v-for="(item, index) in config?.itemInfo"
					:key="index"
				>
					<div class="row">
						<div class="col name">{{ item.name }}</div>
						<template
							v-for="(_item, _index) in item.deviceInfo"
						>
							<div class="col icon" :data-target="_item.id"></div>
						</template>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import type {
		PropType
	} from 'vue';

	import {
		ref,
		onMounted
	} from 'vue';

	type DeviceInfo = {
		id: string,
		value: number
	}[];

	type Config = {
		total :number;
		deviceInfo :DeviceInfo;
		itemInfo :{
			name :string;
			deviceInfo :DeviceInfo;
		}[]
	};


	const props = defineProps({
		config: {
			type: Object as PropType<Config>
		}
	})

	const config = ref<Config | undefined>();

	const itemContenMap = new Map<string, Config>([
		['green', {
			total: 43,
			deviceInfo: [
				{
					id: 'host',
					value: 24
				},
				{
					id: 'projector',
					value: 9
				},
				{
					id: 'supTV',
					value: 10
				},
			],
			itemInfo: [
				{
					name: '何为森',
					deviceInfo: [
						{
							id: 'host',
							value: 1
						},
						{
							id: 'projector',
							value: 1
						},
						{
							id: 'supTV',
							value: 1
						},
					]
				}
			]
		}],
		['yellow', {
			total: 43,
			deviceInfo: [
				{
					id: 'host',
					value: 24
				},
				{
					id: 'projector',
					value: 9
				},
				{
					id: 'supTV',
					value: 10
				},
			],
			itemInfo: [
				{
					name: '午潮传说',
					deviceInfo: [
						{
							id: 'host',
							value: 1
						},
						{
							id: 'projector',
							value: 1
						},
						{
							id: 'supTV',
							value: 1
						},
					]
				}
			]
		}]
	]);

	onMounted(() => {
		const _theme = document.documentElement.getAttribute('data-theme');

		if(! _theme) throw new Error('@deviceBox => data-theme is undefined');

		config.value = itemContenMap.get(_theme);
	});
</script>