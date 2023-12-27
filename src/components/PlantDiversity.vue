<style lang="scss" scoped>
	#plant-diversity {
		width: 100%;
		height: 100%;
		flex-flow: column nowrap;
		justify-content: flex-start;
		.box {
			width: 1625px;
			background-image: url('@/assets/images/home/content/box-background.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			padding: 22px 22px 82px 22px;
			box-sizing: border-box;
			.block {
				background-color: purple;
				margin-top: 28px;
				margin-left: 28px;
			}
			.row {
				width: 96.4%;
				margin-left: 60px;
				margin-bottom: -40px;
				display: flex;
				flex-flow: row wrap;
				justify-content: flex-start;
				align-items: center;
			}
		}
		#box1 {
			#subject {
				width: 110px;
				height: 21px;
				margin-bottom: 59px;
			}
			.row {
				.col {
					margin-bottom: 40px;
				}
				#col1 {
					width: 34px;
					height: 17px;
					background: purple;
					margin-right: 10px;
				}
				#col2 {
					width: 31px;
					height: 18px;
					background: purple;
					margin-right: 15px;
				}
				#col3, #col4 {
					width: 65px;
					height: 32px;
					background: #05E8A0;
					box-shadow: 0px 0px 18px 0px rgba(0,15,36,0.52);
					border-radius: 16px;
					margin-right: 16px;
				}
			}
		}
		#box2 {
			#subject {
				width: 137px;
				height: 22px;
				margin-bottom: 50px;
			}
			.row {
				.col {
					width: 120px;
					height: 34px;
					background: rgba(0,188,124,0.2);
					border: 1px solid #05E49E;
					border-radius: 17px;
					margin-right: 72px;
					margin-bottom: 40px;
				}
			}
		}
	}
</style>

<template>
	<div class="container" id="plant-diversity">
		<div class="box" id="box1">
			<div class="block" id="subject"></div>
			<div class="row" id="row1">
				<div class="col" id="col1"></div>
				<div class="col" id="col2"></div>
				<div class="col" id="col3"></div>
				<div class="col" id="col4"></div>
			</div>
		</div>
		<div class="box" id="box2">
			<div class="block" id="subject"></div>
			<div class="row" id="row1">
				<div class="col" id="col1"></div>
				<div class="col" id="col2"></div>
				<div class="col" id="col3"></div>
				<div class="col" id="col4"></div>
				<div class="col" id="col5"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>