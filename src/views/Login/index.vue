<style lang="scss" scoped>
	#loginView {
		width: 100vw;
		height: 100vh;
		background-image: url('@/assets/images/login/background.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		.box {
			position: absolute;
		}
		#left {
			width: 918px;
			height: 668px;
			top: 242px;
			left: 106px;
			background-image: url('@/assets/images/login/logo.png');
			background-size: contain;
			background-repeat: no-repeat;
		}
		#right {
			width: 544px;
			height: 579px;
			top: 263px;
			right: 247px;
		}
	}
</style>

<template>
	<div class="container" id="loginView">
		<div class="box" id="left"></div>
		<div class="box" id="right">
			<LoginBox></LoginBox>
		</div>
	</div>
</template>

<script setup lang="ts">
	import LoginBox from '@/components/Login/loginBox.vue';
</script>