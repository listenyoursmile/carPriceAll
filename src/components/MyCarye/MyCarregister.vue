<template>
	<div>
		<x-header :left-options="{showBack: isTrue}" class="carimg">账账号注册</x-header>
		<div class="langbut">
			<li style="border-bottom: 1px solid #ccc;"><input type="text" placeholder="请输入你的手机号" /></li>
			<li><input type="text" placeholder="请输入你的用密码" /></li>
			<li><input type="text" placeholder="请输入你验证码" /></li>
			<button>下一步</button>
		</div>
		
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'SecondCar',
		data(){
			return{
				isTrue:true
			}
		},
		components: {
			XHeader
		},
		methods:{
			

		}
	}
</script>
<style>
	.carimg{
		background: url(../../assets/images/header-bg.jpg);
		background-size:cover;
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