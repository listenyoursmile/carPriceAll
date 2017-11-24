<template>
	<div>
		<x-header :left-options="{showBack: isTrue}" class="carimg">账号注册</x-header>
		<div class="registerbut">
			<li style="border-bottom: 1px solid #ccc;"><input type="text" placeholder="请输入你的手机号  以13、14、15、17、18开头" v-model="pnumber"/></li>
			<li style="border-bottom: 1px solid #ccc;"><input type="text" placeholder="请输入你的用户名" v-model="userID"/></li>
			<li style="border-bottom: 1px solid #ccc;"><input type="text" placeholder="请输入你的用密码" v-model="password"/></li>
			<li><input type="text" placeholder="请输入你验证码" v-model="code" class="maycarcode"/><span v-text="codeclick" @click="codeclick1"></span></li>
			<button @click="register" class="nycarclick">下一步</button>
		</div>
		
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default{
		name:'SecondCar',
		data(){
			return{
				isTrue:true,
				userID:'',
				pnumber:'',
				password:'',
				code:'',
				codeclick:'点击获取验证码'
			}
		},
		components: {
			XHeader
		},
		mounted(){
			
		},
		methods:{
			codeclick1:function(){
				var code='';
			        //首先默认code为空字符串
			        //设置长度，这里看需求，我这里设置了4
			        var codeLength = 4;
			        //设置随机字符
			        var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
			        //循环codeLength 我设置的4就是循环4次
			        for(var i = 0; i < codeLength; i++){
			            //设置随机数范围,这设置为0 ~ 36
			             var index = Math.floor(Math.random()*36);
			             //字符串拼接 将每次随机的字符 进行拼接
			             code += random[index];
			        }
				this.codeclick =code;
			},
			register:function(){
				if(this.pnumber==''){
					alert("输入手机号")
				}else{
					if(this.password==''&&$state.userID==''){
						alert("输入个人信息")
					}else{
						let req = /^1[3|4|5|7|8][0-9]\d{4,8}$/
						if(req.test(this.pnumber)==true){
							if(this.code==''||this.code!=this.codeclick){
							alert('请输入正确验证码')
							}else{
								this.$router.push({name:'MyCar'})
								this.$store.commit('changeLogin','100')
								this.$store.state.userID=this.userID
							}	
						}else{
						alert('请输入正确的手机号')
						}
					}
				}
			}
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
	.registerbut{
		padding: 1rem 0.6rem;
	}
	.registerbut li{
		font-size: 0.4rem;
		width: 100%;
		height: 0.9rem;
		
		list-style:none;
	}
	.registerbut input{
		width: 100%;
		border: none;
		height: 100%;
	}
	.registerbut .maycarcode{
		width: 60%;
	}
	.registerbut .nycarclick{
		display: block;
		width: 100%;
		height: 1.15rem;
		background: #1d88eb;
		margin: 1rem 0 0.72rem;
	}
	
	.registerbut span{
		display: inline-block;
		height: 100%;
		background: red;
		color: #C1C1C1;
		font-size: 0.5rem;
	}
	.langgo{
		font-size: 0.4rem;
		display: flex;
		justify-content: space-between;
	}
</style>