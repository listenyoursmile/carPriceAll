<template>
<div>
	<div class="cartop" @click="goLanding">
		<img src="../assets/images/mycar/1.jpg"/>
	</div>
	<!--<p @click="goSet">我的车页</p>-->
	<!--<router-link to="/MyCar/MyCarset">跳转</router-link>  -->
	<router-view></router-view>
</div>	
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'MyCar',
		data(){
			return {
			
			}
		},
		components: {
			XHeader
		},
		methods:{
			goLanding:function(){
				this.$router.push({path:"/MyCar/MyCarlanding"})
			}

		}
		
	}
</script>

<style>
	.cartop{
		height: 3.9rem;
		width: 100%;
	}
	.cartop img{
		height: 3.9rem;
		width: 100%;
		background: #3091ea;
	}
</style>
