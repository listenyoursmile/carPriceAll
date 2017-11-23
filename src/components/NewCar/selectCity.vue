<template>
	<div>
		<x-header title="选择城市" :left-options="{backText: ''}" class="selectCity_header"></x-header>
		<div id="">
			
		</div>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		name:'selectCity',
		components:{
			XHeader
		},
		data(){
			city:[]
		},
		mounted(){
			this.$http({
				method:'get',
				dataType:'json',
				url:"/static/cityList.json"
			}).then(data=>{
				console.log(data.data)
//				let 
			})
			
		}
	}
</script>

<style>
	.selectCity_header .vux-header-title{
		color: #333;		
	}
	.selectCity_header .vux-header-left a{
		color: #333;	
	}
	.selectCity_header{
		background: #fafafa;
	}
</style>
