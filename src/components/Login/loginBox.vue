<style lang="scss" scoped>
	#loginBox {
		width: 100%;
		height: 100%;
		background: rgba(5,50,42,0.23);
		border: 1px solid #1FCF97;
		opacity: 0.71;
		border-radius: 10px;
		padding: 54px 0 76px 0;
		flex-flow: column nowrap;
		justify-content: space-between;
		align-items: center;
		#logo {
			width: 430px;
			height: 47px;
			background-image: url('@/assets/images/login/loginBox/logo.png');
			background-size: contain;
			background-repeat: no-repeat;
		}
		#input {
			width: 367px;
			height: 218px;
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-between;
			align-items: center;
			#accout, #passwd {
				width: 100%;
				height: 79px;
				display: flex;
				flex-flow: column nowrap;
				justify-content: space-between;
				align-items: flex-start;
				.title {
					font-size: 20px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
					text-shadow: 0px 0px 10px rgba(14,22,48,0.7);
					margin-bottom: 8px;
				}
				:deep(.el-input){
					flex: 1;
					--el-input-hover-border-color: #1FCF97;
					--el-input-focus-border-color: #1FCF97;
					.el-input__wrapper{
						background: rgba(5,50,42,0.66);
						border: 1px solid #1FCF97;
						border-radius: 6px;
						box-shadow: none;
					}
				}
			}
			#extions {
				width: 355px;
				height: 20px;
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-between;
				align-items: center;
				#left, #right {
					height: 100%;
					line-height: 20px;
				}
				#left {
					:deep(.el-checkbox){
						--el-checkbox-checked-bg-color: #00C687;
						height: 100%;
						#savePasswdTitle {
							font-size: 14px;
							font-family: Alibaba PuHuiTi;
							font-weight: 400;
							color: #B6B6B6;
						}

					}
				}
				#right {
					:deep(.el-link) {
						height: 100%;
						#forgetPasswdTitle {
							font-size: 14px;
							font-family: Alibaba PuHuiTi;
							color: #00FFAE;
						}

					}
				}
			}
		}
		#login {
			width: 367px;
			height: 48px;
			:deep(.el-button) {
				width: 100%;
				height: 100%;
				background-image: linear-gradient(90deg, #109967 0%, #16DD9E 100%);
				border-radius: 6px;
				border: 0;
				#loginTitle {
					font-size: 24px;
					font-family: Alibaba PuHuiTi;
					font-weight: 400;
					color: #FFFFFF;
				}
			}
		}
	}
</style>

<template>
	<div class="container" id="loginBox">
		<div class="box" id="logo"></div>
		<div class="box" id="input">
			<div id="accout">
				<span class="title" id="accoutTitle">账号</span>
				<el-input v-model="accout" placeholder="请输入账号"></el-input>
			</div>
			<div id="passwd">
				<span class="title" id="passwdTitle">密码</span>
				<el-input v-model="passwd" placeholder="请输入密码"></el-input>
			</div>
			<div id="extions">
				<div id="left">
					<el-checkbox v-model="isSavePasswd">
						<span class="titile" id="savePasswdTitle">记住密码</span>
					</el-checkbox>
				</div>
				<div id="right">
					<el-link :underline="false">
						<span class="title" id="forgetPasswdTitle">忘记密码？</span>
					</el-link>
				</div>
			</div>
		</div>
		<div class="box" id="login" @click="loginHandler">
			<el-button>
				<span class="title" id="loginTitle"> 登 录 </span>
			</el-button>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { ref } from 'vue';

	import { useRouter } from 'vue-router';

	const router = useRouter();

	const isSavePasswd = ref<boolean>(false);
	const accout = ref<string>('');
	const passwd = ref<string>('');

	const loginHandler = () => {
		router.push({
			name: 'info',
		});
	};
</script>