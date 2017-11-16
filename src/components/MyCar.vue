<template>
<div>
	<!--<p @click="goSet">我的车页</p>-->
<!--<router-link to="/MyCar/MyCarset">跳转</router-link>-->
	<div class="carimg"><img src="../assets/images/mycar/1.jpg"/></div>
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
			/*goSet:function(){
				this.$router.push({path:"/MyCar/MyCarset"})
			}
*/
			
		}
		
	}
</script>

<style>
	.carimg{
		height: 3.9rem;
		width: 100%;
	}
</style>
