<style lang="scss" scoped>
	@use '@/assets/styles/theme' as T;

	#infoView {
		@include T.themeify {
			background-image: url('@/assets/images/#{T.get(id)}/info/background.png');

			#top {
				background-image: url('@/assets/images/#{T.get(id)}/logo.png');
			}
			
			#middle {
				#left {
					width: T.get(device-info-middle-left-width);
					height: T.get(device-info-middle-left-height);
					background-image: url('@/assets/images/#{T.get(id)}/info/logo.png');
				}
			}

			#footer {
				#left {
					background: T.get(device-info-footer-left-bg-color);
				}
				#right {
					:deep(.el-button){
						background-image: T.get(device-info-footer-right-bg-color);
					}
				}
			}
		}

		width: 100vw;
		height: 100vh;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: flex-start;
		padding: 60px 124px 75px 71px;
		#top {
			width: 446px;
			height: 45px;
			background-size: 100% 100%;
			background-repeat: no-repeat;
		}
		#middle {
			width: 1689px;
			height: 673px;
			margin-left: 36px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			#left {
				background-size: contain;
				background-repeat: no-repeat;
				align-self: flex-end;
			}
			#right {
				width: 366px;
				height: 673px;
			}
		}
		#footer {
			width: 1591px;
			height: 92px;
			margin-left: 109px;
			display: flex;
			flex-flow: row nowrap;
			justify-content: space-between;
			align-items: center;
			#left {
				width: 1101px;
				height: 92px;
				opacity: 0.91;
				border-radius: 10px;
				padding: 25px 26px 23px 26px;
				box-sizing: border-box;
				overflow: hidden;
				#introTitle {
					font-size: 16px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
			#right {
				width: 316px;
				height: 70px;
				:deep(.el-button){
					width: 100%;
					height: 100%;
					border-radius: 6px;
					border: none;
					#enterTitle {
						font-size: 24px;
						font-family: Alibaba PuHuiTi;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>

<template>
	<div class="container" id="infoView">
		<div class="box" id="top"></div>
		<div class="box" id="middle">
			<div class="box" id="left"></div>
			<div class="box" id="right">
				<DeviceBox></DeviceBox>
			</div>
		</div>
		<div class="box" id="footer">
			<div class="box" id="left">
				<span class="title" id="introTitle">
					午潮山科普宣教展厅拟建设于午潮山实验林场森林资源管护用房3号楼和2号楼1层北侧，总建筑面积约320平方米。包括生态科普馆和历史文化馆两大室内展示区域和室外展示区域。室外展示区域主要位于午潮山林区和白岩寺林区，通过科普导览导视系统、树木科普标识标牌进行景观科普展示。
				</span>
			</div>
			<div class="box" id="right" @click="enterHandler">
				<el-button>
					<span class="title" id="enterTitle">点击进入</span>
				</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import DeviceBox from '@/components/Info/deviceBox.vue';

	import { useRouter } from 'vue-router';

	const router = useRouter();

	const enterHandler = () => {
		router.push({
			name: 'home'
		});
	};
</script>