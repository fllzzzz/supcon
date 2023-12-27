<style lang="scss" scoped>
	.container {
		width: 366px;
		height: 673px;
		background-color: rgba(128,128,128,0.6);
	}
</style>

<template>
	<div class="container">
		<deviceBox></deviceBox>
	</div>
</template>

<script setup lang="ts">
	import deviceBox from '@/components/Info/deviceBox.vue';
</script>