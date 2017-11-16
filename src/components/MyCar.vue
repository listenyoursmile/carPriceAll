<template>
<div>
	<x-header :left-options="{showBack:isTrue}" class="box"></x-header>
	<!--<p @click="goSet">我的车页</p>-->
	<router-link to="/MyCar/MyCarset">跳转</router-link>  
	<router-view></router-view>
</div>	
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'MyCar',
		data(){
			return {
				isTrue:false
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
	.box{
		background: #fff;
	}
</style>
