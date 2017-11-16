<template>
	<div>
		<x-header :left-options="{showBack: isTrue}" class="carimg"><span @click="goCar" style="position: absolute;right: 0.5rem;">x</span>账号登陆</x-header>
		<div class="langbut">
			<li style="border-bottom: 1px solid #ccc;"><input type="text" placeholder="请输入你的用户名" /></li>
			<li><input type="password" placeholder="请输入你的用密码" /></li>
			
			<button>登陆</button>
			<p class="langgo">
				<router-link to="/MyCar/MyCarset">立即注册</router-link>
				<router-link to="/MyCar/MyCarset">忘记密码</router-link>
			</p>
		</div>
		
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'SecondCar',
		data(){
			return{
				isTrue:false
			}
		},
		components: {
			XHeader
		},
		methods:{
			goCar:function(){
				this.$router.push({path:"/MyCar"})
			}

		}
	}
</script>
<style>
	.carimg{
		background: url(../../assets/images/header-bg.jpg) repeat-x;
		height: 1.5rem;
		overflow: hidden;
	}
	.langbut{
		padding: 1rem 0.6rem;
	}
	.langbut li{
		font-size: 0.4rem;
		width: 100%;
		height: 0.9rem;
		
		list-style:none;
	}
	.langbut input{
		width: 100%;
		border: none;
		height: 100%;
	}
	.langbut button{
		display: block;
		width: 100%;
		height: 1.15rem;
		background: #1d88eb;
		margin: 1rem 0 0.72rem;
	}
	.langgo{
		font-size: 0.4rem;
		display: flex;
		justify-content: space-between;
	}
</style>